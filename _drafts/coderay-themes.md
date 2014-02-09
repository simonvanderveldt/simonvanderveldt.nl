<!--
.. link: 
.. description: 
.. tags: webdevelopment, draft
.. date: 2013-12-09 10:00:00
.. title: CodeRay themes with Jekyll and kramdown
-->

kramdown [Fenced Code Blocks](http://kramdown.gettalong.org/syntax.html#fenced-code-blocks)


*Code highlighting without Pyglets, use kramdown with coderay.*
**Disable pygments (pygments: false)**
Option from kramdown/coderay http://kramdown.gettalong.org/options.html can all be set in _config.yml as show here http://jekyllrb.com/docs/configuration/

## CodeRay
http://blog.codebykat.com/2013/05/23/gorgeous-octopress-codeblocks-with-coderay/
http://blog.alestanis.com/2013/02/04/octopress-and-the-twilight-color-scheme/

Actually the coderay settings can be set both under `kramdown > coderay` and directly under `kramdown`.

### CodeRay theme's
Based on <http://alexpeattie.com/blog/better-syntax-highlighting-with-rouge/>

### Create default Coderay CSS
coderay stylesheet > coderay.css

### Other people's themes
https://github.com/danielpietzsch/CodeRay-GitHub-Theme
https://gist.github.com/andrewpthorp/5134070
https://github.com/tlvince/coderay-themes
https://gist.github.com/hendriono/5789642
http://blog.codebykat.com/2013/05/23/gorgeous-octopress-codeblocks-with-coderay/


If you want to use Pygments instead of coderay you can do so by enabling kramdown en pygments. If you're OK with the defaults then you're good to go with fenced code blocks. If you want anything else (no line numbers, line numbers in table, etc) there are no options for it in _config.yml so you'll need to do some hacking on [highlight.rb](https://github.com/mojombo/jekyll/blob/v1.3.0/lib/jekyll/tags/highlight.rb) or look at [Bloerg - Using Kramdown instead of Maruku](http://bloerg.net/2013/03/07/using-kramdown-instead-of-maruku.html) and Juan Antonio Navarro Perez's Kramdown + Pygments + Typogruby for Jekyll on [GitHub](https://github.com/navarroj/krampygs)