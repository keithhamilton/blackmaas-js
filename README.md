blackmaas-js
============

So you like Black Metal as a Service, but don't want to have to programmatically make API calls to populate your website with placeholder content?  

Now you can load in content on the fly by adding markup to your DOM, and adding a few lines of javascript.  This javascript component just leverages the standard Blackmaas API, documentation for which can be found at [http://blackmaas.com/api](http://blackmaas.com/api).

##How to BlackMaas your site  
Download this repo, put the script into your scripts folder and add it to the head of your document:  

```<script src='[path-to-scripts]/blackmaas.min.js' type='text/javascript'></script>```  

In an inline script tag, or another code file:  

```
var blackmaas = new Blackmaas();
blackmaas.hailSatan();
```

Optionally, you can set a global color or image type:

```
var blackmaas = new Blackmaas();
blackmaas.setImage('skull').setColor('black').hailSatan();
```
The global color and image type will override any markup you add (see Image options below).

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
* data-image-type: **the image type ('pentagram', 'baphomet', 'skull', 'blackmaas')**  
* data-image-color: **the image color ('black','blood')**

##Example
See the example HTML file [here](https://github.com/keithhamilton/blackmaas-js/blob/master/example/index.html) to see this in action.


