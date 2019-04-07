---
layout: post
title:  "Kicking the Tires"
date:   2019-03-29 10:32:00 -0400
categories: jekyll update
---
This is just a test of the blogging features of Jekyll.

{% include helpers/image.html name="Spark_logo256px.png" caption="This is the Spark Logo" %}

![Spark Logo](Spark_logo256px.png)

This is how to create a Button using *Spark*:

{% highlight javascript %}
    var buttonText = scene.create({ t: "textBox", parent: buttonObj, interactive: false, x: 0, y: 0,
                                    w: button_res.w, h: button_res.h,
                                 text: "Click Me", textColor: TEXT_COLOR,
                                 font: font_res, pixelSize: 24,
                      alignHorizontal: HC, alignVertical: VC  });
{% endhighlight %}


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
