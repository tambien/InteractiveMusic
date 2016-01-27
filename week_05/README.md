## TECHNIQUES



* Conceptual Clarity
* Coupling
	* Modules
	* Channels
	* Buses
* Scores
* Sampler
* WebSockets 

## Conceptual Clarity

Back in the day of notated music, scores were another way a composer had to elucidate the underlying concepts of his/her piece. Ideas that may or may not have been obvious by just listening to the music. 

![Pithoprakta](http://www.deconcrete.org/wp-content/uploads/2010/09/xenakis-pithoprakta-1955-56.jpg)

Looking at a [Twelve Tone Technique](http://en.wikipedia.org/wiki/Twelve-tone_technique) it's much easier to pick out the prime, retrograde, inversion, etc, than it is to hear those things in the music. [Schoenberg - Opus 23](https://www.youtube.com/watch?v=7A9HSlgDlQE)

The field of Musicology and Music Theory rely around this ability to identify, name, and reason about concepts and ideas that are preset in the score. 

But what about music which is composed/produced with a DAW or through software? How can we discover and reason about the composer's concept? Not having the ability to abstract musical concepts with something visual is like not having a word to describe an idea: we can circumlocute a concept, but we would get much further in our description and development of that idea if we had a word for it.

### Conceptual Clarity / Cohesion with Visual Music

How do sounds interact with visuals? How do you create cohesion between color/sound/form/movement/concept?

[Synchromy - Norm McLaren](https://www.youtube.com/watch?v=UmSzc8mBJCM)

[Dots - Norm McLaren](https://www.youtube.com/watch?v=E3-vsKwQ0Cg)

[Matrix III - John Whitney](https://www.youtube.com/watch?v=ZrKgyY5aDvA)

### Conceptual Clarity / Cohesion with Interactive Music

[BubbleHarp](http://www.snibbestudio.com/bubbleharp/)

[OscilloScoop - Scott Snibbe Studio](https://www.youtube.com/watch?v=ymW-_RENMKY)

[n - Drexler](http://www.wakeapp.com/n/en/)

[Thicket - Morgan Packard & Josh Ott](https://www.youtube.com/watch?v=4Xr9ELZSOnc)

## In Class Exercise

Groups of 3 or 4. Try to come up with a concept for a cohesive interaction/music/visual/text work where all facets of the piece work towards the same goal.

What does it sound like? What does it look like? What is the interaction?

## Coupling

Your Goals: 

* Get a lot out of a little
* Be able to re-use work
* Save time programming
* debug easily
* scale your projects bigger
* work in teams

Modularity and Loose-coupling will help you achieve all of those goals. 

### Modules

Modules are like what we have been working on so far. Functionality which is developed independently with a clearly defined interface for the rest of your application to use. They are a "unit" of code of project cleanly separated and organized.

[Addy Osmandi - Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

Modules should be as self contained as possible, preferably taking care of their own dependency loading (if you get into this take a look at [requirejs](http://requirejs.org/))

### Mediator

The mediator pattern is used all over JavaScript applications. The basic idea is that you indirectly communicate to other parts of your application by passing messages, and in other places of your application you listen for those messages. 

A really basic event emitter is [MicroEvent](./MicroEvent.js).

To use it, just instantiate an instance, and then you can begin passing messages and listening for callbacks. 

```javascript
var mediator = new MicroEvent();

//to listen for an event:
mediator.route("someEvent", function(args){
	console.log("i got an event", args);
});

//then to trigger that event in another part of your application:
mediator.send("someEvent", "just do it");
```

### Channels

The Modular approach to architecting a song in the browser is using "channels". A channel is any connected component which probably terminates in the Master output. For example, it might be helpful to think of your composition in terms of a few "instruments", so each instrument would live on it's own channel. 

Each of these channels could be in its own file and have it's own independent interactions and since the code does not rely on one another, they are entirely separate modules. 

```javascript
//drums channel
var drums = new Tone.Sampler({
	"kick" : "./path/to/kick.mp3",
	"snare" : "./path/to/kick.mp3"
}).chain(compressor, Tone.Master);

//synth channel
var synth = new Tone.MonoSynth().chain(panner, Tone.Master);

//bass channel
var bass = new Tone.MonoSynth().chain(lowpassFilter, Tone.Master);
```

### Buses

Sometimes it can be useful to keep the code very modularized and separated, but be able to pass around some of the audio within your application. Buses are very useful for this. 

To use a bus, just `send` the audio to a named bus, and later `receive` it where you want it to go. This is useful for letting everyone share the same effects like reverb without needing to instantiate multiple reverb effects and still maintaining highly modular code. 

```javascript
bass.send("reverb", -12);
synth.send("delay", -40);

//in another file
reverb.receive("reverb");
feedbackDelay.receive("delay");
```

### Scores

Scores also help maintain the modularity of your application. In the first Computer Music language, MUSIC, Max Matthews made a distinction between the sound generators and the sound organizers. These are often referred to as the "Orchestra" and the "Score". 

The "Orchestra" is the part of your code where you create all your instruments, effects, etc, and the "Score" is the part of your code where you sequence events or set values and dial in and control all the values in your Orchestra. 

This is a conceptual distinction, and Tone.js gives you the ability to sequence and set values anywhere you want, but this distinction can help keep loose-coupling and help you organize your musical ideas.

### Tone.Note.parseScore

For sequencing events, there is a JSON score format which lets you setup events along named channels. 

```javascript
var score = {
	"synth" : [["0:0:0", "C4"], ["0:2:0", "D4"], ["0:3:1", "B3"], ["1:0:0", "D#4"] , ... , ["4:0:3", "F6"]],
	"kick" : ["0 * 4n", "1 * 4n", "2 * 4n", "3 * 4n", "4 * 4n", "5 * 4n", ... , "20 * 4n"],
}
//then parse the score
Tone.Note.parseScore(score);
```

Then you can get the callback whenever there is an event using `route`

```javascript
Tone.Note.route("synth", function(time, note){
	synth.triggerAttackRelease(note, "4n", time);
});

Tone.Note.route("kick", function(time){
	kick.start(time);
});
```

## Tone.Sampler

The sampler is like Tone.Player with some added functionality. It can playback a file, but it also has a filter and amplitude envelope for additional sculpting of that sound. 

Unlike Tone.Player, Tone.Sampler can accept multiple mp3s in its constructor. 

```javascript
var sampler = new Tone.Sampler({
	"A1" : "./piano/A1.mp3",
	"B1" : "./piano/B1.mp3",
	"C2" : "./piano/C2.mp3",
	"D2" : "./piano/D2.mp3"
});
```

Then to play a specific sample, call that sample by its name in `triggerAttack`

```javascript
sampler.triggerAttack("A1");
```

## RESOURCES

[Learning Advanced JavaScript - John Resig](http://ejohn.org/apps/learn/)


[Recorder.js](https://github.com/mattdiamond/Recorderjs) - This is useful for recording the output of your audio nodes. It's pretty straightforward to use. If you want to record your master output, you could do something like this: 

```javascript
//make the recorder output
var rec = new Recorder(Tone.Master.output);
//then just record the output
rec.record();
//...later on
//when you're done recording, just stop the recording
rec.stop();
//there are a few ways to use or download the recorded file
//take a look at the Recorder.js github page for an example. 
```
