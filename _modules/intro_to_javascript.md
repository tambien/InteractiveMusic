---
title : Intro to Javascript
layout: default
---

Javascript was created in 10 days in May 1995 by Brendan Eich while working at Netscape. It was named Javascript because Java was a very popular language at the time. 

### [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

Numbers in Javascript are 64-bit floating point. There are no integers. 

```
var numbo = 10000000000000000;
```

Advantages - no overflows or floating-point errors. high precision. 

Disadvantages - performance, memory. 



### [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Strings are defined inside of a single or double quote. (Pick one. Don't mix.)

```
var str = "hi i'm a string";
```

Basic operations are `+` for concatenation and `.length` to get the length of the string. 

Other useful operators are `trim`, `substr`, `charAt`, `split`, `match`, and many many more. 



### [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Arrays can be defined in a couple ways. 

```
var arr = new Array(100);
// or
var arrTwo = [];
```

Access arrays using []

```
var firstElement = arr[0];
```

Arrays have a lot of useful methods like `push`, `pop`, `shift`, `sort`, and many more. 

What would you hold in an array?


### Object Literals / Maps / Dictionaries

Defining an Object:

```
var objTwo = {};
```

Accessing data in the object

```
var data = obj.parameter;
var sameData = obj["parameter"];
```

Self referential object. 

```
var obj.obj = obj;
```

#### Pointers

Everyone is always talking about them. What are they?

```
var a = {
	"data" : "something"
};
var b = a;
b.data = "something else";
a.data; // "something else"
```

**What would you hold in a dictionary?**

### Functions

Can be defined in a few ways. 

```
var funky = function(parameter){
	//body
};
// or
function funkyToo(parameter){
	//body
}
```

And later invoked with `()`

```
funky("argument");
```

It can just be passed around like any other variable.

```
console.log(funky); 
// prints:
function(parameter){
	//body
};
```

Anonymous and immediately invoked functions

```
(function(){
	console.log("i was immediately invoked");
})();
//is subtly, but importantly different from
console.log("i was immediately invoked");
```

#### Scope

functions create scope. Scope allows an inside function to see all of it's parents, but not a parent scope to see anything about the children.

```
function scopes(){
	var you = "you";
	(function(){
		var me = "me";
		console.log("i can see " + you);
	})();
	console.log(you + "can't see " + me);
}
//this throws an error that 'me' is undefined.
```

## SERVERS

What do servers do?

* Client/Server communication
* AJAX
* Store things
* Synchronize multiple pages

#### Spinning up a simple file server

If you have python installed, in the terminal type: 

```
python -m SimpleHTTPServer
```

or if you have node.js and http-server installed: 

to install http-server: `npm install -g http-server`

```
http-server
```

Then you can visit the page through your local IP address: 

`http://localhost:8000/`

(Note that the port number of your server might be different than 8000)

`ctrl + c` to kill the server