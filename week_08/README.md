
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


## Inheritance

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

### `bind`, `call`, `apply`

`bind`, `call`, and `apply` all fall under the category of context (s)witchery. These are used in situations where you want apply a different context. 

#### `bind`

`bind` comes up the most often. The problem that `bind` solves is that you want to create a callback (say using jquery on a mouse event). The callback, by its very nature, is going to be invoked in a different context than you made it in, so how do you make sure the value of `this` is the one you want it to be? `bind`. 

`bind` takes a function and returns that function with the context bound to the function. 

```javascript
var MyClass = function(){
	//listen for mouse events using jquery
	$("#element").on("mousedown", this.onmousedown.bind(this));
}

MyClass.prototype.onmousedown = function(event){
	console.log("i was invoked with the correct context");
}
```

bind is not just about setting the context, you can also preset the arguments which will be invoked with the function. 

```javascript
function printToTheConsole(stuff){
	console.log(stuff);
}

var alwaysPrintHi = printToTheConsole.bind(window, "HELLO!");

alwaysPrintHi(); //prints "HELLO!"

```

#### `call`

`call` is like bind in that it applies a context to a function, but `call` invokes that function right away instead of returning a function like `bind` does. 

`call` is useful for "stealing" methods from other classes. 

```javascript
//here is a basic class
var AClass = function(){
	this.name = "Henry";
}

AClass.prototype.greeting = function(){
	console.log("hi my name is "+this.name);
};

//here is another class
var AnotherClass = function(){
	this.name = "Harriet";	
}

var anInstance = new AClass();
var anotherInstance = new AnotherClass();

//say the greeting
anInstance.greeting(); //prints "hi my name is Henry"
//use anInstance's greeting method with anotherInstances's data
anInstance.greeting.call(anotherInstance); //prints "hi my name is Harriet"
```