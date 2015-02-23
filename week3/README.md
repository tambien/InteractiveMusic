# WEEK 3

* Object Oriented Javascript
	* function prototype objects
	* `new`
* Encapsulation
	* attributes
	* methods
	* `this`
* Interfaces
	* private/public
* Dependencies
* JSDocs
* Tone.js
	* MonoSynth
	* PolySynth
	* Sequencing
	* Scores


## ASSIGNMENT RECAP

## SUBLIME PLUGINS

Here are some useful sublime plugins for Javascript development: 

* [Package Control](https://packagecontrol.io/installation) - it makes intalling packages and plugins very simple. 
* [JSHint + Sublime Linter](https://github.com/SublimeLinter/SublimeLinter-jshint)
* [DocBlockr](https://github.com/spadgos/sublime-jsdocs) - The easiest way to install it is using the package installer and searching "DockBlockr". 

## SERVING JAVASCRIPT WEBSITES

There are numerous ways to setup a simple server to serve Javascript applications over the web. 


### S3

If you already have an amazon account. it's easy to setup a static web server from your by just selecting the properties on the bucket and choosing "static website hosting"

[Here's some documentation](http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html)

### GH-PAGES

If you have a repository for this class, creating and committing to a branch called `gh-pages` will automatically create a website for you in the format of `http://[yourusername].github.io/[yourreponame]/`

From there it's just a matter of making a basic website and committing it to github. 

[Here's a simple tutorial](http://24ways.org/2013/get-started-with-github-pages/). Follow everything but the Jekyll part. You want it to host your html and javascript files, not generate ones for you. 

I highly recommend the github app for easily managing repositories, commits and merging branches. [mac](mac.github.com)|[window](windows.github.com)

### Dreamhost

Lauren McCarthy recommended dreamhost for it's ease of getting up and running. I think many of you may have already gone through the steps to set this up. 

[Dreamhost FTP setup](http://wiki.dreamhost.com/FTP)

## OOP

Object Oriented Programming is a way of designing applications by breaking down the functional components into "objects" each with their own state and functionality. 

In Javascript there are a few ways of doing OOP

### Function Objects

[Function objects](./0_functionObjects/)

By convention, if you're defining a class, use a capitol letter and instances of that class will be lowercase or camelcase. 

```javascript
var MyClass = function(){
	//this is where the constructor stuff of your class happens	
};
```

#### Methods

Method's are defined on the function's prototype: 

```javascript
MyClass.prototype.method = function(parameter){
	//do something with the parameters
};
```

#### Attributes

Attributes are defined in the constructor and attached to `this`.

```javascript
/** @constructor */
var MyClass = function(){
	this.myAttribute = "something Here";
};
```

#### `this`

As we talked about last week, functions create scope. `this` always refers to the current scope.

In the console scope, if you type `this`, it will return the current scope which in the browser is the `window`. 

Inside of a function or function object, `this` will refer to that object. If you attach attributes to `this`, those will be accessible from within the object using `this.attribute` or from outside the object using `yourObject.attribute`.

#### `new`

The `new` operator causes the function to be called with `this` bound to a newly created Object, and whose `prototype` is bound to the function's `prototype`. 

### Prototypes

There are not very many popular prototype-based languages. Most languages are class-based. 

Prototype's are attributes and methods which are shared to all objects which point to that prototype. The prototype is an object. 

Efficient : everyone shares the same reference to the object's prototype. Good for runtime languages. 

#### Prototype lookup

If you request an attribute/method with the dot operator (`myObject.method`), or brackets (`myObject["methodName"]`), the first place the runtime will look for that attribute is on the object's `this`. 

So if you're object looks like this:

```javascript
var FunkyObj = function(){
	this.attr = "something"
};

FunkyObj.prototype.funkyMethod = function(){
	return this.attr;
}

var funk = new FunkyObj();
```

Then accessing `funk.attr` will find that attribute on funk's `this` object. 

If it does not find the attribute, it will start crawling up the prototype chain. First to the FunkyObj's prototype, and then to the prototype of whatever class FunkyObj extends, until it finds something, or returns `undefined`. 

## INTERFACES

Consistency, Understandability, Expressiveness.

### Public Methods

Public methods are any methods which you intend for other parts of your application to use. Give as little access as possible. This will make everyone's life easier even if you're the only programmer working on a project. Clear and limited interfaces help in loose coupling

#### Loose Coupling

In order to create understandable and large applications, you need to be able to develop classes and modules separate from each other. One day, you'll work on the keyboard input part, and another day you'll work on the sound making part. If the two components are tightly coupled, you're going to have to constantly be working on BOTH. this is a lot harder! If they are loosely coupled and you trust that your functionality and interface have not changed between yesterday and today, you don't need to worry!

### Private Methods

Private methods are any method which you don't intend any other part of your application should use. Try to make as many of these as possible. As a convention, use an underscore before any private method. This makes it clear to you and everyone else that this method/attribute should not be relied upon and can change at any moment. 

## JSDOCS

JSDocs is a way of annotating the source code such that documentation can automatically be generated from it. There are systems which will do additional safety checks using JSDoc notation such as Google's Closure Compiler. 

Docs are always inside of comments which begin like this: `/**` and end with `*/`. 

If you use Sublime, I recommend installing DocBlockr which helps with writing JSDoc style code. 

```
/**
 * Here is a JSDoc comment block
 */
```

### @type

To describe the type of an attribute, use the @type tag. The type can be any of the primitives such as `string`, `number`, `boolean`, etc, or the name of a class

```
/**
 * @type {string} this is a description of this string
 */
var thisString = "thisstring";
```

### @class

The class tag should go above your function class definitions. 

```
/**
 * @class here you can give a short overview about your class
 * 		  and then describe your constructor
 */
```

### @param

The @param tag is for describing the arguments to a function or method. 

```
/**
 * @param {type} parameterName a short description of the parameter
 */
```

Some additional syntax is that you can use an equal sign after the type to signify that the parameter is optional. 

```
/**
 * @param {type=} optionalParam this parameter is not necessary
 */
```

### @returns

Describe the return type of a function using @returns

### @private

@private notifies the reader that this variable is for internal use only. 

## IN CLASS WORK

Pair up. Imagine a piece of interactive music with a partner. Something simple. Create an interface for it and outline the class(es) and interfaces you would need to realize your piece of music in software. 

## TONE.JS

I'll be releasing the latest version of Tone.js r4 sometime this week. I will post all of the docs and examples in a place where you can use it ahead of posting it on the github page. 

### MonoSynth

MonoSynth is an oscillator->amplitudeEnvelope->filter and that filter has an envelope as well. 

[MonoSynth Playground](./1_monoSynth/)

### PolySynth

Any synthesizer can be turned polyphonic by passing it's constructor into PolySynth. 

[MonoSynth Playground](./1_monoSynth/polySynth.html)

### Timeline

The Transport has a `setTimeline` method which allows you to schedule an event along a timeline which can be played,stopped and looped. Take a look at the [sequencing example](./1_monoSynth/sequencing.html) to get a sense of what the score format is. 
