---
title : API Design
layout : default
---

The purpose of an API is so that humans (like yourself) can understand your software. Javascript has no built in features which enforce public/private. It is pretty much entirely up to you as the software writer to create and hold onto a strict use of convention for defining public/private methods and variables. 

The purpose of public/private variables and methods is not about security or trust (though it can be sometimes), it is about managing complexity. 

As soon as your software grows past a certain size, it becomes too hard to remember all the methods and attributes that you've written. You need to start grouping functionality into logical units. 

Abstraction is your friend. It will enable you to build more expressive software more easily explore and iterate on. 

Abstract functionality and then trust that they do what they say they do (until they don't). Build trust-worthy software and then trust your software. Jumping between layers of abstraction has a lot of mental overhead. 

### Goals

Good APIs reveal high-level, powerful functionality and hide implementation details. 

Give yourself an _expressive_ interface. A method like `setFunkiness(value)` is going to allow you to explore a lot of music without having to bother with how it's implemented. 

Make it consistent.

## OOP

Object Oriented Programming is a way of designing applications by breaking down the functional components into "objects" each with their own state and functionality. 

In Javascript there are a few ways of doing OOP

### Function Objects

By convention, if you're defining a class, use a capital letter and instances of that class will be lowercase or camelCase. 

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

### public

Public variables/methods are the ones that you want to expose to your software users (which is probably you most of the time). It's good to comment these with what type of values these accept. 

### private

Private variables are specific to the implementation and are not supposed to be accessed from outside of the class or feature. 

As a convention, I prefix all my private variables and methods with an underscore. 

```javascript
MyClass.prototype._privateMethod = function(){
	//do something internal	
};
```