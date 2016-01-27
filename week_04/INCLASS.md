Make a self-contained sound-making object using the function object way of making classes. Keep it simple. Focus on making a clear and simple interface. No more than 3 public methods and attributes. Your class should be documented with JSDoc-style comments which clarify the methods and attributes and their parameters and types. Take a look at the class README and the [function object](./0_functionObjects/) example in the week3 folder. Make your class in a seperate JS file and include a didactic example of how your class can be used. 

Here is an unimplemented example of a class which makes cool music. 

```javascript
/**
 *  @class This class adds cool music to your web page.
 *  	   Depends on Tone.js and jQuery. 
 * 
 *  @param {string}  [style="polka"]  The style of music. Either "rap", "muzak", or "polka". 
 *									  Defaults to "polka".
 */
var CoolMusic = function(style){
	/**
	 *  the style of music attribute
	 *  @type {string}
	 */
	this.style = style || "polka";
}

/**
 *  The coolness of the music as a number between 0-11. 
 *  @param  {number}  coolness
 */
CoolMusic.prototype.setCoolness = function(coolness){
	//some code here
}

/**
 *  start the music
 */
CoolMusic.prototype.play = function(){
	//some code here
}

/**
 *  stop the music. 
 */
CoolMusic.prototype.stop = function(){
	//some code here
}

/**
 *  An internal method which updates the music.
 * 	@private
 */
CoolMusic.prototype._update = function(){
	//some code here
}
```
