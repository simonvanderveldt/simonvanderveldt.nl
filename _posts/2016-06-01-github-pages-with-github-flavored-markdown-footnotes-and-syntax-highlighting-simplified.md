---
title: GitHub Pages with GitHub Flavored Markdown, footnotes and syntax highlighting simplified
tags: webdevelopment
css: code.css
---

Another update regarding the use of GitHub Flavored Markdown on GitHub Pages. GitHub Pages has [updated it's Jekyll version to 3.0](https://github.blog/2016-02-01-github-pages-now-faster-and-simpler-with-jekyll-3-0/) on the first of February 2016.
This update includes a switch to [kramdown](https://kramdown.gettalong.org) as its Markdown parser as well as only supporting [Rouge](http://kramdown.gettalong.org/syntax_highlighter/rouge.html) as syntax highlighter. This means we're effectively back to the [original setup from 2013]({% post_url 2013-09-09-jekyll-github-flavored-markdown-and-footnotes %}) but because all of these components have received some updates in the meantime everything is now supported out of the box.

Support for other Markdown engines like [Redcarpet](https://github.com/vmg/redcarpet) and [RDiscount](https://github.com/davidfstr/rdiscount) was consecutively [dropped from GitHub Pages](https://github.blog/2016-05-02-github-pages-drops-support-for-rdiscount-redcarpet-and-redcloth-textile-markup-engines/) on the second of May 2016.
Some more information on this decision can be found in [this blogpost](https://github.blog/2016-04-01-a-look-behind-our-decision-to-standardize-on-a-single-markdown-engine-for-github-pages/).

## Configuration
For basic functionality, including parsing of GitHub Flavored Markdown and support for footnotes and syntax highlighting using fenced code blocks no configuration is necessary.
GitHub already takes care of all of this with its [default configuration](https://help.github.com/en/articles/configuring-jekyll).

## Customization
Any of the configuration options in the [defaults you can change section](https://help.github.com/en/articles/configuring-jekyll#defaults-you-can-change) can be configured to your liking.
Personally I prefer GitHub Flavored Markdown's way of handling line breaks so I added the following to my configuration:
```yaml
kramdown:
  hard_wrap: true
```
