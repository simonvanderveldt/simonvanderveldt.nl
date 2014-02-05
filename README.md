# simonvanderveldt.github.io

Source for [http://simonvanderveldt.nl](simonvanderveldt.nl), uses the static site generator [Nikola](http://getnikola.com).
For more info about how the site is setup see [http://simonvanderveldt.nl/about](simonvanderveldt.nl/about).

# How to use
To install Nikola several system packages are required:
- python-dev
- libxml2-dev
- libslt1-dev

Apart from these Nikola dependencies the site uses YUI-compressor to compress Javascript and CSS and we need pip to install Python dependencies.

When using Debian/Ubuntu run the following command to install all dependencies:
`sudo apt-get install python-dev python-pip libxml2-dev libxslt1-dev yui-compressor`

Note that it isn't necessary to install `python-dev` and `python-pip` on Travis because these are already included in the Travis Python environment.

Furthermore the site depends on several Python packages:
- Nikola: The site is built using Nikola (obvisously ;))
- webassets: Used to bundle (Javascript and CSS) assets
- markdown: All posts are written in MarkDown

Install the Python dependencies with the following command:
`sudo pip install -r requirements.txt`
