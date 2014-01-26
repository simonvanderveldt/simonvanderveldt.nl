<!--
.. link: 
.. description: 
.. tags: git, debian, draft
.. date: 2014-01-26 10:00:00
.. title: Git subtree on Debian Wheezy
.. slug:
-->

Add backports http://backports.debian.org/Instructions/
install git

Add to path

Global
```
sudo chmod +x /usr/share/doc/git/contrib/subtree/git-subtree.sh
sudo ln -s /usr/share/doc/git/contrib/subtree/git-subtree.sh /usr/local/bin/git-subtree
```

USer
sudo chmod +x /usr/share/doc/git/contrib/subtree/git-subtree.sh
ln -s /path/to/git-subtree.sh /usr/local/bin/git-subtree