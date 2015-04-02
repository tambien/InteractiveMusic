# PanHandler.js
A [Tone.js](https://github.com/TONEnoTONE/Tone.js) plugin for panning groups of Tone.js objects.

### Create a PanHandler object
    var inputs = [ /* array of any number of Tone objects with outputs */  ];
    
    var ph = new PanHandler(inputs);
    ph.toMaster();
    
### Handle some pans

##### Shuffle
Randomizes the pans across the aural space (i.e. a random pan value between 0 and 1)

    ph.shuffle();

    LEFT                        CENTER                        RIGHT
    0.0   0.1   0.2   0.3   0.4   0.5   0.6   0.7   0.8   0.9   1.0
           ? <<------- ^ ------------->> ?

##### Flip
Reverses pans and their respective magnitudes across the aural space (e.g. 0.9 -> 0.1, 0.4 -> 0.6)

    ph.flip();

     LEFT                        CENTER                        RIGHT
     0.0   0.1   0.2   0.3   0.4   0.5   0.6   0.7   0.8   0.9   1.0
                  ^  ----------------------------->>  ^

##### Reset
Resets pans to factory defaults a.k.a. an even distribution across the aural spac

    ph.reset();
    
### Ramp some pans
Each of the three core PanHandler functions accept a parameter which specifies the ramping time:

    ph.shuffle(3); // shuffle pans gradually over 3 seconds
    ph.flip(1);    // flip pans gradually over 1 second
    ph.reset(7);   // reset pans gradually over 7 seconds

Or, if you want to set a master ramp time for all functions:

    ph.setMasterRampTime(3);
    
### Other utilities
You can get panner values for one or all of your original inputs:

    ph.getPannerValue(object); // returns current pan of an object from the original input array
    
Or, you can get an array of all panner values, in the same order as the original input array:

    ph.getPannerValues(); // e.g. [0.1, 0.3, 0.5, 0]
