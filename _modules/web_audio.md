---
title : Web Audio API
layout: default
---

First there were two specs. Web Audio API (pushed by Google) won out over Audio Data API (originally pushed by Mozilla) because it included natively built components instead of just signal processing in javascript (which at the time especially, JS was not fast enough). 

The [Web Audio API](https://webaudio.github.io/web-audio-api/) is a specification, and, like other web specifications, has to be agreed upon by all participants. The process is open and managed by the W3C. 

These participants are a collection of browser makers, audio industry professionals and enthusiasts. If you have an issue or feature you'd like to see included in the specification, you can add a [github issue](https://github.com/WebAudio/web-audio-api).

### AudioContext

The AudioContext is the parent entity of all the rest of the features of the Web Audio API. To make any node, first you have to make the AudioContext. 

Since this is such a fundamental thing, in Tone.js the AudioContext is created for you when Tone.js is loaded. 

All nodes are created from the AudioContext using methods like `audioContext.createOscillator()`. Tone.js abstracts away these calls to the underlying AudioContext. 

All nodes created and scheduled on the AudioContext comprise the "processing graph". The processing graph is basically all of the scheduling, routing, and math logic from audio sources to the final output (your speakers). 

The processing is done in chunks of 128 samples according to the specification. 

## Components

There are two basic types in the Web Audio API, AudioNodes and AudioParams. 

### AudioNode

The audio nodes are the sources or effects which will often accept an incoming connection from an audio node and produce an output connection to another audio node. 

AudioNodes includes things like oscillators, buffer player, filter, delay, compressor. 

They have a `connect` method which will route the processed audio from one node to another. If they are not a source node (like an oscillator), they will also receive connections from other nodes. 

### AudioParam

AudioNodes will usually have one or more AudioParams. 

AudioParams are like the knobs on an audio module or effect in that they let you adjust and control the parameters of the components. Unlike a knob, you can schedule it to ramp and change in precise ways. 

An example of an AudioParam is the frequency attribute of an OscillatorNode. `frequency` is not a number, but an AudioParam which means that it can be precisely scheduled. 

```javascript
//change the frequency value to 220 at a precise moment
oscillator.frequency.setValueAtTime(220, 0.3)
//then ramp the value up to 440 over 1 second
oscillator.frequency.linearRampToValue(440, 1.3)
```

### Scheduling

Nearly everything in the Web Audio API can be precisely (sample-accurately) scheduled according to the AudioContext time. This is vital for creating sound and music. 