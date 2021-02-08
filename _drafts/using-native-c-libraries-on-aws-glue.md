.zip for dependencies but the zipimport that's part of python doesn't support loading .so modules from those zip files, see https://docs.python.org/2/library/zipimport.html

.whl files need to be installed and cannot be used to offer python modules at runtime
But eggs can ;)


Build egg using matching versions (i.e. Python 2.7 on amazonlinux:2017.09)
upload to S3
set as extra pythonpackage path
Set os.environ["PYTHON_EGG_CACHE"] = "/tmp/.eggcache" because the default egg cache patch is read-only on glue
```
pkg_resources.ExtractionError: Can't extract file(s) to egg cache

The following error occurred while trying to extract file(s) to the Python egg
cache:

[Errno 13] Permission denied: '/home/.cache'

The Python egg cache directory is currently set to:

/home/.cache/Python-Eggs

Perhaps your account does not have write access to this directory? You can
change the cache directory by setting the PYTHON_EGG_CACHE environment
variable to point to an accessible directory.
```



# Getting the eggs
For now used buildout and zipped the extracted .egg directories again
There must be a better way :P

# Multiple dependencies
## Multiple egg files
Works, just need to pass them all using `'--extra-py-files': 's3://bucket/prefix/lib_A.zip,s3://bucket_B/prefix/lib_X.zip'}`

## All dependencies in single file
https://github.com/dairiki/humpty
What might work is just doing a normal `pip install -t <dir>`, zipping that dir and passing it in `--extra-files` (whcih seems to be referenced files path in the Console). And then extracting that zip in the main script and adding it's location to `sys.path`
