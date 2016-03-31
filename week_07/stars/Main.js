var stars = [];
var warpStars = [];

function setup(){

	for (var i = 0; i < starData.length; i++){
		var star = new Star(starData[i]);
		stars.push(star);
	}

	for (var j = 0; j < warpStarData.length; j++){
		var warpStar = new WarpStar(warpStarData[j]);
		warpStars.push(warpStar);
	}

	//add a start button
	$("<button>").text("start").appendTo("body").on("click", function(){
		if (Tone.Transport.state === "started"){
			$(this).text("start");
			Tone.Transport.stop();
		} else {
			$(this).text("stop");
			Tone.Transport.start();
		}
	});
}

$(setup);