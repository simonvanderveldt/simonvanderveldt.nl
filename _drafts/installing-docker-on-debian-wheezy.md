<!--
.. link: 
.. description: 
.. tags: virtaulisation, lxc, draft
.. date: 2014-01-25 10:00:00
.. title: Installing Docker on Debian Wheezy
.. slug: installing-docker-on-debian-wheezy
-->

The only officially supported installation for Docker is for Ubuntu (12.04 Precise Pangolin (LTS)) and (13.04 Raring Ringtail), several other distributions are mentioned in the documentation but Debian (the distro Ubuntu is based on) is nowhere to be found :(
This short blogpost will go through the steps necessary to install Docker on Debian Wheezy.
<!-- TEASER_END -->

# Warning
Note that there are known issues with the default kernel (3.2) in Debian Wheezy, see http://docs.docker.io/en/latest/installation/kernel/

# Install prerequisites
* LXC

Note that Go (golang) isn't required because we will use the binary from docker.io which is statically linked/compiled :)

# Add the docker.io repo to apt's sources
Add the repo to a new sources list
```
echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list
```

Import docker.io's repository PGP key
```
wget -qO- https://get.docker.io/gpg | apt-key add -
```

# Install docker
```
apt-get update
apt-get install lxc-docker
```

# Check if it works
```
docker version
# Result
Client version: 0.7.3
Go version (client): go1.2
Git commit (client): 8502ad4
Server version: 0.7.3
Git commit (server): 8502ad4
Go version (server): go1.2
Last stable version: 0.7.3

```

```
docker init ubuntu
```