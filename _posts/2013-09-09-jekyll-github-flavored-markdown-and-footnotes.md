---
tags: webdevelopment
title: Jekyll, Github Flavored Markdown and footnotes
css: code.css
---

<div class="alert alert-info" role="alert">
	<strong>Update:</strong> As of Jekyll 2.0.0 it's possible to have our GitHub Pages cake and eat it :)
	<br>See this <a href="{% post_url 2015-04-13-github-pages-now-with-github-flavored-markdown-footnotes-and-syntax-highlighting %}">new post</a> for more details.
</div>
[Jekyll](http://jekyllrb.com/) uses [redcarpet](https://github.com/vmg/redcarpet) as it's default [Markdown](http://daringfireball.net/projects/markdown/) parser for newly generated sites as of version [v1.1.0](https://github.com/mojombo/jekyll/pull/1245). It does so by setting `markdown: redcarpet` in `_config.yml`.
Redcarpet is the markdown parser used by GitHub, but in it's default config it actually doesn't parse using the [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) (GFM) rules.


To change this add the following to Jekyll's _config.yml:

```yaml
redcarpet:
  extensions:
    - hard_wrap
    - no_intra_emphasis
    - autolink
    - strikethrough
    - fenced_code_blocks
```

This is also documented on the Jekyll documentation on GitHub about GitHub pages in the chapter [Mimicking Github Flavored Markdown](https://github.com/mojombo/jekyll/blob/8f932dbfa2709261af4999b4429f09bc5665b83e/docs/github-pages.md#mimicking-github-flavored-markdown). For reasons unknown to me this isn't available in the publicly available documentation on the Jekyll [website](http://jekyllrb.com/docs/github-pages/).

## Footnotes
Unfortunately only the current master branch of redcarpet [supports](https://github.com/vmg/redcarpet/pull/271) footnotes (and Jekyll doesn't even support [v3.0.0](https://github.com/mojombo/jekyll/pull/1299) at the moment) so with the default setup it isn't possible to add footnotes to posts.

Luckily there are other MarkDown parsers to choose from. A short comparison of them can be found on [bloerg.net](http://bloerg.net/2013/03/07/using-kramdown-instead-of-maruku.html).

Just like Matthias concluded in this comparison I came to the conclusion that at the moment [kramdown](http://kramdown.gettalong.org/) is the best option to use as my MarkDown parser. Unlike Matthias I feel no need to use Code Highlighting using [Pygments](http://pygments.org/) because [CodeRay](http://coderay.rubychan.de/) (don't mind the ugly site!) works perfectly fine for me, I don't have to modify Jekyll or Kramdown or have to use workarounds to make Jekyll parse the MarkDown files correctly and it just feel (c)leaner to me to stay with only Ruby dependencies.

## Using Kramdown inside Jekyll
Using Kramdown inside Jekyll is very easy, the only thing you have to do is set the `markdown` configuration option in your `_config.yml` to `kramdown` (and install the kramdown if it isn't installed already).

```yaml
markdown: kramdown
```

Since I still want to make use of GFM some additional settings from kramdown have to be set just like with redcarpet. Kramdown actually already support most of the parsing features needed for GFM, but uses tilde's for [fenced code blocks](http://kramdown.gettalong.org/syntax.html#fenced-code-blocks) and doesn't add hard line-breaks inside paragraphs. This is easily fixed though by setting the kramdown `input` configuration option to `GFM` in your `_config.yml`.

```yaml
markdown: kramdown

kramdown:
    input: GFM
```

That's it, now you can use GFM and footnotes[^1] in your Jekyll MarkDown posts!


[^1]: Example footnote.
