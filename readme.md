## Bytepath - A VueJS Based Vector Graphics & Animation Framework

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


#### *Bytepath consists of two main modules*
## ***Keyframer*** ##
- **A framework for building keyframed animations in your Javascript Apps**
	- **Simple to write** Animations are represented using simple Javascript functions that you already know how to write. Anything you can do in javascript, you can do here. 
	
	- **No thinking required** Bytepath provides a handy tween object that will handle the hard part of transitioning from one frame to the next.  All you need to know is where you want your animation to start, and where you want it to end up. Bytepath handles the hard work for you so you can focus on the creative process
	
	- **Reusable** Animations are self contained Javascript objects that can be tested in isolation or shared with the world
	
	- **Reactive** Animation playback is as simple as providing a frame number to the :keyframe prop of your animation components. Whatever frame is provided is what will be rendered on the screen. Create interactive animations by connecting the :keyframe prop to one of bytepaths provided Playback Timer classes. 
	
	- **Simple Playback** Animations are played using Bytepath playback timers. Playback timers handle the playback speed and FPS of your animations and thanks to the reactivity provided by vue, can be connected to anything in your application that can output a number. 
		Out of the box, bytepath provides adapters for 
		- Clock: A Stopwatch that pings at a set interval. Think setTimeout() but for animation
		- Scroll:  Ties playback to page scroll making your animations play at the speed that the user scrolls with their finger or mousewheel. 
		- Responsive Scroll: Similar to 'Scroll' but the output frame takes into account the size of your screen ensuring animations play back as expected on all devices
			
	- **Custom Playback Timers** If the provided playback timer components aren't what you are looking for, Bytepath makes it dead simple to create a custom adapter to fit your use case. 			

	- **Component based** Animations can be part of your art assets or consumed as renderless components (or both!).  Whatever works better for your particular use case 

## ***Transformer*** ##
- **A framework for building component based vector graphics**
	- **Use tools that artists already know how to use -** Art assets are built using tools artists are already familiar with such as Adobe Illustrator, Inkscape, and Affinity Designer.

	- **Reactive**: Instantly Scale, Rotate, Translate, and Skew on screen graphics by modifying prop values. Art assets will automatically redraw after any change of position

	- **Reusable -** Art assets are single file VueJS components allowing you to easily re-use assets in future projects or package them up and share them with the world 

	- **Modular -** Assets are normal Vue components meaning you can swap in and out various sub sections using slots. Mix and match various assets to create an unlimited number of potential assets from the art you aleady have
		- A "Person" asset could be built using a component containing slots for arms, legs, head and body allowing you to create an unlimited number of characters without having to re-write any code. 
		- A "Vehicle" asset could be built using a component containing slots for wheels, and body allowing you to create an unlimited number of trucks, cars, motorcycles, etc that all share the same basic properties of a vehicle. 
	- **Experimental DOM Support** Transformer can be used on normal DOM Elements by passing its render output to the CSS "transform" property for that element.
	- **VueJS For Graphics** The same skills you've perfected to make awesome websites can now be used to make cutting edge vector graphics. Anything you can do in vue, you can do here (slots, $emit, Mouse/Keyboard Events, props, mixins, etc)


# Installation
 Install Bytepath using NPM

	npm install bytepath        


# Quick Start
Bytepath works by combining the VueJS with the powerful, but complicated, SVG Vector Graphics Standard. 
SVG Images are represented with XML-like tags just like the HTML spec meaning we can modularize our SVG art assets into modular single file art assets (refered to as animation entities from here on out) just like we would do for web components.

###Using the premade entity component
Bytepath provides you with a pre built animation entity you can use to get started with your projects. In a new Vue component, import bytepath then add the entity component to its list of external components. 

```html
<template>
    <entity>HELLO WORLD</entity>
</template>

<script>
    import bytepath from "bytepath";

    export default {
        components:{
            entity: bytepath.components.entity
        }
    }
</script>
```
- Pass props to any Bytepath entity to immediately transform it's graphical representation



| Prop | Description                    | Example |
| ------------- | ------------------------------ | |
| `:x`      | X position       | `<entity :x="100" />` |
| `:y`   | Y Position     | `<entity :y="25" />` |
| `:a`   | Rotation angle (degrees)     | `<entity :a="100" />` |
| `:sx`   | Scale horizontally     | `<entity :sx="2" />` |
| `:sy`   | Scale vertically      | `<entity :sy="0,5" />` |
| `:cx`   | Center X Position     | `<entity :cx="50" />` |
| `:cy`   | Center Y Position     | `<entity :cy="50" />` |
| `:matrix`   | The projection matrix for this element. Used to pass animations from renderless components    | `<entity :matrix="new DOMMatrix()" />` |

### Display a 
**Table of Contents**

[TOCM]

[TOC]

#H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
#Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
##Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
####Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
#####Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
######Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

##Headers (Underline)

H1 Header (Underline)
=============

H2 Header (Underline)
-------------

###Characters
                
----

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
*Italic*      _Italic_
**Emphasis**  __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

###Blockquotes

> Blockquotes

Paragraphs and Line Breaks
                    
> "Blockquotes Blockquotes", [Link](http://localhost/)。

###Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name] 

[id/name]: http://link-url/

GFM a-tail link @pandao

###Code Blocks (multi-language) & highlighting

####Inline code

`$ npm install marked`

####Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

####Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

####HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

###Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

###Lists

####Unordered list (-)

- Item A
- Item B
- Item C
     
####Unordered list (*)

* Item A
* Item B
* Item C

####Unordered list (plus sign and nested)
                
+ Item A
+ Item B
    + Item B 1
    + Item B 2
    + Item B 3
+ Item C
    * Item C 1
    * Item C 2
    * Item C 3

####Ordered list
                
1. Item A
2. Item B
3. Item C
                
----
                    
###Tables
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
                
----

####HTML entities

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

##Escaping for Special Characters

\*literal asterisks\*

##Markdown extras

###GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

###Emoji mixed :smiley:

> Blockquotes :star:

####GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);
            
###TeX(LaTeX)
   
$$E=mc^2$$

Inline $$E=mc^2$$ Inline，Inline $$E=mc^2$$ Inline。

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$
                
###FlowChart

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

###Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

###End
