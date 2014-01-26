<!-- 
.. link: 
.. description: 
.. tags: webdevelopment, python, nikola, draft
.. date: 2014-01-25 10:00:00
.. title: Nikola basic configuration - part 2
.. slug: nikola-basic-configuration-part2
-->

This post will cover the changes I made using Nikola's templates.
<!-- TEASER_END -->

Templates are in themes/themename/templates/*.tmpl.

# Footnotes
Unfortunately using the python markdown footnotes extension adds a `<hr>` element as the first element to the footnote's `<div>`. There is no way to change this so I simply used str.replace to fix this in 'post.tmpl':
```
${post.text().replace('<div class="footnote">\n<hr>', '<div class="footnote">')}
```
Note that I search for the div + hr to prevent this code from accidentally removing `<hr>` elements that are deliberately placed on the page.
