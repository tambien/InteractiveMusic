dat.GUI.prototype.addTone = function(name, tone, attributes){
	var folder = this.addFolder(name);
	attributes = attributes || Object.keys(tone.get());
	for (var i = 0; i < attributes.length; i++){
		var attr = attributes[i];
		if (tone[attr] instanceof Tone.Signal || tone[attr] instanceof AudioParam) {
			folder.addSignal(tone, attr).min(0);
		} else if (tone[attr] instanceof Tone){
			folder.addTone(attr, tone[attr]);
		} else if (attr === "type"){
			folder.addTypeDropDown(tone);
		} else {
			folder.add(tone, attr).min(0);
		}
	}
	return folder;
};

dat.GUI.prototype.addTypeDropDown = function(tone){
	if (tone instanceof Tone.OmniOscillator){
		return this.add(tone, "type", ["sine", "square", "triangle", "sawtooth", "pwm", "pulse"]);
	} else if (tone instanceof Tone.Oscillator){
		return this.add(tone, "type", ["sine", "square", "triangle", "sawtooth"]);
	} else if (tone instanceof Tone.Filter){
		return this.add(tone, "type", ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"]);
	} else if (tone instanceof Tone.Noise){
		return this.add(tone, "type", ["brown", "white", "pink"]);
	}
};