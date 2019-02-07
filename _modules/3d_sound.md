---
layout: default
title: 3D Sound
---

## Spatial Perception of Sound

Before we talk about how to spatialize sound in software, let's start with how we perceive sound in space.

The way we perceive the position of sound in space is mostly related to our physiology: your pinna, the size of your head, the density of your body, your height, etc. You have learned over your lifetime exactly how sound passes through you and now you can accurately understand sound in space. 

## Encoding/Decoding

The basics of spatialized sound representation comes down to an encoding/decoding problem. If you wanted to record and then recreate two sound sources left and right, then i could record two channels and then when i reproduce the sound, just place two speakers at the same place that i recorded them. I could do this for as many sources and speakers as i wanted. 

[40 part motet](https://www.youtube.com/watch?v=ncWFLzVrwU4)

But as some point this becomes impractical, so we need another representation. 

### Object-based

Object-based representation is a when you a sound source combined with it's position/rotation data. This is how game engines represent audio sources. Other attributes include cone size, rolloff factor etc. All of these are tweakable in game engines and not in any other recording method. 

### Ambisonics

Ambisonics is the ability to capture a recording including all of the space. This is an encoding. 

#### Recording Ambisonic Audio

Ambisonic recording can be done with an b-format microphone which is composed of 3 or more capsules in an XYZ arrangement. 

#### Binaural recording

Binaural recording captures the sound _as it was heard through ears_. It does not allow you to move through the space or rotate your head, because the entire spatiality is baked into the recording. 

## 3D Sound in Tone.js

### [Tone.Panner3D](http://tonejs.github.io/docs/#Panner3D)

All audio you pass through this node will be spatialized. Does not necessarily need to be connected directly to the master output, but can be run through additional effects. 

### [Tone.Listener](http://tonejs.github.io/docs/#Listener)

There is only one listener. It models the listeners head and allows you to interact with the positioned audio. 

https://jsfiddle.net/yotammann/bkgsjyau/2/

### [Tone.Convolver](http://tonejs.github.io/docs/#Convolver)

Convolution is a powerful tool for mimicking realistic spaces. Reverb plays a large role in how we perceive a space. 

[Impulse Responses](https://github.com/GoogleChrome/web-audio-samples/tree/gh-pages/samples/audio/impulse-responses)

https://jsfiddle.net/yotammann/b0eg1ooz/2/

## Ambisonic Audio in Reaper

For generating and mixing ambisonic audio, I would recommend [Reaper](http://www.reaper.fm/) and the [Facebook Spatial Workstation](https://facebook360.fb.com/spatial-workstation/).

This will allow you to mix and master in Reaper and export to a variety of formats including facebook and youtube. The Facebook Spatial Workstation also has boilerplate for Protools and Nuendo. 

### Tracks

Each of the audio sources has an FB360 FX plugin on it. That plugin will let you adjust the position, elevation, spread and attenuation of your source. 

### Export

To export the audio from Reaper or another DAW, carefully follow the instructions in the PDF provided with Facebook Spatial Workstation. You can then combine the audio and video file in Facebook's Video Encoder. 

### View Video

FB360 also provides a flexible video player which will synchronize to your DAW and allow you to navigate in 360 and hear the binaural decoding.

## Resources

* [Authoring Spatial Media for Web](https://github.com/jts3k/Authoring-Spatial-Media-for-Web)
* [Reaper](http://www.reaper.fm/)
* [ATK Ambisonics Toolkit for Reaper](http://www.ambisonictoolkit.net/)
* [Superpowered Audio for VR](http://superpowered.com/3d-spatialized-audio-virtual-reality)
