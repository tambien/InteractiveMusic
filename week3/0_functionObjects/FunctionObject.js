/**
 * @class  this class is supposed to mimic a piano
 *
 * @constructor
 * @param {number} [keys=88] the number of keys the piano has
 * @param {string} [type="grand"] the type of piano that it is. 
 */
var PianoClass = function(keys, type){

	/**
	 * the number of keys the piano has
	 * @type {number}
	 */
	this.keyCount = keys || 88;

	/**
	 * the type of piano
	 * @type {string}
	 */
	this.type = type || "grand";

	/**
	 * the number of octaves the piano has
	 * @type {number}
	 */
	this.octaves = this.keyCount / 12;

	/**
	 * the black key names
	 * @type {Array.<string>}
	 * @private
	 */
	this._blackKeyNames = ["C#", "Db", "D#", "Eb", "F#", "Gb", "G#", "Ab", "A#", "Bb"];

	/**
	 * the white key names
	 * @type {Array.<string>}
	 * @private
	 */
	this._whiteKeyNames = ["C", "D", "E", "F", "G", "A", "B"];

	/**
	 * keeps track of which keys are pressed
	 * @type {Object}
	 * @private
	 */
	this._pressedKeys = {};

	//tune the piano initially
	this._tunePiano();
};

/**
 * press a specific note on the piano
 * @param {string} note the note name
 * @return {PianoClass} `this`
 */
PianoClass.prototype.pressNote = function(note){
	if (!this._pressedKeys[note]){
		this._pressedKeys[note] = true;
	}
	return this;
};


/**
 * press a specific note on the piano
 * @param {string} note the note name
 * @return {PianoClass} `this`
 */
PianoClass.prototype.releaseNote = function(note){
	if (this._pressedKeys[note]){
		this._pressedKeys[note] = false;
	}	
	return this;
};

/**
 * test if the key is a black key
 * @param  {string}  key the key name
 * @return {boolean}     
 */
PianoClass.prototype._isBlackKey = function(key){
	key = key.toUpperCase();
	for (var i = 0; i < this._blackKeyNames.length; i++){
		var blackKeyName = this._blackKeyNames[i];
		if (key.indexOf(blackKeyName) !== -1){
			return true;
		}
	}
	return false;
};

/**
 * test if the key is a white key
 * @param  {string}  key the key name
 * @return {boolean}     
 */
PianoClass.prototype._isWhiteKey = function(key){
	key = key.toUpperCase();
	for (var i = 0; i < this._whiteKeyNames.length; i++){
		var whiteKeyName = this._whiteKeyNames[i];
		if (key.indexOf(whiteKeyName) !== -1){
			return true;
		}
	}
	return false;
};

/**
 * get the number of pressed notes
 * @return {number}
 */
PianoClass.prototype.getPressedNoteCount = function(){
	return this.getPressedBlackKeyCount() + this.getPressedWhiteKeyCount();
};

/**
 * get the number pressed notes which are black keys
 * @return {number}
 */
PianoClass.prototype.getPressedBlackKeyCount = function(){
	var count = 0;
	for (var keyName in this._pressedKeys){
		if (this._pressedKeys[keyName] && this._isBlackKey(keyName)){
			count++;
		}
	}
	return count;
};

/**
 * get the number pressed notes which are white keys
 * @return {number}
 */
PianoClass.prototype.getPressedWhiteKeyCount = function(){
	var count = 0;
	for (var keyName in this._pressedKeys){
		if (this._pressedKeys[keyName] && this._isWhiteKey(keyName)){
			count++;
		}
	}
	return count;
};

/**
 * get the number of pressed notes as a percentage of the total number of keys
 * @param {number=} precision the precision to return the percentage
 * @return {string}
 */
PianoClass.prototype.getPercentageOfPressedKeys = function(precision){
	var percent = this.getPressedNoteCount() / this.keyCount;
	return (percent * 100).toFixed(precision || 1) + "%";
};

/**
 * gotta retune the piano every once and a while
 * @private
 */
PianoClass.prototype._tunePiano = function(){
	console.log(this.type + "piano was tuned");
	//schedule next tuning. 
	setTimeout(this._tunePiano.bind(this), 60000);
};