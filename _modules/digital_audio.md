---
title : Digital Audio
layout : default
---

### Mixers (+)

When two signals meet at a junction, the resulting signal is the sum of the inputs. 

### Gain (*)

Gain is the ratio between the input and the output signal. 

### Sampling

Continuous, analog values are converted to discrete digital events through sampling. The Nyquist Theorem states that the sampling rate needs to be at least twice the highest frequency to be reproduced. 

Nyquist worked at Bell Labs and so did Max Matthews. 

### ALIASING

Aliasing is an effect that causes different signals to become indistinguishable when sampled. When taking a video of a moving ceiling fan or car wheel you can get it to appear like it's going backwards or much slower because the oscillation of the fan/wheel combined with the frame rate (sampling rate) of the camera. 

### Buffers

A buffer is an array. When audio is placed in a buffer and passed between sound producing/processing components. 

### Processing Graph

The chain of audio producing/processing components adds up to the processing graph. 

### DAC - Digital-to-Analog Converter

When audio is converted back into analog sound (like out your speaker), smoothing must be applied to get rid of the staircase effect between samples.

### Noise Floor

The noise introduced by quantization error, including rounding errors and loss of precision introduced during audio processing, can be mitigated by adding a small amount of random noise, called dither, to the signal before quantizing. Dithering eliminates the granularity of quantization error, giving very low distortion, but at the expense of a slightly raised noise floor. 

## DAWs

### Channels

Audio layers are arranged into channels with their own volume and pan controls. You can add effects to each channel. 

### Transport

Play/Pause/Stop/Rewind/Loop

### Automation

Most DAWs let you automate nearly every parameter. A volume automation might be used to make an envelope or fade in/out. 