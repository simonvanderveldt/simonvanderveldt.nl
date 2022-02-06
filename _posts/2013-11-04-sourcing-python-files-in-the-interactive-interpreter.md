---
title: Sourcing Python files in the interactive interpreter
tags: python
css: code.css
---

One of the most useful features of a Linux shell I often use is sourcing of files. Sourcing a file basically means that the file's code is run as if you typed it in yourself. Everything the code in the file does is applied to the shell you're currently using and all its global variables are added to your current shell. It's also possible to do this in Python, with the function [`execfile`](http://docs.python.org/2/library/functions.html#execfile).

All you have to do is run `execfile` with the path to the file you want to source as the only argument:

```python
execfile('filename.py')
```

All the code inside the file you source will be run by the interpreter and all its global variables as well as its functions and classes will we added to your interactive interpreter's session.

If the file you want to source is in a different directory either enter the full path to the file in the execfile command or change to the directory where the file is located. In the default Python interactive interpreter you can change the directory by doing:

```python
import os
os.chdir('/path/to/directory')
```

Note that this path notation also works on Windows (no need to type `C:\path\etc`).

If you use IPython you don't need to import anything since it has [filesystem navigation](http://ipython.org/ipython-doc/rel-1.1.0/interactive/shell.html#directory-management) built in (using [magic functions](http://ipython.org/ipython-doc/dev/interactive/tutorial.html#magic-functions)), so you can just use:

```python
cd /path/to/directory
```
