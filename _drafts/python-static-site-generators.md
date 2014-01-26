<!--
.. link: 
.. description: 
.. tags: webdevelopment, python, draft
.. date: 2013-11-25 10:00:00
.. title: Static site generators in Python
.. slug: static-site-generators-in-python
-->

For the first iteration of my blog I used the most well known static site generator there is, [Jekyll](http://jekyllrb.com/). I chose it for the simple reasons that it seemed to be the most used static site generator and I could get 80% of my site running within a couple of hours tinkering. For me really putting a tool to use is the only way to determine if it works and if I can do verything I want with it.

Though Jekyll worked I still wanted to try something else. Not only for the sake of trying something else, but also because I preferred something in Python (which makes it a lot easier for me to contribute to it, I'm not part of the red camp (yat) ;)) and because there were some things that weren't really working the way I wanted. This post will cover several Python based static site generators that I took for a quick test drive.
<!-- TEASER_END -->

There is an insane amount of static site or static blog generators [available](http://staticsitegenerators.net). Limiting the selection to only the ones written in Python at the moment this post was written there were still 50 options left to choose from :o

A quick sort on the amount of GitHub stars while keeping an eye on the moment of the last commit to determine active projects and communities the top 10 becomes:
- Pelican
- Jinja2
- Cactus
- Hyde
- Letterpress
- Nikola
- Mynt
- Blogofile
- Acrylamid

That's actually 9 contenders ;) After Acrylamid there weren't that many interesting contenders that seemed to offer what I needed and managed to differentiate themselves enough from what was already on the list.

From this list Jinja2 can be dropped because it's simply not fit to be used standalone for static site generation.

What I want:
- Portability (Linux/Window)
- Easy way to add arbitrary commands/tools to the build chain
- (GitHub Flavored) Markdown
- Option for other markup formats (rst, etc)
- Slim or Jade templates
- Decent documentation (or at the very least wel documented code)
- Active and open community
- Freedom to do whatever I want (somehow I always want things that no one has thought of yet ;))
- Something that is as simple/lean as possible
- Auto rebuild

What would be nice:
- Incremental rebuilds

Based on the requirements we can scratch Letterpress (not cross platform because it uses the (very nice) inotify). This leaves us with the following contenders:
- Pelican
- Cactus
- Hyde
- Nikola
- Mynt
- Blogofile
- Acrylamid

(problems with categories and things I wanted to do with them, slim templates not working, difficult to use existing plugins/tools, most people started making Jekyll versions of things that already existed (example the great [jekyll-asset-pipeline](http://matthodan.com/2012/11/22/jekyll-asset-pipeline.html)))
One minor annoying thing in Jekyll is you have to write in every post which template to use.

# Pelican
Templating languages supported:
Valt af because you have to list pages in the config file :|

# Cactus
Django templates, so no (no slim option)

# Hyde
Djano templates, so no (no slim option)

#Nikola
Nice, jinja and mako template options included, person who started very interactive with community, many contributors! maybe *too* complex/*too many options*?
+No need to define template for each post (as in Jekyll :|)

# Mynt
Just 1 contributer

# Acrylamid
??



References:
- http://www.tummy.com/blogs/2013/02/09/a-quick-review-of-python-static-site-generators
- http://gistpages.com/2013/08/12/complete_list_of_static_site_generators_for_python
- http://staticsitegenerators.net