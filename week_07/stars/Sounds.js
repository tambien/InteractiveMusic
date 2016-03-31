var StarSynth = new Tone.PolySynth(3, Tone.AMSynth).toMaster();

var delay = new Tone.FeedbackDelay("4n", 0.2).toMaster();
delay.wet.value = 0.5;

var WarpStarSynth = new Tone.PolySynth(3, Tone.SimpleSynth).connect(delay);

WarpStarSynth.set({
	"oscillator.type" : "square4"
});