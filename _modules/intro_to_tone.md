---
title : intro to Tone.js
layout: default
---

Tone.js is a framework for creating interactive music in the browser. It provides advanced scheduling capabilities, synths and effects, and intuitive musical abstractions built on top of the Web Audio API.

<script async src="//jsfiddle.net/yotammann/8ozo3v9e/4/embed/js,result/"></script>

`triggerAttackRelease` is a combination of two methods: `triggerAttack` when the amplitude is rising (for example from a 'key down' or 'note on' event), and `triggerRelease` is when the amplitude is going back to 0 ('key up' / 'note off').

<script async src="//jsfiddle.net/yotammann/jqnLgyja/23/embed/js,result/"></script>

### triggerAttackRelease

The first argument to `triggerAttackRelease` is the frequency which can either be a number (like `440`) or as "pitch-octave" notation (like `"D#2"`). 

The second argument is the duration that the note is held. This value can either be in seconds, or as a [tempo-relative value](https://github.com/Tonejs/Tone.js/wiki/Time).

The third (optional) argument is when the note should be scheduled to play. With no argument, the note plays immediately, but it can also be scheduled to play anytime in the future. 

# Time

Web Audio has advanced, sample accurate scheduling capabilities. The AudioContext time, which is the reference clock that Web Audio uses to schedule events, starts at 0 when the page (or iframe) loads and counts up in seconds. 

<script async src="//jsfiddle.net/yotammann/z9v63k5b/11/embed/js,result/"></script>

The third argument of `triggerAttackRelease` is _when_ along the AudioContext time the note should play. It can be used to schedule events in the future.

<script async src="//jsfiddle.net/yotammann/zxsthhmq/8/embed/js,result/"></script>

### Tempo-Relative

Tone.js abstracts away the AudioContext time. Instead of defining all values in seconds, any method which takes time as an argument can accept a number or a string. For example `"4n"` is a quarter-note, `"8t"` is an eighth-note triplet, and `"1m"` is one measure. These values can even be composed into expressions.

Read more about [Time encodings](https://github.com/Tonejs/Tone.js/wiki/Time).

<script async src="//jsfiddle.net/yotammann/meodck51/7/embed/js,result/"></script>

### Tone.Player

[Tone.Player](http://tonejs.github.io/docs/#Player) loads and schedules mp3, ogg or wav files. Unlike Tone.Synth which is ready as soon as the page loads, there is an additional step in using audio files, which is that you have to wait for them to load. 

<script async src="//jsfiddle.net/yotammann/hzc9yzbn/14/embed/js,result/"></script>

[Docs](https://tonejs.github.io/docs/)
