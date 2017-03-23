---
title : Randomization
layout : default
---

Play (or don't) with some probability

[Basic Probability](https://jsfiddle.net/yotammann/3hvokbug/)

[Basic Probability from Click](https://jsfiddle.net/yotammann/pxhkoejg/)

## Random Melody Generator

#### Generate Material by randomly selecting from an array of notes.

* Make the synth
* Make the array of notes
* Schedule a series of random notes. 

[Random Note Choice](https://jsfiddle.net/yotammann/3hvokbug/1/)

[Random Note Choice with Rests](https://jsfiddle.net/yotammann/o9sLe8w9/1/)

What kind of music does this make? What sort of musical decisions is there to make with this technique? Where can you take it from here? 

#### Let's Constrain the movement. 

* Pick the next note based on the current note.
	* When a random value is above 0.5, move to the next note up
	* When below, move one note down
* Constrain the values to the length of our array

[Stepwise Note Choice](https://jsfiddle.net/yotammann/rto6hvwx/)

[Stepwise with wrapping](https://jsfiddle.net/yotammann/b1y94b8j/)

## Markov Chords

Markov chains define states and probability of moving from one state to another. We'll use chords as our states and define a way of moving from one state to another. 

![Basic Markov Chain](http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/220px-Markovkate_01.svg.png)

* First make the possible chord paths from one chord to the next. 
* Given there are only two choices between either state, flip a coin and choose one or the other. 
* Play those chords on a PolySynth
* Maybe even add a bass part. 

[Markov Chord Progression](https://jsfiddle.net/yotammann/b5s9ept2/)

## Probability Drums

On every step of our sequencer, we will decide whether or not to play a drum part on that step given a probability table. 

* Make a drum kit. 
* Make some sliders with 16 steps. 
	* zero them out
* On every step, generate a random number and compare it to the probability at that step

[Chord Probability](https://jsfiddle.net/yotammann/qy5wfkxh/)

#### Interpolated Probabilities

By adjusting the probability over time can add interesting progression to music. 

[Change Probability over time](https://jsfiddle.net/yotammann/Laaw23de/)

[Interpolating Probability](https://jsfiddle.net/yotammann/w16c4koL/)

## REFERENCES

* [Algorithmic Composition](http://algocomp.blogspot.com/)
* [Cellular automata and music](http://www.ibm.com/developerworks/java/library/j-camusic/)
* [Shiffman on Markov Chains](http://shiffman.net/teaching/a2z/generate/#ngrams)
* [A Panoply of Stochastic 'Cannons'](http://www.jstor.org/stable/3679442?seq=2#page_scan_tab_contents)
* [Music and Probability](http://www.amazon.com/Music-Probability-David-Temperley/dp/0262515199)
* [The Algorithmic Composer](http://www.amazon.com/Algorithmic-Composer-Computer-Digital-Series/dp/0895794543)