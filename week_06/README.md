* In class presentation/performance of an interactive instrument/composition using the sonic objects that you've been developing for yourself to use as well as each other. 
* Data Sonification
* Refactoring
* Documentation
* Extensibility

## SONIFICATION

Sonification is the technique of translating data streams into music or sound. The primary consideration is not interaction, but musical mapping. As we discussed last week, conceptual clarity is also a primary concern. Does it sound like the data? 

[Mickey Hart Composes Music from the Sounds of the Universe](http://www.smithsonianmag.com/science-nature/former-grateful-dead-drummer-mickey-hart-composes-music-from-the-sounds-of-the-universe-265907/?no-ist)

[Alexander Chen - Musical Subway Lines](http://www.fastcodesign.com/1663129/mtame-google-engineer-turns-subway-lines-into-musical-instruments)

[Fractions of a Second, Data Sonification - NYT](http://www.nytimes.com/interactive/2010/02/26/sports/olympics/20100226-olysymphony.html?_r=2&)

[Sounds of Empathy - Xavier Watkins](http://www.ebi.ac.uk/~xwatkins/genome-synth/)

[Solarbeat - Luke Twyman](http://www.whitevinyldesign.com/solarbeat/)

## REFACTORING

Refactoring is the process of making your projects more readable and understandable. Often in the hurry of building something, we neglect to name our variables well or we write something out 

### Componentization

Turn some large monolithic method into multiple smaller functions. 

### Encapsulation

Hide irrelevant or private details from the end-user. Don't bog them down with the implementation details of your code. Try to encapsulate all of that with private methods or 

### Extract Class

Encapsulate some of your functionality which is maybe floating around as multiple arrays or global variables into a class object which can maintain all of the state for itself. 

### Testing

It's important to know that you didn't break your code while trying to improve it. 

#### Smoke test

This is the most common type of testing. The type of testing that you're probably already doing of your software. The gist of it in javascript is simply making a webpage or multiple web pages and seeing if it sounds or looks the way you would expect. There is no rigorous nature to it, but it is a good sanity check when you're developing or making changes to your code. 

#### Unit testing

If you're building a large application, it can be useful to make a bunch of small tests which validate individual units of your software. Unit test typically get run in series and are automated or run in "headless browsers". Popular Unit testing frameworks in Javascript are [QUnit](http://qunitjs.com/) and [Mocha](http://mochajs.org/).

## DOCUMENTATION

Please revisit some of the notes from [week3](../week3/) about JSDocs. The most important parts are not the types and knowing all of the `@` tags, but describing in understandable terms what each portion of your software does. Write out what sort of input your expect with your functions and the output that those functions will return. Give a quick example of how you might use it if possible. 

Remember: Software is made by and for people, not computers.

## EXTENSIBILITY

The idea of extensibility is that you take into account future use and growth while developing your software. An example of this would be making software which is more general purpose or can serve multiple functions. 

Extensibility is a double edged sword. On the one hand, it can help you create more reusable code, on the other hand, I've seen a lot of people fall down the well of over engineering the problem. Maybe you can make it more generalized and extensible, but how general and future-oriented do you need it to be?

## ASSIGNMENT

Package up some class/feature from your midterm with documentation and at least one example of how to use it. We are creating a library of sonic objects from people's assignments which can be used, combined and remixed for the final assignment. 

Package up as much or as little as you want. This could be as little as a single function, or simple combination of features pillaged from online tutorials or a Function Object class, or some combination. Try to put yourself in someone elses shoes. Is it clear what it does? How do you use it? What can you do with it?

