blackmaas-js
============

So you like Black Metal as a Service, but don't want to have to programmatically make API calls to populate your website with placeholder content?  

Now you can load in content on the fly by adding markup to your DOM, and adding a few lines of javascript.  This javascript component just levrages the standard Blackmaas API, documentation for which can be found [here](http://blackmaas.com/api)

##How to BlackMaas your site  
1.Add this to the head of your document:  

```<script src='https://raw.githubusercontent.com/keithhamilton/blackmaas-js/master/src/blackmaas.js' type='text/javascript'></script>```  

2.In an inline script tag, or another code file:  

```
var replace_ipsum=true;
var replace_images=true;
var blackmaas = new Blackmaas(replace_ipsum,replace_images);
blackmaas.hailSatan();
```

Now, all you need is some additional markup. Here's how you convert an element into a Satan Ipsum block:

###Ipsum
This: ```<p></p>``` becomes ```<p class='satan-ipsum'></p>```
#####Options
The satan-ipsum tag has four available markup options:  
* data-paragraph-count: **defaults to 4**  
* data-sentence-variance: **defaults to 0 -- this controls the variance in sentence length**  
* data-include-enochian: **defaults to false -- this controls whether to include enochian words in the ipsum**  
* data-enochian-weight: **defaults to 1 -- if including enochian, this will increase its weight. Acceptable values are 1-3**

###Images
This: ```<img/>``` becomes ```<img class='satan-image/>```  

#####Options
The satan-image tag has two available markup options:  
* data-image-width: **the image width**  
* data-image-height: **the image height**

##Example
See the example HTML file in the example folder to see this in action.


