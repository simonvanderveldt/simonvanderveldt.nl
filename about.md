---
layout: post
title: About me and this website
permalink: /about/
---

## About me
Hello, my name is Simon van der Veldt. I am a tinkerer, motorsports engineer and a minimalist who loves to create things. I don't mind if these things only exist of bits and bytes or if they are real world objects :)
I have a very broad range of things I'm interested in, from home automation to suspension design for motorsports to mobile web design and making coffee with a Moka Pot. Knowing all the ins and outs and staying on the bleeding edge of current developments on all of these fields is what I do in my spare time.

For my professional information have a look at my [résumé](/resume/).

## About this website
This website is made with the [Jekyll](http://jekyllrb.com/) static site generator. All content is written in [Markdown](http://daringfireball.net/projects/markdown/) and parsed using [kramdown](http://kramdown.gettalong.org/). Code highlighting is done using [CodeRay](http://coderay.rubychan.de/).

Since I'm using a couple of Jekyll plug-ins ([jekyll-plugins](https://github.com/recurser/jekyll-plugins) generate_categories.rb and [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)) I can't use GitHub Page's version of Jekyll because they have plugins disabled. So I generate the site locally and push it to GitHub as HTML to publish it.
If you want to see the inner workings of this site you can find the source on my GitHub.

My resume page is generated using a self-written Python script that extracts all data from my public [LinkedIn profile](http://www.linkedin.com/in/simonvanderveldt) using [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/). It then generates a new HTML page that gets integrated into my Jekyll site.
I will push the script to GitHub asap, but I first have to do some clean-up and add some documentation :)