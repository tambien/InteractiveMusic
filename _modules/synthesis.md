---
title : Synthesis
layout: default
---

## ANALOG Synthesis

When translating sound waves into electrical signals, synthesizers use voltage. A typical range would be ±15V or ±5V. 

For demonstration, I will be using modular synths made with [BEAP](https://github.com/stretta/BEAP/wiki/BEAP-Modular---Overview-and-Install) for Max/MSP. You can download all of the patches [here]({{site.baseurl}}/assets/modular.zip)

## Sources

Outputs signal, but no input other than control voltage.

### Oscillators

VCO (Voltage-Controlled Oscillator). Oscillation frequency is controlled by a voltage input. 

ARP 2600: 
* 0v -> 100hz
* +4v -> 1600hz
* -4v -> 6.25hz

#### Sine

In 1822, Joseph Fourier, a French mathematician, discovered that sinusoidal waves can be used as simple building blocks to describe and approximate any periodic waveform. 

{% include youtube.html video="8KmVDxkia_w" %}

#### Square

Amplitude alternates at a steady frequency between fixed minimum and maximum values, with the same duration at minimum and maximum. The transition between minimum to maximum is instantaneous for an ideal square wave; this is not realizable in physical systems. Can be represented as an infinite summation of sinusoidal waves

![approximation with sine waves](https://upload.wikimedia.org/wikipedia/commons/b/bc/Fourier_series_for_square_wave.gif)

#### Triangle

The triangle wave contains only odd harmonics, due to its odd symmetry. However, the higher harmonics roll off much faster than in a square wave. 

![approximation with sine waves](https://upload.wikimedia.org/wikipedia/commons/b/bb/Synthesis_triangle.gif)

#### Sawtooth

While a square wave is constructed from only odd harmonics, a sawtooth wave's sound is harsh and clear and its spectrum contains both even and odd harmonics of the fundamental frequency. Because it contains all the integer harmonics, it is one of the best waveforms to use for subtractive synthesis of musical sounds, particularly bowed string instruments like violins and cellos. 

![approximation with sine waves](https://upload.wikimedia.org/wikipedia/commons/d/d4/Synthesis_sawtooth.gif)

#### Control Voltage 

Signal which is used to control a parameter. i.e. Feeding an LFO into the frequency control of a VCO would create a frequency vibrato in which the frequency of the VCO warbles at the rate of the LFO. 

### LFO

Low Frequency Oscillator - slow cycles anywhere from a fortieth of a second to several minutes. Applied as control voltage since it's not audible. 

### VCA

Voltage Controlled Amplifier. Applying an LFO to VCA would make a tremolo.

### Noise

[Multiple types of noise](https://en.wikipedia.org/wiki/Colors_of_noise): white, pink, brown, violet, blue...

### Envelope Generator

This is a control signal which rises and falls. Typically applied to the amplitude of a signal to create discrete "note" events. 

#### ADSR

A very common synthesizer envelope which models musical instrument notes. 

* Attack time is the time taken for initial run-up of level from 0 to peak, beginning when the key is first pressed.
* Decay time is the time taken for the subsequent run down from the attack level to the designated sustain level.
* Sustain level is the level during the main sequence of the sound's duration, until the key is released.
* Release time is the time taken for the level to decay from the sustain level to zero after the key is released.

## Processors

### Filters

VCF - Voltage Controlled Filter. Attenuates frequencies below (high-pass), above (low-pass) or both below and above (band-pass) a certain frequency

#### Cutoff frequency

At what frequency the filter starts to attenuate signal.

#### Rolloff

How quickly the frequency attenuates. Measured as drop in db over octaves. 

#### Types

* Highpass - Only lets the high frequencies through. 
* Lowpass - Only lets the low frequencies through. 
* Bandpass - Only lets a narrow band of frequencies through. 
* Notch - Rejects a narrow frequency band. 
* High/Low shelf
* Peak

### Effects

#### Delay

Delay is an audio effect which records an input signal to an audio storage medium, and then plays it back after a period of time. When this signal is fed back into itself (with some attenuation usually) you get a feedback delay 

#### Chorus

Chorus is an effect created with a delay which delays and detunes the input audio to thicken the sound. 

#### Compressor

Compressors narrow the dynamic range (difference between the loud parts and the soft parts) of an audio signal. Typical controls are threshold (above which point the attenuation will occur) and ratio (the amount of attenuation to apply to signal above the threshold value). 

## Subtractive and Additive Synthesis

Additive Synthesis combines sound generating elements (such as oscillators). 

Subtractive Synthesis uses filters to subtract sound from a harmonically rich sound source. 