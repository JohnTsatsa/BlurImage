# Blur Image
## Description
This project has a blurred image and gradually making it clean.  
At the same time in the middle of the image there is a % counter that increases and gets transparent gradually.  
When the image is full clean the counter is invisible.

## Guidance
### HTML
Make two divs: one for the image one for the number
### CSS
Put everything in the middle  
Image needs to be as cover
### Javascript
Make a function that: 
- Increases a number until it gets 100  
- Shows the number on web page  
- Make number visible when the number is 0 and gradually make it invisble as the number gets to 100  
- Make image's blur go away as the number increses to 100  
- Execute this function every 30ms
## Techniques that used
### Javascript
```
let int=setInterval(funcName,30)

		function funcName(){
		   ----  commands  ----
		  clearInterval(int) }
```
Sets a timer for a function  
Clears timer with  ``` clearInterval(int) ```
