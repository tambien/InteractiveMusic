/**
 *  @class This class adds a Wind sound to your web page.
 *         Depends on Tone.js.
 *  @param {string}  [type="white"]  The type of noise. Either "pink", "white", or "brown". 
 *                                    Defaults to "white".
 */

var Wind = function(type){

	this.type = type || "white";

	this.reverb = new Tone.JCReverb();
	this.noise = new Tone.Noise(this.type);
	this.filter = new Tone.Filter(800,"bandpass",-48);
	this.lfo = new Tone.LFO("4n",100,200);
	this.eq = new Tone.EQ(-7,11,12);
	this.split = new Tone.Split();
	this.pan = new Tone.Panner(0.5);

	this._setup();

	this.lfo.frequency.value = 0;

};

/**
 *  @param {string}  [windType="high"]  The type of wind. Either "high", "mid", or "low". 
 *                                    Type of the wind will change the frenquency of the LFO.
 */


Wind.prototype.speed = function(windType){

	this.windType = windType;

	switch(this.windType) {
		case 'low':
		this.lfo.frequency.rampTo(0.1, 5);
		break;

		case 'mid':
		this.lfo.frequency.rampTo(0.2, 5);
		break;

		case 'high':
		this.lfo.frequency.rampTo(0.3, 5);
		break;

		default:
		alert("Please type 'low', 'mid' or 'high'");
		this.lfo.frequency.rampTo(0, 5);
		break;
	}

};

/**
 *  @param {string}  [direct="N"]  The direction of the wind. Either "N", "S", "E" or "W". 
 *                                    Type direction of the wind will change Pan and/or Volume.
 */

Wind.prototype.direction = function(direct){

	this.direct = direct;

	switch(this.direct) {
		case 'W':
		this.pan.pan.rampTo(0.1,5);
		Tone.Master.volume.rampTo(0, 5);
		break;

		case 'N':
		this.pan.pan.rampTo(0.5,5);
		Tone.Master.volume.rampTo(0, 5);
		break;

		case 'E':
		this.pan.pan.rampTo(0.9,5);
		Tone.Master.volume.rampTo(0, 5);
		break;

		case 'S':
		this.pan.pan.rampTo(0.5,5);
		Tone.Master.volume.rampTo(-5, 5);
		break;

		default:
		alert("Please type 'N', 'S', 'W' or 'E'");
		this.pan.pan.rampTo(0.5,5);
		Tone.Master.volume.rampTo(0, 5);
		break;
	}

};

/**
 *  Private setup
 */

Wind.prototype._setup = function() {

	this.noise.volume.value = -8;

	this.lfo.connect(this.filter.frequency);

	this.noise.chain(this.filter,this.reverb,this.eq,this.split,this.pan);
	this.pan.toMaster();

};

/**
 *  Start the Noise + LFO
 */

Wind.prototype.start = function() {
	this.noise.start();
	this.lfo.start();
	
};

/**
 *  Stop the Noise
 */

Wind.prototype.stop = function() {
	this.noise.stop();
};

/**
 *  Stop the LFO
 */

Wind.prototype.stopLFO = function() {
	this.lfo.stop();
};

