+ Wind +

« João Costa »

This is a library that adds wind to your project. 
Right now you can control the speed and direction of the wind, and the sound will change accordingly.
The sound consists of a Noise generator going through effects and filters. 
The direction of the wind will alter the pan to simulate a real environment, while the speed changes the frequency of the LFO.

new Wind();

* Speed *

The speed can be controlled by changing the argument of the function speed() to either 'high' 'low' or 'mid'.

wind.speed('high');

* Direction *

The direction by changing the function direction() to 'S' 'N' 'W' or 'E'.

wind.direction('S');

* Start *

Start the wind sound (noise + LFO).

wind.start();

* Stop *

Stop the wind but keep the LFO running.

wind.stop();

* Stop LFO *

Stop the LFO.

wind.stopLFO();
