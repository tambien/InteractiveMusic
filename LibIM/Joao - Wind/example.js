/* 

Wind example 
(Depends on Tone.js)

*/

var wind = new Wind(); // Create a wind object.

wind.start(); // Start the wind | Note: this is not being affected by any direction or speed, it is a 'neutral' sound.

wind.direction('W'); // Set the direction to West.

wind.speed('mid'); // Set speed to mid.


/* Stop wind and LFO */

//wind.stop();
//wind.stopLFO();
