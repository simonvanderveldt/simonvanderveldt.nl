---
title: GitHub Pages, now with GitHub Flavored Markdown, footnotes and syntax highlighting
tags: webdevelopment
css: code.css
excerpt_separator: <!--more-->
---

{: .alert .alert-info}
**Update:** As of the first of February 2016 GitHub Pages handles GFM, footnotes and syntax highlighting out of the box, no configuration required.
See this [new post]({% post_url 2016-06-01-github-pages-with-github-flavored-markdown-footnotes-and-syntax-highlighting-simplified %}) for more details.

In contrast to what I wrote [1,5 years ago]({% post_url 2013-09-09-jekyll-github-flavored-markdown-and-footnotes %}) it's now possible to use all of [GitHub Flavored Markdown's](https://help.github.com/articles/github-flavored-markdown/) features combined with footnotes and syntax highlighting on your Jekyll site whilst still having GitHub Pages build your site for you.
Building your site locally and then pushing the resulting HTML is a thing of the past! :)

<!--more-->

## Intro
As of Redcarpet version [3.1.0](https://github.com/vmg/redcarpet/blob/master/CHANGELOG.md#version-310) Markdown footnotes support was added. Since both [Jekyll 2.0.0](https://github.com/jekyll/jekyll/blob/master/History.markdown#200--2014-05-06) updated its Redcarpet dependency to this version and GitHub Pages's version of Jekyll has been [updated to version 2.2.0](https://github.com/blog/1867-github-pages-now-runs-jekyll-2-2-0) as of [30.06.2014](https://github.com/github/pages-gem/pull/75#event-147277642) as well this finally allows us to enable all GitHub Flavored Markdown features using Redcarpet's extension as well as having syntax highlighting when using GitHub Pages to build our website! :)

## Setup
The basic setup consist of the [Redcarpet](https://github.com/vmg/redcarpet) Markdown parser with several extensions enabled combined with [Pygments](http://pygments.org) for syntax highlighting.


### GitHub Flavored Markdown with Redcarpet
We start with the same settings as in the [old Redcarpet setup]({% post_url 2013-09-09-jekyll-github-flavored-markdown-and-footnotes %}) and simply add `footnotes` to the list of extensions we want to enable in `_config.yml`.

Also, `fenced_code_blocks` can be removed as this is already being set by [Jekyll](https://github.com/jekyll/jekyll/blob/master/lib/jekyll/converters/markdown/redcarpet_parser.rb#L95).

```yaml
redcarpet:
  extensions:
    - footnotes
    - hard_wrap
    - no_intra_emphasis
    - autolink
    - strikethrough
```
Et voilà, footnotes[^1]!

Note: If you want to enable some nice "smart" typographic punctuation enhancements you can add the `smart` extension, which enables [SmartyPants](http://daringfireball.net/projects/smartypants/).


### Syntax highlighting with Pygments
The [old Kramdown setup]({% post_url 2013-09-09-jekyll-github-flavored-markdown-and-footnotes %}) didn't support syntax highlighting on GitHub Pages because Kramdown doesn't support Pygments, the only syntax highlighter currently available on GitHub Pages. It only supports the [Coderay](http://kramdown.gettalong.org/syntax_highlighter/coderay.html) and [Rouge](http://kramdown.gettalong.org/syntax_highlighter/rouge.html) syntax highlighters and these are unavailable when building on [GitHub Pages](https://pages.github.com/versions/).

To use Pygments we only have to set the `highlighter` option in `_config.yml` to `pygments`:

```yaml
highlighter: pygments
```
Jekyll actually already defaults to Pygments at the moment of writing this post so doing this isn't really necessary :)

Combined with Redcarpet's fenced code blocks extension this gives us syntax highlighting that works for both the `highlight` liquid tag as well as within fenced code blocks.


[^1]: This is a footnote!
