/* 

Wind example 
(Depends on Tone.js)

*/

var wind = new Wind(); // Create a wind object.

wind.start(); // Start the wind
		      // Note: this is not being affected by any direction or speed, 
		      // it is a 'neutral' sound.

wind.speed('high'); // Set speed to high.
wind.direction('S'); // Set the direction to South.

/* Stop wind and LFO */

//wind.stop();
//wind.stopLFO();
