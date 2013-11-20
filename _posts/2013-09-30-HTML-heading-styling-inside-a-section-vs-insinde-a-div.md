---
layout: post
title: HTML heading styling inside a section vs inside a div
categories: webdevelopment
tags: HTML
---

Just quick heads-up in case someone is wondering why his or hers `<h1>` isn't looking like they expect.
Modern browsers apply different styling for `<h1>` elements inside a `<div>` vs inside one of the [new semantic elements](http://caniuse.com/#feat=html5semantic) like `<article>`, `<aside>`, `<nav>` or `<section>`.
This is because these new semantic elements influence the [document outline](http://html5doctor.com/outlines/) and the modern browsers try to show that to you in a graphical way.


Both Chrome en Firefox use a so called User Agent Stylesheet to define the default styling of alle lements. This is basically just a .css file which defines the default browser styling of all elements.
See below for en extract from both Chrome and Firefox's with the regular `<h1>` tag and 1 inside an `<article>` or `<section>` and the regular `<h2>` for comparison. Both links point to the current/tip/trunk version of the User Agent Stylesheet.

Chrome's [html.css](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css#L155):

```css
h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67__qem;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}
 
:-webkit-any(article,aside,nav,section) h1 {
    font-size: 1.5em;
    -webkit-margin-before: 0.83__qem;
    -webkit-margin-after: 0.83em;
}

h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83__qem;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}
```
{: .coderay}

FireFox's [html.css](https://hg.mozilla.org/mozilla-central/file/a475f94bb1b1/layout/style/html.css#l164)

```css
 h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin: .67em 0;
  }
 
 h2,
 :-moz-any(article, aside, nav, section)
 h1 {
   display: block;
   font-size: 1.5em;
   font-weight: bold;
   margin: .83em 0;
 }
```
{: .coderay}

Both of them actually apply this behaviour for up to 5 levels deep nesting of `<article>`, `<aside>`, `<nav>` and `<section>` elements.
So if you have an `<h1>` inside a `<section>` which is inside an `<article>` it will actually show up the same as a regular `<h3>`.

Note that on these browsers this means that to get a regularly styled `<h1>` element it has to be outside any of the above mentioned elements or you'll have to define the styling yourself!

Also note that at the moment you [shouldn't rely](http://blog.paciellogroup.com/2013/10/html5-document-outline/) on `<section>` to style your headings because it isn't fully supported on all browsers.