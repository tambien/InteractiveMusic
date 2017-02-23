---
title : Developer Tools
layout: default
---

In Chrome, type `option + command + i`. practice it. get used to it. use it often. 

## `console`

inspecting variables from the console. type in anything that's in the current scope and you can see / change it's value. 

### logging

watch out! this is where pointers can bite you. Objects are logged "live" in that they point to the original object, so if you didn't inspect the values further, you could be looking at the wrong data. 

## properties

Properties are listed with a little drop down arrow. 

![properties]({{site.baseurl}}/images/properties.png)

Properties that have a `(...)` need to be clicked on to be evaluated before they are displayed.

## methods

Methods (functions that belong to an instance or object) are either listed as a property with parens after them `()` or listed under a property called `__proto__`. (More on why later)

## debugger

## Breakpoints

step over, step in, step out. 

### `debugger` keyword

put `debugger` anywhere in your script and when that line is executed and the console is open, 

## Activity

Open up the console and try to answer all of the questions in the source code

[Activity: debugging]({{site.baseurl}}/activity/debugging.html)