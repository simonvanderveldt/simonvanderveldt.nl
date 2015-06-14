---
title: boot2docker on xhyve
tags: virtualization containers docker
css: code.css
---

<div class="alert alert-warning" role="alert">
    <strong>Be warned!</strong> This is all fairly new stuff, my machine locked up if I had run a Virtualbox machine prior to starting an xhyve machine. Don't say I didn't warn you ;)
</div>
[xhyve](https://github.com/mist64/xhyve) is a new hypervisor in the vein of [KVM](http://www.linux-kvm.org) on Linux and [bhyve](http://bhyve.org) on BSD. It's actually a [port](https://github.com/mist64/xhyve#what-is-bhyve) of BSD's bhyve to OS X.
It's more similar to KVM than to Virtualbox in that it's minimal and commandline only which makes it a good fit for an always running virtual machine like boot2docker on OS X.
This post documents the steps to get boot2docker running within xhyve and contains some quick benchmarks as well to compare xhyve's performance with Virtualbox.


## Building xhyve
Building xhyve is actually as simple as can be. As documented in xhyve's [introduction to the world](http://www.pagetable.com/?p=831) it's only a matter of cloning the sources and issueing a `make`:

```console
git clone https://github.com/mist64/xhyve
$ cd xhyve
$ make
$ ./xhyverun.sh
```


## Extract the boot2docker kernel and initrd
Start by creating a directory named `boot2docker` inside the xhyve directory and making a copy of `xhyverun.sh` to use for boot2docker.

```console
$ mkdir boot2docker
$ cp xhyverun.sh xhyve-boot2docker.sh
```

xhyve currently doesn’t come with a BIOS or EFI booter. This means it's necessary to [extract](https://github.com/boot2docker/boot2docker/blob/master/doc/AUTOMATED_SCRIPT.md#extracting-initrd-and-vmlinuz64) the kernel and initrd from boot2docker and pass them to xhyve manually.

The simplest way to do so is to mount the boot2docker iso which can be found in `~/.boot2docker/boot2docker.iso` and then copying the `initrd.img` and `vmlinuz64` from the `boot` directory of the mounted volume to the `boot2docker` directory. 


## Prepare the xhyve-boot2docker.sh file
Configurtion of the xhyve virtual machine is done through command line arguments. The `xhyverun.sh`/`xhyve-boot2docker.sh` shell scripts make this a bit easier and more transparent.
To match the virtual machine [specs from boot2docker](https://github.com/boot2docker/boot2docker/blob/master/doc/FAQ.md#what-are-the-specs-of-the-vm) edit the `xhyve-boot2docker.sh` file so it reads like this:

```bash
#!/bin/sh
KERNEL="boot2docker/vmlinuz64"
INITRD="boot2docker/initrd.img"
CMDLINE="loglevel=3 user=docker console=ttyS0 console=tty0 noembed nomodeset norestore waitusb=10:LABEL=boot2docker-data base"

MEM="-m 2G"
SMP="-c 8"
NET="-s 2:0,virtio-net,en0"
IMG_CD="-s 3,ahci-cd,boot2docker/boot2docker.iso"
#IMG_HDD="-s 4,virtio-blk,/somepath/somefile.img"
PCI_DEV="-s 0:0,hostbridge -s 31,lpc"
LPC_DEV="-l com1,stdio"
#UUID="-U deadbeef-dead-dead-dead-deaddeafbeef"

build/xhyve $MEM $SMP $PCI_DEV $LPC_DEV $NET $IMG_CD $IMG_HDD $UUID -f kexec,$KERNEL,$INITRD,"$CMDLINE"
```

The `CMDLINE` is taken from the boot2docker [isolinux configuration](https://github.com/boot2docker/boot2docker/blob/master/rootfs/isolinux/isolinux.cfg#L7Kernel).


## Start the xhyve boot2docker VM
To be able to access networking xhyve has to be run as root, so start it with `sudo ./xhyve-boot2docker.sh`.
Supposedly it also works if you code sign the `xhyve` binary but I haven't tried that.

This will take a bit of time and then give the password prompt for the `docker` user. Log in using the password `tcuser` and that's it, boot2docker is running inside xhyve! :)

Note: to shutdown the xhyve boot2docker VM issue `sudo halt` from within the VM.


## Create a persistant disk
Obviously the previous setup isn't perfect. boot2docker is fully running in memory with no persistant storage and only the 2GB of in-memory storage available to it. To remedy this the first thing to do is a persistant disk just like boot2docker does with Virtualbox.

Start by creating a virtual hard disk image. The `count` number is the size in GB the image will be.

```console
$ dd if=/dev/zero of=boot2docker/hdd.img bs=1g count=20
```

boot2docker in Virtualbox automatically creates an ext4 partition and labels it with `boot2docker-data`. Then during boot boot2docker checks if a partition exists with this label and uses it as it's persistant partition.

Since none of this works automatically with xhyve some manual steps are necessary. First change the `xhyve-boot2docker.sh` script to add the `boot2docker.hdd.img` image as a harddisk:

```bash
#!/bin/sh
KERNEL="boot2docker/vmlinuz64"
INITRD="boot2docker/initrd.img"
CMDLINE="loglevel=3 user=docker console=ttyS0 console=tty0 noembed nomodeset norestore waitusb=10:LABEL=boot2docker-data base"

MEM="-m 2G"
SMP="-c 8"
NET="-s 2:0,virtio-net,en0"
IMG_CD="-s 3,ahci-cd,boot2docker/boot2docker.iso"
IMG_HDD="-s 4,virtio-blk,boot2docker/hdd.img"
PCI_DEV="-s 0:0,hostbridge -s 31,lpc"
LPC_DEV="-l com1,stdio"
#UUID="-U deadbeef-dead-dead-dead-deaddeafbeef"

build/xhyve $MEM $SMP $PCI_DEV $LPC_DEV $NET $IMG_CD $IMG_HDD $UUID -f kexec,$KERNEL,$INITRD,"$CMDLINE"
```

Now start boot2docker again to partition the disk, format it and add the label.

``` console
$ sudo ./xhyve-boot2docker.sh
# boot messages
# log in using tcuser password again

$ sudo fdisk /dev/vda
# fdisk sequence of keys to press follows
p # Primary partition
1 # Partition number 1
<enter> # Use default value for First cylinder (1)
<enter> # Use default value for Last cylinder (end of disk)
p # print partition table to check
w # Write changes to disk

# Now format and label the new partition
$ sudo mkfs.ext4 /dev/vda1 -L boot2docker-data
# Now restart to have boot2docker use the new device
$ sudo halt
$ sudo ./xhyve-boot2docker.sh
```


## Access the docker daemon inside xhyve from your host
Since currently there is no way to copy the necessary certificates between the virtual machine and the host a dirty workaround is to [disable TLS](https://github.com/boot2docker/boot2docker/blob/master/README.md#tls-support), which is obviously bad from a security perspective.

To do so edit `/var/lib/boot2docker/profile` add the line `DOCKER_TLS=no` to it and restart docker `sudo /etc/init.d/docker restart` or restart the virtual machine. Once restarted find out the IP of the virtual machine using `ifconfig` and on a terminal on your host set the `DOCKER_HOST` environment variable to this IP address. For example `export DOCKER_HOST=tcp://192.168.64.1:2375`. No you can simply use `docker` from your host to control the Docker daemon inside the virtual machine.


## Benchmarks
xhyve looks like a very good fit for an always running virtual machine. Because of this it could maybe replace Virtualbox as the virtual machine used for boot2docker, so I ran some very basic benchmarks to check xhyve's performance.

To do so I used Casey Bisson's [simple container benchmarks](https://registry.hub.docker.com/u/misterbisson/simple-container-benchmarks/) Docker image he used in his [AWS vs Joyent](https://www.joyent.com/blog/docker-bake-off-aws-vs-joyent) comparison.

Here are the averaged results:

- Virtualbox
  - Disk: 650 MB/s
  - CPU: 22.2 MB/s
- xhyve
  - Disk: 410 MB/s
  - CPU: 6.1 MB/s

So basically right now xhyve is quiet a bit slower for both. Not really a surprise given that it's barely over a week old ;)