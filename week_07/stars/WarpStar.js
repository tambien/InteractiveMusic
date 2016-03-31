//extend a child class with a parent class
function extend(Child, Parent){
	function TempConstructor(){}
	TempConstructor.prototype = Parent.prototype;
	Child.prototype = new TempConstructor();
	Child.prototype.constructor = Child;
}


var WarpStar = function(data){

	Star.call(this, data);

	this._element.addClass("WarpStar");
};

extend(WarpStar, Star);


//warp stars have different synths
WarpStar.prototype._synth = WarpStarSynth;

WarpStar.prototype._trigger = function(when){

	if (this._active){

		//trigger the parents _trigger method
		Star.prototype._trigger.call(this, when);
		
		//jump to a new random locaiton on every trigger
		this._element.css({
			left : (Math.random() * 100).toString() + "%",
			top : (Math.random() * 100).toString() + "%"
		});
		
	}
};