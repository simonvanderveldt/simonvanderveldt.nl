---
tags: webdevelopment python
css: code.css
---

After I decided to switch this blog over from [Jekyll](http://jekyllrb.com) to [Nikola](http://getnikola.com) the first thing to do was to configure Nikola to my liking.
Nikola offers plenty of options to configure, as of this writing it has more than 100 settings for all of its options! Since I want something as lean as possible some tweaking and workarounds were necessary to make it work the way I wanted to. This post will cover the way I configured Nikola.

All of Nikola's settings are located in the file `conf.py` that is created when a new Nikola project is initilized using `nikola init projectname`.


# Rename stories to pages
First of all for some reason pages in Nikola are called stories :? I just want them to be called what they are - pages ;)
It's a simple as changing the PAGES tuple to:

```python
PAGES = (
    ("pages/*.md", "pages", "story.tmpl"),
)
```


# Output posts and pages to root of site
Instead of outputting all posts to simonvanderveldt.nl/posts and all pages to simonvanderveldt.nl/pages I want posts and pages to reside directly under the root of my site.
Both the POSTS and PAGES tuples contain 3 values per entry: the wildcard to match the source file with (`pages/*.md`), the destination (`pages`) and the template to use to render the output (`story.tmpl`).
Simply change the destination to an empty string to have the output go to the root of the site.

```python
POSTS = (
    ("posts/*.md", "", "post.tmpl"),
)
PAGES = (
    ("pages/*.md", "", "story.tmpl"),
)
```


# Make markdown the default compiler
First of all to use markdown in any Python program the [Python markdown package](https://pypi.python.org/pypi/Markdown) needs to be installed. This can be done with:

```console
pip install markdown
```

To enable the processing of markdown files by Nikola add a pattern that matches your chosen markdown extension (I use \*.md) to the top of the POSTS and PAGES tuples:

```python
POSTS = (
    ("posts/*.md", "posts", "post.tmpl"),
    ("posts/other format", "posts", "post.tmpl"),
    etc
)
PAGES = (
    ("pages/*.md", "pages", "story.tmpl"),
    ("pages/other format", "pages", "post.tmpl"),
    etc
)
```

It is not necessary to change anything else, Nikola has already preconfigured the actual markdown compiler for the \*.md, \*.mdown and \*.markdown extensions (in the `COMPILERS` tuple) so after this simple change it can process existing \*.md files in the `posts` and `pages` folders of a nikola project.

Using `nikola new_post` will create the post as \*.md file as long as markdown is the first option in the POSTS and PAGES tuples.


# Enable GitHub Flavored Markdown
By default python-markdown uses the rules from [standard markdown](http://daringfireball.net/projects/markdown/), but I prefer the simplicity of [GitHub Flavored Markdown (GFM)](https://help.github.com/articles/github-flavored-markdown).
Luckily python-markdown comes with a lot of [extensions](https://web.archive.org/web/20181122141519/https://python-markdown.github.io/extensions/) that can be easily enabled. To make python-markdown mimic GFM the following extensions have to be enabled:

* [nl2br](https://web.archive.org/web/20170917091951/http://pythonhosted.org/Markdown/extensions/nl2br.html): newline to linebreak
* [fenced_code](https://web.archive.org/web/20130328133516/http://pythonhosted.org/Markdown/extensions/fenced_code_blocks.html): fenced code blocks
* [smart_strong](https://web.archive.org/web/20130328133343/http://pythonhosted.org/Markdown/extensions/smart_strong.html): do not boldify multiple underscores in words
* [codehilite](https://web.archive.org/web/20130403084416/http://pythonhosted.org/Markdown/extensions/code_hilite.html): syntax highlighting (using [Pygments](http://pygments.org))

Note that some funcionality is missing, but can be provided using third party extensions:

* URL autolinking: [markdown-urlize](https://github.com/r0wb0t/markdown-urlize) is available for this but has several issues and is currently not maintained
* Task lists: [markdown-checklist](https://github.com/FND/markdown-checklist) is available and seems to work fine (though I'm not using this myself so no guarantees ;))
* Strikethrough using `~~text~~`: [mdx_del_ins](https://github.com/aleray/mdx_del_ins) provides this as well as highlighting `++word++` as inserted. Note that this can cause [issues with text about C++](https://bitbucket.org/site/master/issue/8557/)...

Enabling the extension can be done by adding them to the `MARKDOWN_EXTENSIONS` variable in Nikola's `conf.py`:

```python
MARKDOWN_EXTENSIONS = ["nl2br", "fenced_code",
"smart_strong","codehilite(linenums=table)"]
```

Codehilite's `linenums=table` argument uses Pygments to add linenumbers in a separate table column to the highlighted code block.


# Enable footnotes in markdown
Footnots in markdown can be used by enabling the [footnotes extension](https://web.archive.org/web/20130328133527/http://pythonhosted.org/Markdown/extensions/footnotes.html).

```python
MARKDOWN_EXTENSIONS = ["footnotes"]
```


# Enable pretty permalinks
Simple set two options to true  to remove the trailing index.html from links to pages.

```python
PRETTY_URLS = True
STRIP_INDEXES = True
```


# Disable comments
Untill I've figured out what I want to use for comments on this site (I'm looking into using GitHub issues for this, If at all possible I don't want to use a 3rd party hosted solution) I want to disable them.

```python
COMMENT_SYSTEM = ""
```


# Disable some unnecessary parts from being created
There are several items included in Nikola for which I have no use, for example the archive pages and the galleries. Luckily Nikola uses a very flexible system of tasks that are run in a certain order to create all parts that make up the complete website. This tasks system uses [doit](http://pydoit.org) for the heavy lifting.

Run `nikola list` to get a list of all the different tasks for the current Nikola project. Almost all of the items I don't need are separate tasks which can easily be disabled by adding them to the DISABLED_PLUGINS tuple:

```python
DISABLED_PLUGINS = ["render_galleries", "render_archive"]
```

Note that it's also possible to disable plugins through the command line `nikola ignore render_archive`. The disadvantage of this is that this isn't stored in your `conf.py`. Furthermore I haven't been able to find a way to re-add an ignored plugin :D.


# Disable source links
Since the source of my site is already available on GitHub I don't want to copy them and link to the source files directly.

```python
HIDE_SOURCELINK = True
COPY_SOURCES = False
```


# Show only excerpt on home page
Excerpts are called teasers in Nikola. By default complete posts are shown on the home page. Setting `INDEX_TEASERS = True` changes this so only the contents of posts until the TEASER_END comment are shown. Simply add `<!-- TEASER_END -->` to your post where you want the excerpt to stop.


# Remove "Read more..." links
When enabling teasers a "Read more..." text is automagically added to the excerpt by Nikola. This is something I didn't want. To disabled it simply replace the `READ_MORE_LINK` variable with an empty string

```python
READ_MORE_LINK = ""
```


# Disable social buttons
By default some form of a social button widget is enabled. This actually isn't part of the templates but of the conf.py (which is bad design imho). Luckily it's easy to disable, just set SOCIAL_BUTTONS_CODE to an empty string

```python
SOCIAL_BUTTONS_CODE = ""
```
Note that this will still add a bullet to the sidebar list because there is no conditional to check for an empty SOCIAL_BUTTONS_CODE variable in the default template.


# Footnote styling
Unfortunately using the python markdown footnotes extension adds a `<hr>` element as the first element to the footnote's `<div>`. I wanted to get rid of this `<hr>` element, but there is no way to change it, so I used `str.replace` to fix this in the post template `post.tmpl`:

```
${post.text().replace('<div class="footnote">\n<hr>',
'<div class="footnote">')}
```

Note that I search for both the `div` and the `hr` to prevent this code from accidentally removing `<hr>` elements that are deliberately placed on the page.
