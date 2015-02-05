## COURSE GOALS

* Listening-centric
* Jamming
* No GUIs (at least in the beginning)
* Javascript / Web Audio / Tone.js

# WEEK 0

* Intros
* Techniques / History / Context
* Implementations
* Constraints
* Jam

## TECHNIQUES

### Aleatoric

> Aleatoric music (from the Latin word alea, meaning "dice") is music in which some element of the composition is left to chance, and/or some primary element of a composed work's realization is left to the determination of its performer(s)
>
> Wikipedia - [Aleatoric Music](http://en.wikipedia.org/wiki/Aleatoric_music)

#### [Music of Changes](https://www.youtube.com/watch?v=B_8-B2rNw7s) - John Cage - 1951

* Early fully-indeterminate work by John Cage.
* Uses _I Ching_, an ancient divination text, to generate random numbers.
* Segments are composed by consulting the _I Ching_ on which sound event to choose from a sound chart.

### Stochastic

> Stochastic comes from the Greek word στόχος, which means "aim". It also denotes a target stick; the pattern of arrows around a target stick stuck in a hillside is representative of what is stochastic.
>
> Wikipedia - [Stochastic](http://en.wikipedia.org/wiki/Stochastic)

#### [Pithoprakta](https://www.youtube.com/watch?v=sWdQBblec0M) - Iannis Xenakis - 1956

* Mathematical processes based on probability that generate stochastic elements.
* Piece is based on statistical mechanics of gasses, Guassian distribution and Brownian Motion.
* Each instrument is conceived as a molecule obeying the Maxwell–Boltzmann distribution law, with Gaussian distribution of temperature fluctuation.

### Process Music

#### [Piano Phase](http://www.pianophase.com/) - Steve Riech - 1966

(Visualization by Alexander Chen)

Process: 

1. Both performers play the pattern over and over again. One performer starts, the other fades in in unison (bars 1–2).
2. The first performer keeps a constant tempo. The other performer gradually increases his tempo, until he is one note ahead of the first performer (bar 3)
3. After playing in synchronization for a while, the second performer again begins increasing his tempo, and the phase shifting process starts again (bars 3–4)

Transfer the phase shifting processes he explored in tape pieces like [It’s gonna Rain](https://www.youtube.com/watch?v=vugqRAX7xQE) to live instrumental performance

### Open Form

#### [In C](https://www.youtube.com/watch?v=OjR4QYsa9nE) - Terry Riley - 1964

* Each performer plays a measure for as long as they want and then goes onto the next one.
* [Score](http://www.flagmusic.com/content/clips/inc.pdf)


#### [Cobra](https://www.youtube.com/watch?v=1m1pjR1AQbc) - John Zorn - 1984

* Game Piece: A detailed set of rules for a group of improvisers
* A conductor leads the groups and gives the cues. 
* [Cue Cards](http://necmusic.edu/sites/default/files/images/cobra-score480px.preview.jpg)

### Computer Assisted Improvisation

#### [Interactive Trio](http://vimeo.com/23556704) - George Lewis - 2011

* Interactive performance system listens and responds to musical input. 
* Output is a transformation of the input material.

## EVERYONE IS A MUSICIAN

All of these above systems assume a stage, audience, instruments, musical training on the part of the interacter/performer. The democratization is music creation software in the past decade has somewhat flipped this model on its head. Now it's easier than ever to make music and stream it over the internet. No stage, no instruments, musical training optional. 

So where does the "artist", "auteur", "composer", "musician" fit in?

I think, composition is moving away from arranging pitches and durations towards making implementation choices. 

Thoughts? 

### Digital Interactives

#### [Ticket](https://www.youtube.com/watch?v=zUw79YA71pg) - Morgan Packard & Josh Ott - 2010

* Four interactive "songs"
* Corresponding computer generated visuals
* Touch and accelerometer interactions

#### [Bloom](https://www.youtube.com/watch?v=2tZ7eWqHsdg) - Brian Eno & Peter Chilvers - 2008

* Low drone
* Looped touch notes
* Has "default" mode which makes sound even when the screen is not touched

#### [Plink](http://labs.dinahmoe.com/plink/) - Dinahmoe - 2011

* WebSocket connected multiplayer jam
* Every person person plays an instrument and can control start/stop and note

#### [Patatap](http://www.patatap.com/) - Jono Brandel - 2014

* Sample player
* Triggering with corresponding visuals
* Two.js visuals

### Roles: Person / Process

Some of the above examples include defining a process to generate pitches and durations and then having a human player perform these sounds. Others use a player to affect a process which realizes the music. 

|                  | Person Performed                   | Process Performed                    |
|:----------------:|------------------------------------|--------------------------------------|
| Person Composed  | Traditional Music.                 | Interactive Music / Video Game Music / DAWs? |
| Process Composed | Aleatoric/Stochastic/Process Music | Data Sonification?                   |


### Music Creation Software

How does the system we use to make music dictate the music we make with it?

#### [Live](https://www.ableton.com/en/live/) - Ableton

* Abletunes 
* Grid-based
* Pre-installed loop.
* Many Synthesizers

#### [GarageBand](https://www.apple.com/mac/garageband/) - Apple

* Physical-Modeling Synthesizers
* Acoustic Instruments
* "session drummer"

#### [Figure](https://www.youtube.com/watch?v=gLLjRH6GJec) - Propellerhead

* Powerful iOS app for making electronic music
* Electronic instruments
* Quantized

#### MIDI

* 7-bit values (0-127)
* Limited number of musical event types (Note On/Off)
* [Black MIDI](https://www.youtube.com/watch?v=OZg6IjSmSPU)

#### ?

How much of the music are you creating and how much of it are you just realizing? 


## WHY INTERACTION?

Why make something interactive?

Why make interactive music?

Why NOT make interactive music?

## PLAY

### Performing Cobra: 

1. Pick one word to use as your musical instrument.
2. Together, choose 4 musical actions. 
2. Assign them to 4 directions: Up/Down/Left/Right. 
3. A conductor will cue participants in these 4 actions for a group improvisation. 

[Jam0 - Cobra Snake](./Jam0.mp3)

## REFERENCES

* [Overt and Hidden Processes in 20th Century Music](http://vbn.aau.dk/files/43050326/Processes.EC.pdf)

## READING

* [Arp 2600 Owner's Manual Pages 4-9](http://guitarfool.com/ARP2600/Arp%202600%20Owners%20Manual.pdf)

## ASSIGNMENT

Pick a musical constraint/parameter, make a piece of music which explores that dimension. 1-2 minutes. Email me an audio recording and a brief description including what parameter you composed with. Could be low-tech/no-tech. Please encode it as an mp3. I like [this](http://sourceforge.net/projects/xld/) mp3 encoder if you don't already have one.

email: ypm206@nyu.edu

(additional assignment to start learning a little Javascript for people with no JS experience)
