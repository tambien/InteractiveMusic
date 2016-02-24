/**
 * @class  This class represents
 *
 * @constructor
 * @param {array} notes
 */
var Motif = function(notes){

	/**
	 *  The passed in notes as midi
	 *  @type  {array}
	 *  @private
	 */
	this._midiNotes = [];

	for (var i = 0; i < notes.length; i++){
		this._midiNotes[i] = Tone.prototype.noteToMidi(notes[i]);
	}

	/**
	 *  The offset from the given notes. 
	 *  Values in semi-tones
	 *  @type {number}
	 *  @private
	 */
	this._transpose = 0;

	/**
	 *  The time the note is held out for 
	 *  in seconds.
	 *  @type {number}
	 *  @private
	 */
	this._noteLength = 0.6;

	/**
	 *  The synth which plays the notes
	 *  @type  {Tone.SimpleSynth}
	 *  @private
	 */
	this._synth = new Tone.SimpleSynth({
		oscillator : {
			type : "sawtooth9"
		}
	}).toMaster();
};

/**
 *  Play the motif
 *  @param  {when=}  when  When to start the motif. If no
 *                         value is given, it will play immediately.
 *  @return {number} The time at the end of the section                       
 */
Motif.prototype.start = function(when){
	when = when || this._synth.now();
	var duration = this._noteLength * 0.8;
	for (var i = 0; i < this._midiNotes.length; i++){
		this._synth.triggerAttackRelease(this._midiNotes[i] + this._transpose, duration, this._noteLength * i + when);
	}
	return this._midiNotes.length * this._noteLength + when;
};

/**
 *  Transpose the melody up a fifth or down a fourth
 */
Motif.prototype.dominant = function(){
	this._transpose = Math.random() > 0.5 ? -5 : 7;
};

/**
 *  Transpose the melody back to root position.
 */
Motif.prototype.tonic = function(){
	this._transpose = 0;
};

/**
 *  Make it play twice as fast. 
 */
Motif.prototype.doubleTime = function(){
	this._noteLength /= 2;
};

/**
 *  Make the motif play half as slow
 */
Motif.prototype.halfTime = function(){
	this._noteLength *= 2;
};

/**
 *  reverse the order of the notes.
 */
Motif.prototype.reverse = function(){
	this._midiNotes = this._midiNotes.reverse();
};