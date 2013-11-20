---
layout: post
title: LXC on Debian Wheezy
categories: linux virtualization
tags: 
---

[LXC (LinuX Containers)](http://linuxcontainers.org) offers a lot of the advantages of (para)virtualisation with the added benefits that it can run on any kind of hardware (it doesn't need hardware support for virtualisation) with lower overhead than virtualisation.
The virtual environments that LXC provides are comparable to a chroot but LXC adds control over the virtual environments resources like CPU-time and network-usage and offers more isolation.
This also means it's only possible to run the same "family" of guest operating systems as the host. I.e. it's not possible to run Windows using LXC, but it is possible to run different Linux distributions like a Debian and Fedora guest on an Arch Linux host.
Note that if you need a really secure environment LXC isn't the right choice, stick with paravirtualisation like [KVM](http://www.linux-kvm.org) or [XEN](http://www.xenproject.org) instead.

## Installing LXC
LXC is included in the main Debian package repository, so you installing it is very simple

```bash
sudo apt-get install lxc
```
{: .coderay}

## Creating a new container
Creating a new container can we done with the `lxc-create` command

```bash
sudo lxc-create -n containername -t templatename
```
{: .coderay}

You will see some feedback about the container creation on your screen including the (root) username and password you can use to login to the container once you start it.

### LXC Templates
LXC template are shell scripts that automate the creation of a certain type of container. The templates can be found in `/usr/share/lxc/templates/`, these are the available templates in Debian Wheezy

```bash
ls -hl /usr/share/lxc/templates/
> -rwxr-xr-x 1 0  12K Aug 22  2012 lxc-altlinux
> -rwxr-xr-x 1 0  14K Aug 22  2012 lxc-archlinux
> -rwxr-xr-x 1 0  24K Aug 22  2012 lxc-debconf
> drwxr-xr-x 2 0 4.0K May 21  2013 lxc-debconf.d
> lrwxrwxrwx 1 0   11 Aug 22  2012 lxc-debian -> lxc-debconf
> lrwxrwxrwx 1 0   13 Aug 22  2012 lxc-debian.d -> lxc-debconf.d
> -rwxr-xr-x 1 0 9.8K Aug 22  2012 lxc-fedora
> -rwxr-xr-x 1 0 9.9K Aug 22  2012 lxc-opensuse
> lrwxrwxrwx 1 0   11 Aug 22  2012 lxc-progress -> lxc-debconf
> lrwxrwxrwx 1 0   13 Aug 22  2012 lxc-progress.d -> lxc-debconf.d
> -rwxr-xr-x 1 0 4.0K Aug 22  2012 lxc-sshd
> -rwxr-xr-x 1 0 7.6K Aug 22  2012 lxc-ubuntu-cloud
```
{: .coderay}

To use a template you remove `lxc-` from their name. So to use the `lxc-debian` you only have to write `debian` as templatename.

```bash
sudo lxc-create -n containername -t debian
```
{: .coderay}

## Overview and status of containers
To see if the container was created succesfully we use the `lxc-list` command. This will show all available LXC containers grouped by their status (running, frozen and stopped). Our newly created container should be listed in the stopped section.

```bash
sudo lxc-list
>RUNNING
>
>FROZEN
>
>STOPPED
> containername
```
{: .coderay}

## Starting a container
Starting a container can be done with the `lxc-start` command. Note that you want to add the `-d` switch to make the container daemonize, if you don't do that it will take over your current terminal session and you won't be able to exit back to it.

```bash
sudo lxc-start -d -n containername
```
{: .coderay}

Now if we run `lxc-list` our container is show as running

```bash
sudo lxc-list
>RUNNING
> containername
>
>FROZEN
>
>STOPPED
```
{: .coderay}

## Using a container
To actually use a container from your host we make use of the 'lxc-console' command.

```bash
sudo lxc-console -n containername
```
{: .coderay}

After doing this you will see a new terminal with a login prompt just as if you just started up a new session. You can login with the username and password that were given to you when you created the container.

That's it, you are now inside your Debian container and you can use it just like a normal install of Debian :)