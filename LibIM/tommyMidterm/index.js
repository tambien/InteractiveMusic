		Tone.Transport.start();

		var loaded = 0;
		function testLoaded(){
			if (loaded ===4){
				console.log("sample loaded");
				//player.start();
			}
		}

		//load an mp3
		var player = new Tone.Player("./samples/tom_pitch.mp3", function(){
			loaded++;
			testLoaded();

		});

		//load another mp3
		var player2 = new Tone.Player("./samples/congodrum.mp3", function(){
			loaded++;
			testLoaded();
		});

		//invoked when the queued sample is done loading
		Tone.Buffer.onload = function(){
			player.start();
			player2.start();
			console.log("everything is loaded");
		};

		player.toMaster();
		player2.toMaster();
		player.loop = true;
		player2.loop = true;
		player.retrigger = true;
		player2.retrigger = true;

		
		//this code calls the GUI vinyl element, you can play with the features, like color
		nx.onload = function(){

			nx.colorize("#00CCFF"); // sets accent (default)
			nx.colorize("border", "#222222");
			nx.colorize("fill", "#222222");
			
			vinyl2.colors.accent = "#FF00CC";
			vinyl2.draw();

			vinyl2.on("*", function(data){

			//callback inside the function 
			//we are changing the each mp3 players playbackRate based on the user interaction with the Vinyl 

			player.playbackRate = data.speed;
			console.log(data);
			if (data.on === 1){
				if (playBackSpeed[data.key]){
					player.playbackRate(playBackSpeed[data.key]);
				}
			} else {
			}
		});
			

			vinyl3.on("*", function(data){

			//callback inside the function 
			//we are changing the each mp3 players playbackRate based on the user interaction with the Vinyl 

			player2.playbackRate = data.speed;
			console.log(data);
			if (data.on === 1){
				if (playBackSpeed[data.key]){
					player2.playbackRate(playBackSpeed[data.key]);
				}
			} else {
			}
		});
		};

		