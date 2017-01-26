---
title: JSDocs
layout: default
---

[JSDocs](http://usejsdoc.org/) is a way of annotating the source code such that documentation can automatically be generated from it. There are systems which will do additional safety checks using JSDoc notation such as [Google's Closure Compiler](https://developers.google.com/closure/compiler/). 

Docs are always inside of comments which begin like this: `/**` and end with `*/`. 

If you use Sublime, I recommend installing [DocBlockr](https://github.com/spadgos/sublime-jsdocs) which helps with writing JSDoc style code. 

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
