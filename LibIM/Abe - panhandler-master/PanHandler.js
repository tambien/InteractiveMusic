/**
 * @class  PanHandler pans groups of inputs in interesting ways.
 * Fletcher H. Bach came up with the PanHandler name. Thanks Fletcher.
 * 
 * @constructor
 * @param {Object} an array of inputs
 */
var PanHandler = function(inputs) {
	
	this.output = Tone.context.createGain();

	/**
	 * an array of inputs
	 * @type {Array.<object>}
	 */
	this.inputs = inputs;

	/**
	 * holds each inputs Panner
	 * @type {Array.<Tone.Panner>}
	 * @private
	 */
	this._panners = [];

	/**
	 * ramp time (seconds) for effects
	 * @type {number}
	 * @private
	 */
	this._masterRampTime = 1;

	// initialize pans spaced evenly from L to R
	for (i in this.inputs) {
		this._panners.push(new Tone.Panner(i / (this.inputs.length - 1)));
		this.inputs[i].connect(this._panners[i]);
		this._panners[i].connect(this.output);
	}

};


Tone.extend(PanHandler); // must come before function declarations


/**
 * reset the pans to their initial state
 * @param {number} (optional) seconds to ramp
 * @return {PanHandler} `this`
 */
PanHandler.prototype.reset = function(t) {
	for (i in this.inputs) {
		this._panners[i].pan.linearRampToValueNow(i / (this.inputs.length - 1), t ? t : this._masterRampTime);
	}
	return this;
};

/**
 * randomize the pans of all inputs from L to R
 * @param {number} (optional) seconds to ramp
 * @return {PanHandler} `this`
 */
PanHandler.prototype.shuffle = function(t) {	
	for (i in this.inputs) {
		this._panners[i].pan.linearRampToValueNow(Math.random(), t ? t : this._masterRampTime);
	}
	return this;
};

/**
 * flip the pans of each of the inputs to the opposite side and magnitude
 * @param {number} (optional) seconds to ramp
 * @return {PanHandler} `this`
 */
PanHandler.prototype.flip = function(t) {
	for (i in this.inputs) {
		this._panners[i].pan.linearRampToValueNow(Math.abs(this._panners[i].pan.value - 1), t ? t : this._masterRampTime);
	}
	return this;
};

/**
 * gets value of panner for a specified input
 * @param {object} input for which to get panner value
 * @return {number} the value of the panner for that input
 */
PanHandler.prototype.getPannerValue = function(input) {
	return this._panners[this.inputs.indexOf(input)].pan.value;
}

/**
 * gets value of all panners as an array
 * @return {Array.number} an array of all panner values
 */
PanHandler.prototype.getPannerValues = function() {
	var panValueArray = [];
	for (i in this._panners) {
		panValueArray.push(this._panners[i].pan.value);
	}
	return panValueArray;
}

/**
 * sets ramp time for all effects 
 * @param {number} ramp time (seconds)
 * @return {PanHandler} `this`
 */
PanHandler.prototype.setMasterRampTime = function(t) {
	this._masterRampTime = t;
	return this;
}

/**
 * mutes all inputs 
 * @return {PanHandler} `this`
 */
PanHandler.prototype.muteAll = function() {
	for (i in this.inputs) {
		this.inputs[i].volume.value = -1000;
	}
	this._isMuted = true;
	return this;
}

/**
 * unmutes all inputs 
 * @return {PanHandler} `this`
 */
PanHandler.prototype.unmuteAll = function() {
	for (i in this.inputs) {
		this.inputs[i].volume.value = -12;
	}
	this._isMuted = false;
	return this;
}

/**
 * returns whether or not PanHandler is muted 
 * @return {boolean} true if muted, false if not muted
 */
PanHandler.prototype.isMuted = function() {
	return this._isMuted;
}
