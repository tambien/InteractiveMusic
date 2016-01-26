* Guest: Luke DuBois
* Randomness
	* Limited Randomness
* Functions
* Random Melody Walk
	* Interactive Melody Walk
* Markov Melodies
	* Interactive Markov Melodies
* Probabilistic drum loops
* Interpolation

## Random Melody Generator

#### Generate Material by randomly selecting from an array of notes.

* Make the synth
* Make the array of notes
* In the callback function randomly select a note from the scale

#### Not terribly musical. Let's Constrain the movement. 

* Pick the next note based on the current note.
* Allow it to move only +/- some interval value based on a distribution
* Constrain the values to the length of our array

#### Adding Interaction

* Make the distribution controlled by a slider

## Random Melody Walker

* Similar to the above example. 
* Have a scale, but not the octave controls
* When a random value is above 0.5, move to the next note up
	* When below, move one note down
* Handle the case where you've reached the top or the bottom of the scale

#### Make it interactive

* Instead of the direction probability being equally up or down (i.e. 0.5), put that number in the hands of the user. 

## Markov Chords

Markov chains define states and probability of moving from one state to another. We'll use chords as our states and define a way of moving from one state to another. 

![Basic Markov Chain](http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/220px-Markovkate_01.svg.png)

* First make the possible chord paths from one chord to the next. 
* Given there are only two choices between either state, flip a coin and choose one or the other. 
* Play those chords on a PolySynth
* Maybe even add a bass part. 

#### Make it interactive

* Instead of using a coin flip, let the user control the probability of the direction is goes in. 

## Probability Drums

On every step of our sequencer, we will decide whether or not to play a drum part on that step given a probability table. 

* Make a drum kit. 
* Make some sliders with 16 steps. 
	* zero them out
* On every step, generate a random number and compare it to the probability at that step

### Interpolated Probabilities

It becomes really interesting when you interpolate between multiple probability tables. 

* Let's make two probability tables that we like.
* Create a function which will interpolate between two values on an instrument at a particular step. 
* Use that probability to decide if the note gets played or not. 
* Given the user control over that interpolation. 


## REFERENCES

[Algorithmic Composition](http://algocomp.blogspot.com/)
[Cellular automata and music](http://www.ibm.com/developerworks/java/library/j-camusic/)
[Shiffman on Markov Chains](http://shiffman.net/teaching/a2z/generate/#ngrams)
[A Panoply of Stochastic 'Cannons'](http://www.jstor.org/stable/3679442?seq=2#page_scan_tab_contents)
[Music and Probability](http://www.amazon.com/Music-Probability-David-Temperley/dp/0262515199)
[The Algorithmic Composer](http://www.amazon.com/Algorithmic-Composer-Computer-Digital-Series/dp/0895794543)

[Luke DuBois' Markov Projects and Resources](http://sites.bxmc.poly.edu/~lukedubois/yotam_class.zip)