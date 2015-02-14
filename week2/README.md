# WEEK2

* Getting up and running in Javascript. 
* Developer Tools
	* debugger
* Basics of Web Audio API. 
* Intro to Tone.js
* Mouse and keyboard events

## ASSIGNMENT RECAP

How did the implementation change the mood/nature/affect/intention of the sound/music/gesture?

## JAVASCRIPT

### Numbers

Numbers in Javascript are 64-bit floating point. There are no integers. 

```
var numbo = 10000000000000000;
```

Advantages - no overflows or floating-point errors. high precision. 

Disadvantages - performance, memory. 

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Strings

Strings are defined inside of a single or double quote. (Pick one. Don't mix.)

```
var str = "hi i'm a string";
```

Basic operations are `+` for concatenation and `.length` to get the length of the string. 

Other useful operators are `trim`, `substr`, `charAt`, `split`, `match`, and many many more. 

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Arrays

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

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


### Object Literals / Maps / Dictionaries

Defining an Object:

```
var obj = new Object();
// or
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

What would you hold in a dictionary?

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

Client/Server communication

AJAX

Spinning up a simple file server

```
python -m SimpleHTTPServer
```

`ctrl + c` to kill the server

## CHROME TOOLS

type `option + command + i`. practice it. get used to it. use it often. 

### `console`

inspecting variables from the console. type in anything that's in the current scope and you can see / change it's value. 

### logging

watch out! this is where pointers can bite you. Objects are logged "live" in that they point to the original object, so if you didn't inspect the values further, you could be looking at the wrong data. 

### debugger

#### Breakpoints

step over, step in, step out. 

#### `debugger` keyword

put `debugger` anywhere in your script and when that line is executed and the console is open, 

## WEB AUDIO API

### A little history

First there were two specs. Web Audio API (pushed by Google) won out over Audio Data API (pushed by Mozilla) because it included natively built components instead of just signal processing in javascript (which at the time especially, JS was not fast enough). 

### AudioContext

The AudioContext controls the processing graph. All notes which need to be connected to each other need to be constructed from the same AudioContext. 

There is also an OfflineAudioContext.

### Components

#### Sources

Web Audio includes sources such as oscillators and buffer players. The oscillator has four basic types: sine, square, triangle, and sawtooth.

Buffer players can play any sound that you load can load from a URL. 

### AudioParams

AudioParams are like the knobs on an audio module or effect in that they let you adjust and control the parameters of the components. Unlike a knob, you can schedule it to ramp and change in precise ways. 

## Tone.js

You are all encouraged to use r4-dev. This is the version of Tone.js which i am currently developing. You would help me by catching potential bugs, etc. The problem is the documentation currently online is for Tone.js r3. If i don't make another release soon and generate new docs, i might just post r4-dev's docs online somewhere you can find them. 

### AudioContext

Tone.js generates an AudioContext for you. If you want to set your own so that you can work more easily with another library which also makes the AudioContext for you, use `Tone.setContext`

### Sources

Aside from the oscillator (Tone.Oscillator) and buffer player (Tone.Player) there is also a noise source, PWM oscillator, pulse oscillator and microphone input. 

### Instruments

These sources combine into a number of instruments each with their own character and presets. 

#### Tone.MonoSynth

is a single oscillator, run through an envelope filter, and then a filter with an additional envelope to control the cutoff frequency of the filter. 

### Signals

Signals are like AudioParams in that you can use them to change values like a knob. They also let you schedule automated events and smoothly ramp between values. 

A signal's value is set using signal.value and it can be automated by scheduling a value at a specific time: 

### [Tone.Time](https://github.com/TONEnoTONE/Tone.js/wiki/Time)

Time can be represented in a number of ways in Tone.js. 

### Transport

The transport synchronizes all of the events along a shared timeline called Tone.Transport. You can schedule events along the transport and it will 

#### setInterval

This function passes in the time that the event is supposed to occur right before it happens. Useful for scheduling repeated events. 

Why use these events instead of the browsers native timing?

Sample-accuracy. [A tale of two clocks](http://www.html5rocks.com/en/tutorials/audio/scheduling/)

## BROWSER INTERACTION

### [nexusUI](http://nexusosc.com/)

All canvas musical GUI elements.

#### `mouse`

Gives you absolute position of x and y between 0-1 as well as the delta of the movement. 

[inC](http://yotammann.info/ITP/inC/)

#### `typewriter`

gives you keydown/keyup events and the letter of the key. 

## REFERENCES

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) 
	* watch out because some of the things they reference are speculative or unimplemented. They usually put a little icon next to those things. 

[Tone.js r4-dev docs](http://yotammann.info/Tone.js/r4-dev/doc/index.html)

## ASSIGNMENT

Make something interactive in the browser that makes sound using only mouse and/or keyboard. Please add your link to the assignments page.
