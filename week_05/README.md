* Interactive Music Programming

## Tone.js Interaction

So far all of the examples that i've shown have been scheduled ahead of time. But Tone's real strength is in scheduling things _just-in-time_. 

The basic idea is that you get a callback just before the exact time of the event. You can use that callback to choose the notes/sounds based on the current state of your application. Then use the time which was passed into the callback to schedule the event with precise timing.


### Callbacks

This is a big JS topic, that a lot of people are hazy on, but it's pretty simple. Your software doesn't run top to bottom for the most part. It jumps around using a bunch of references and variables. 

### Tone.Transport

[TimelinePosition Explained](https://github.com/Tonejs/Tone.js/wiki/TimelinePosition)

### Tone.Event

[Event Classes](https://github.com/Tonejs/Tone.js/wiki/Events)

### Tone.Loop

[A basic loop](http://codepen.io/yotam/pen/pyJrqO?editors=1011)

### Tone.Pattern

[Changing timbre with mouse movement](https://jsfiddle.net/yotammann/0btmhcna/)

## Fiddles

[Transport Time & Context Time](https://jsfiddle.net/38m78ncy/)
[Pattern](https://jsfiddle.net/nn8s6knd/)
[Looped Pattern](https://jsfiddle.net/s2xt9gtb/)
[Pattern](https://jsfiddle.net/pfcpff1v/1/)
[Lots of Effect](https://jsfiddle.net/rmfnjzhz/)
[Multiple Scheduling](https://jsfiddle.net/uadwLcbd/)
[Sequence](https://jsfiddle.net/qh2gwmfp/1/)

