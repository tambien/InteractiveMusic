* Audio Analysis
	* RMS
	* FFT
	* MFCC
	* Meyda
* Visuals Libraries
	* Three.js
	* Two.js
* Live Coding guest: Kyle Stetz

## Final Projects Checkin

Anything you guys need from me?

## Audio Analysis

Real-time audio analysis can be useful for coupling visuals to audio in interactive applications. There are a lot of libraries and acronyms when it comes to audio analysis, we'll run through some of the most common analysis techniques and what sort of data they provide. 

### RMS - Root Mean Square

RMS is statistical measure defined as the square root of the mean of the squares of a sample. It is often in audio because it easily approximates loudness. 

RMS gives you a single number which you can use to see about how loud the signal is. 

Tone.Meter is the only audio analysis tools in Tone.js. [Here's](./rms_analysis) a simple example getting the loudness of the microphone. 

### FFT - Fast Fourier Transform

The principle of Fourier Analysis is that all waves, no matter how complex can be decomposed into a collection of sine-tones at different frequencies and amplitudes. The "fast" part of FFT has to do with an efficient algorithm which makes it possible to do this type analysis in real time. 

[Mechanical Fourier Analysis](https://www.youtube.com/watch?v=6dW6VYXp9HM)

#### AnalyserNode

FFT is the same thing which is found in Web Audio's AnalyzerNode. 

[example](./fft_analysis)

#### Analysis/Resynthesis

So if you can decompose any sound into sine tones and amplitudes, then you should be able to recreate any sound from this analysis. That is the principle of Analysis/Resynthsis. 

Full-blown Analysis/Resynthsis is pretty complicated because it requires many many oscillators (it might be a little too much for the Web Audio API to handle at the moment), but there is commercial software which does this sort of thing. One common one is called [Spear](http://www.klingbeil.com/spear/)

[Analysis / Resynthesis Sculpture](https://www.youtube.com/watch?v=itAAezyj6wM)

### MFCC - Mel-frequency cepstrum

MFCC is a representation of the short-term power spectrum of a sound on a nonlinear mel scale of frequency.

The mel scale, named by Stevens, Volkmann, and Newman in 1937, is a perceptual scale of pitches judged by listeners to be equal in distance from one another. 

This means that the unlike the FFT, the Mel Scale is based on our perception of pitch which makes is why it's often used in speech recognition and timbre analysis.

[Meyda.js](http://hughrawlinson.github.io/meyda/)

### Measurement vs Perception

We are very good at hearing. We can perceive complex harmonic sounds as having a "pitch" and find the beat in a clip of noisy music. Machine's are not quite there. Remember there are big gaps between how the computer hears music and the way that we hear music. It cannot pick out instruments in a score and beat detection is difficult even with very complex algorithms.

#### Pitch vs Frequency

Pitch = perception
Frequency = absolute

Objects often vibrate in harmonic multiples of a fundamental. Us humans would probably perceive that as a single pitch (and most likely we would hear the fundamental frequency as that pitch) while an FFT or oscilloscope would recognize the frequencies and energies of all the components of that note. 

#### Beat Detection

Onset is another things which humans are good at which is much harder for a machine. It's easy to tap your foot to a song even when there is a lot of noise in the recording while a computer would have a hard time differentiating the beats from the rest of the noises. 

[Here's one way to do it](http://tech.beatport.com/2014/web-audio/beat-detection-using-web-audio/)

### Three.js

WebGL and 3d graphics can be a powerful accompaniment to Web Audio enabling you to make rich audio/visual experiences. Three.js has already taken foot in the realm of interactive music videos. Here's a few example: 

[Arcade Fire - Just A Reflector](http://www.justareflektor.com/)
[Lights - Ellie Goulding](http://lights.helloenjoy.com/)
[Three Dreams of Black - Danger Mouse & Daniele Luppi](http://www.ro.me/)

### [Two.js](https://jonobr1.github.io/two.js/#introduction)

Two.js' API is inspired by Three.js. It uses SVG instead of WebGL for rending. This makes it more widely supported than Three.js (though that's becoming less and less true). 

It excels at making blobs and smooth lines and is also easy to animate existing SVG graphics. 

Examples: 

[Tether by Plaid](http://tether.plaid.co.uk/)
[Patatap - Jono Brandel](http://www.patatap.com/)

## Special Guest: Kyle Stetz

[Lissajous](http://lissajousjs.com/)

## In Class Exercise

Get into small groups 2-4. Make music from scratch. In other words, starting from nothing, form a musical work in front of the class. 

## References

[MDN - AnalyzerNode](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)