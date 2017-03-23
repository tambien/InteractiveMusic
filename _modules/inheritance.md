---
title : Inheritance in Javascript
layout: default
---

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


### Extending Classes

The way to do inheritance in javascript is through the prototype. The concept is to have the prototype of the child also refer to the parent (that you want to inherit from). When a method or attribute is not available in the child, it will look up the prototype chain to the parent. 

```javascript
Child.prototype = new Parent();.
//and remember to set the constructor back to the Child
Child.prototype.constructor = Child;
```

The problem is that the above example can have hidden side effects. What if the `Parent` constructor adds some elements to the DOM or console logs some things? Using this inheritance technique, those actions would happen prematurely, before you intend to actually construct the object. 

Here is an example of an extend method without side effects

```javascript
function extend(Child, Parent){
	function TempConstructor(){}
	TempConstructor.prototype = Parent.prototype;
	Child.prototype = new TempConstructor();
	Child.prototype.constructor = Child;
}
```

## RESOURCES

* [Learning Advanced JavaScript - John Resig](http://ejohn.org/apps/learn/)
* [Crockford - Prototypal Inheritance](http://javascript.crockford.com/prototypal.html)
* [Crockford - Classical Inheritance](http://javascript.crockford.com/inheritance.html)
* [Inheritance Patterns in JavaScript (Response to Crockford)](http://www.bolinfest.com/javascript/inheritance.php)