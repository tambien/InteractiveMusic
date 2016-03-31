/**
 *  A star is a dot at a position. it plays a specific tone
 *  when clicked on
 */
var Star = function(data){

	this._note = data.note;

	this._size  = data.size;

	this._element = $("<div>", {
			"class" : "Star"
		})
		.appendTo("body")
		.css({
			top : data.y,
			left : data.x,
			width : data.size * 100,
			height: data.size * 100
		})
		.on("click", this._clicked.bind(this));


	var eighthNote = Tone.Transport.toSeconds("8n");
	this._loop = new Tone.Loop(this._trigger.bind(this), "1m").start(eighthNote * data.index);
};

//a shared synth among all instances of the star
Star.prototype._synth = StarSynth;

/**
 *  Start the star sound
 *  @param {Time} when
 */
Star.prototype._trigger = function(when){
	if (this._active){
		this._synth.triggerAttackRelease(this._note, "8n", when, this._size);
		//have it flash on for 0.25 seconds
		this._element.addClass("Flash");	
		setTimeout(function(){
			this._element.removeClass("Flash");
		}.bind(this), 50);
	}

};

/**
 *  click handler
 *  @param {Time} when
 */
Star.prototype._clicked = function(e){
	//toggle the active state
	this._active = !this._active;
	this._trigger();

	if (this._active){
		this._element.addClass("Active");
	} else {
		this._element.removeClass("Active");
	}
};