---
layout: default
title : More Tone.js
---

## Sources

Sources are AudioNodes which produce sound.

These include:

* Oscillator \(sawtooth, square, pwm, pulse, sine, triangle, fm, am, fat\)
* Noise \(white, pink, brown\)
* [Player](https://jsfiddle.net/yotammann/nzz494yw/4/)
* UserMedia

## Effects

Parallel connections https://jsfiddle.net/yotammann/5wgyv3w1/3/

Series Connections https://jsfiddle.net/hroc1oo6/

Effects modify the incoming signal.

To add an effect to your audio signal, simply connect the effect in between your source and destination. Here is an example which routes a [Tone.Synth](https://tonejs.github.io/docs/#Synth) through a [Tone.Distortion](https://tonejs.github.io/docs/#Distortion).

```javascript
//create an effect and connect it to the master output
var dist = new Tone.Distortion().toDestination();
//create a synth and connect it to the effect
var synth = new Tone.Synth().connect(dist);
//and play a note to hear the distortion
synth.triggerAttackRelease("C4", "8n");
```

### dry/wet

All effects have a dry/wet control called `wet` which controls how much of the effected ("wet") signal is output compared to the uneffected ("dry") signal. The default value for the effects is 100% wet.

```javascript
// 50/50 mix
effect.wet.value = 0.5;
//fade to 100% wet over 3 seconds.
effect.wet.rampTo(1, 3);
```


## Connections

https://jsfiddle.net/yotammann/5wgyv3w1/4/

`connect` is how we move audio data from one node to the next. It's analogous to running a cable from the output of one node to the input of another. You will see the method used all over Tone.js and the Web Audio API, so it's important to know what it does and how to use it.

### Connections are directional

Signal flows from the output of the connect-er node to the input of the connect-ee. So if you had code that looks like this: `source.connect(sink)`. You can visualize this by drawing a line with an arrow from source to sink: `source->sink`.

### Connections are invisible

The connection is made in the underlying API and NOT "remembered" by Tone.js or the Web Audio API in any place. So you can't later query "is A connected to B?". If they are connected, there is no way to tell. It's up to your application to remember it.

## Signals

[Tone.Signal](https://tonejs.github.io/docs/#Signal) plays an important role in Tone.js by allowing audio-rate control over many attributes. It is similar, but more flexible than the Web Audio API's native [AudioParam](http://webaudio.github.io/web-audio-api/#the-audioparam-interface) and allows sample-accurate control synchronization of a node's attributes.

https://jsfiddle.net/yotammann/5wgyv3w1/8/

[Modulating Signal-Rate Delay Time](https://jsfiddle.net/awcob5q8/)

## Setting values

Unlike other attributes, to get or set the value of a Tone.Signal, you must access it through the `.value`.

For example, the frequency attribute of Tone.Oscillator is a Tone.Signal:

```javascript
oscillator.frequency.value; //returns the current frequency value
oscillator.frequency.value = 100; //sets the value immediately
```

`.value` has to be used because Tone.Signal is not merely a number, but an audio-rate signal meaning it outputs a value on every sample and is also capable of sample-accurate automations.

## Scheduling values

A very important feature of Tone.Signal is that it sample-accurate. Scheduled changes will occur precisely when they are supposed to.

Tone.Signal includes all of the same scheduling methods which the `AudioParam` does such as:

* `setValueAtTime` - to schedule a value change at a precise time.
* `linearRampToValueAtTime` - to ramp to a value starting from the previously scheduled value.
* `exponentialRampToValueAtTime` - same as the above, but with an exponential curve instead of a linear curve.
* `setTargetAtTime` - unlike the `RampValueAtTime` methods, in `setTargetAtTime`, the time attribute is when it should start ramping towards the value instead of arrive at the value. It takes a third parameter which is the time constant at which it will change.
* `setValueCurveAtTime` - sets an array of values which will be evenly invoked over the course of the duration.
* `cancelScheduledValues` - cancels all values after the specified time.

Additionally, Tone provides methods for ramping and scheduling values at the current time. These simplify the above methods by canceling all values after the current time and setting an automation point at the current value.

* `linearRampToValue` - set a value and a ramp time and the signal will begin linearly ramping towards that value.
* `exponentialRampToValue` - same as above but exponential ramp.
* `rampTo` - same interface as the above methods, but will automatically decide to use linear or exponential based on the units of the signal.

## Transport

Instead of scheduling events along the AudioContext time, the Transport allows you to schedule events along a seekable/restartable timeline.

This is done by scheduling a **callback** to be invoked right before the event is supposed to be scheduled and then using the time in that callback to schedule the event.

```javascript
var synth = new Tone.Synth().toDestination()
//schedule an event to happen 1 second after the transport is started
Tone.Transport.schedule(function(time){
	//use the time passed in to schedule the method
	synth.triggerAttackRelease("C4", "8n", time);
}, 1)

//start the transport to hear the event
Tone.Transport.start()
```

https://jsfiddle.net/yotammann/swwvywvg/5/

https://jsfiddle.net/yotammann/eprvL0nq/1/

https://jsfiddle.net/yotammann/o3d076mz/1/

## Loop

Loop is an abstraction on the schedule method which allows you to create looped segments.

```javascript
//create a loop which is invoked every second
var loop = new Tone.Loop(function(time){
	synth.triggerAttackRelease("C2", "8n", time)
}, 1)

//start the loop two seconds after the transport is started
loop.start(2)

//start the transport to invoke the loop
Tone.Transport.start()
```

## Sequence

https://jsfiddle.net/tseqv132/

https://jsfiddle.net/tseqv132/2/
