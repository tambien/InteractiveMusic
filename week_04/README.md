## Intuitive Music

> Play a sound
> Play it for so long
> until you feel
> that you should stop
> 
> Again play a sound
> Play it for so long
> until you feel
> that you should stop
> 
> And so on
> 
> Stop
> When you feel
> that you should stop
> 
> But whether you play or stop:
> Keep listeneing to the others
> 
> At best
> play when people are listening
> 
> Do not rehearse

- Stockhausen On Music. 

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
