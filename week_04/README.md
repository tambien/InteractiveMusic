* _Fundamentals of Music Composition_
	* Form
	* Phrase
	* Motif
	* Variation
* Object Oriented Javascript
	* function prototype objects
	* `new`
* Encapsulation
	* members
	* methods
	* `this`
* API Design
	* public/private
* In class exercise

## _Fundamentals Of Music Composition_

Written by Arnold Schoenberg in 1967. Outlines the process of composing in a systemic way from the smallest to the largest form. 

Schoenberg's approach, both in terms of harmony and development, was very influential in 20th-century music. Inventor of 12-tone technique, a means of order that would make his musical texture simpler and clearer.

(unless otherwise noted, all quotes in this section are from _Fundamentals of Music Composition_)

### Form

Take or apply as much of these definitions as you see fitting, but they can provide a useful lens through which to view organization and development of a piece of music. 

> ...form means that a piece is organized; i.e. that it consists of elements functioning like those of a living organism. 

...

> The chief requirement for the creation of a comprehensible form are logic and coherence. The presentation development and interconnection of ideas must be based on relationship. Ideas must be differentiated according to their importance and function. 

### Phrase

Phrase is the smallest structural unit. A musical molecule consisting of multiple musical events "possessing a certain completeness and well adapted to combination with other musical events". 

> The term phrase means, structurally, a unit approximating to what one could sing in a single breath. 

[Laurie Anderson](https://www.youtube.com/watch?v=QH2x5pARGdE)

### Motif

> ... the motif should produce unity, relationship, coherence, logic, comprehensibility and fluency. 

This is your main "point". Your idea that you want to explore. The thing you will permute, vary, dichotomize, compare, etc. 

### Variation

> The use of the motive requires variation... But changing every feature produces something foreign, incoherent, illogical.

What constitutes a motive? What is the role of repetition vs variation?

[Again, Beethoven's 5th](https://www.youtube.com/watch?v=rRgXUFnfKIY)

> The initial motif of the symphony has sometimes been credited with symbolic significance as a representation of Fate knocking at the door.

> [Wikipedia](https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven)#Fate_motif)

### Sentence

> A complete musical idea... These structures usually appear in Classical music as part of larger forms (e.g. as A in the ABA form). 

### Dominant form

> in many classical examples one finds a relationship between first and second phrase similar to that of _dux_ (tonic form) and _comes_ (dominant form) in the fugue. This kind of repetition, through its slightly contrasting formulation, provides variety in unity. 

[Purple Rain - Same melody over different chords](http://www.mojvideo.com/video-prince-purple-rain-1984-complete-video/192cc3f9a076974a3585)

#### Tonic / Dominant. Weak / Strong. Antecedent / Consequent. 

You'll hear these kinds of relationships everywhere. 

> Variety needs no justification. It is merit in itself. 

### Larger forms

> Smaller parts may be expanded by means of internal repetitions, sequences, extensions, liquidations, and broadening of connectives... Larger forms develop through the generating power of contrasts. There are innumerable kinds of contrast; the larger the piece the more types of contrast should be present to illuminate the main idea. 


## OOP

Object Oriented Programming is a way of designing applications by breaking down the functional components into "objects" each with their own state and functionality. 

In Javascript there are a few ways of doing OOP

### Function Objects

By convention, if you're defining a class, use a capitol letter and instances of that class will be lowercase or camelCase. 

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

## API Designs

The purpose of an API is so that humans (like yourself) can understand your software. Javascript has no built in features which enforce public/private. It is pretty much entirely up to you as the software writer to create and hold onto a strict use of convention for defining public/private methods and variables. 

The purpose of public/private variables and methods is not about security or trust (though it can be sometimes), it is about managing complexity. 

As soon as your software grows past a certain size, it becomes too hard to remember all the methods and attributes that you've written. You need to start grouping functionality into logical units. 

Abstraction is your friend. It will enable you to build more expressive software more easily explore and iterate on. 

Abstract functionality and then trust that they do what they say they do (until they don't). Build trust-worthy software and then trust your software. Jumping between layers of abstraction has a lot of mental overhead. 

### Goals

Good APIs reveal high-level, powerful functionality and hide implementation details. 

Give yourself an _expressive_ interface. A method like `setFunkiness(value)` is going to allow you to explore a lot of music without having to bother with how it's implemented. 

Make it consistent.

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

## In Class

In groups of 2, create a (non-functional) function object. Sketch out an interface for what kinds of methods you would want to have. Think about what sorts of private methods or attributes your class might need. 

You don't need to implement any of it, just the interface. 

## References

[Fundamentals of Music Composition](http://www.amazon.com/Fundamentals-Musical-Composition-Arnold-Schoenberg/dp/0571196586)