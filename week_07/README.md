* Present Realizations
* JS Context
	* this
	* bind
	* apply
	* call
* Inheritence

## JS Context

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

### Inheritance

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

[Learning Advanced JavaScript - John Resig](http://ejohn.org/apps/learn/)
