# WEEK 1 - Implementations

* Review of Notes
* Sound
* Analog Synth Components
* Synthesis
* Digital Audio
* DAWs
* Spectromorphology
* Dimensions and Parameters

## BASICS OF SOUND

Sound is a vibration that propagates as an audible mechanical wave of pressure and displacement, through a medium such as air or water.

#### Frequency

The number of occurrences of a repeating oscillation per unit time. 1 hertz is 1 cycle per second. 

Frequency vs Pitch...

#### Wavelength

The length of 1 cycle. 

* 20hz wave is 17 meters long. 
* 20,000hz wave is 17 millimeters long. 

#### Amplitude

The magnitude of the wave. The difference between extreme values. DIFFERENT than volume.

#### Phase

Phase difference is the difference, expressed in degrees or time, between two waves having the same frequency and referenced to the same point in time.

#### Summing and Subtracting waves

When two waves are in phase, their amplitudes sum. If they are out of phase, their amplitudes subtract. 

## TERMINOLOGY

* Octave - the interval between one musical pitch and another with half or double its frequency.
* Decibel - a logarithmic scale used to measure sound level. 
* Fundamental Frequency - the lowest frequency of a periodic waveform. 
* Attenuation - decrease/increase in a signal. loudness. 

## ANALOG AUDIO

When translating sound waves into electrical signals, synthesizers use voltage. A typical range would be ±15V. 

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

Multiple types of noise: white, pink, brown. 

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

## DIGITAL AUDIO

### Gain (*)

Gain is the ratio between the input and the output signal. 

### Sampling

Continuous, analog values are converted to discrete digital events through sampling. The Nyquist Theorem states that the sampling rate needs to be at least twice the highest frequency to be reproduced. 

Nyquist worked at Bell Labs and so did Max Matthews. 

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

## DIGITAL AUDIO

### Mixers (+)

When two signals meet at a junction, the resulting signal is the sum of the inputs. 

## [Spectromorphology](https://github.com/igoumeninja/ofSpectrograph/blob/master/bibliography/Spectromorphology%20Explaining%20Sound%20Shapes_%20D.%20Smalley.pdf)

First published in 1986 by Denis Smally. 

Addresses the inadequacy of traditional notation in capturing the endless sound-generating possibilities of computers. 

If we can't abstract them into instruments/notes/rhythms, how can we compose and reason about them?

> Until the electroacoustic medium arrived, all music was created either through forms of vocal utterance or through instrumental gesture. A human agent produces spectromorphologies via the motion of gesture, using the sense of touch or an implement to apply energy to a sounding body. A gesture is therefore an energy–motion trajectory which excites the sounding body, creating spectromorphological life. 

Onset, Continuant and Termination

* attack-impulse. Modeled on the single detached note: a sudden onset which is immediately terminated.
* attack-decay (closed and open) - modeled on sounds in which the attack-onset is extended by a resonance that quickly or gradually decays towards termination. The closed form represents a quick decay which is strongly attack-determined. 
* graduated continuant - Modeled on sustained sounds. The onset is graduated, settling into a continuant phase which eventually closes in a graduated termination. 

#### Ligeti - [Artikulation](https://www.youtube.com/watch?v=71hNl_skTZQ)

Score created by Rainer Wehinger after the piece was composed.

### Source Bonding

Associating sounds sources with what is perceived to have created that sound. 

## DIMENSIONS

Dimensionality and parameterization are important concepts for interactive music. Often times users are given an interaction an a specific dimension. The higher-level the dimension (i.e. "energy" vs "loudness", "dance-ability" vs "tempo"), the more engaging and approachable the interaction.

### IN CLASS EXERCISE

Given a parameter curve, conceive a high-level dimension with your group and realize a short (30-60 second) piece of audio which follows that curve. 

You can use any medium or software from live performance to Garage Band. 

Groups of 3. 20 minutes prep. 15 minutes presentation. 

## REFERENCES

* [Introduction to Computer Music: Digital Audio](http://www.indiana.edu/~emusic/etext/digital_audio/chapter5_digital.shtml)
* [Spectromorphology](http://www.jaimeoliver.pe/courses/ci/pdf/smalley-1997.pdf)
* [Intro to Synthesis](http://beausievers.com/synth/synthbasics/)

## READING

* [Web Audio - O'Reilly](http://chimera.labs.oreilly.com/books/1234000001552/index.html)
* [Javascript: The Good Parts - Crockford, Chapters 2-4](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?s=books&ie=UTF8&qid=1417638918&sr=1-1&keywords=javascript+the+good+parts)
