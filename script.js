const img=document.querySelector(".image")
const number=document.querySelector(".number")

/*	/////   -----   Code explanation  --------   ////////
	initialize load
	make a function that increments the load by one every 30ms until it gets 100
	show the number of load in the web page
	as load increases from 1 to 100, decrease the opacity of the number from 1 to 0. Make it slowly to invisible
	as load increases from 1 to 100, decrease the blur style of the image from 30 to 0. Make the image cleaner  */

let load=0
//creating a timer for blurring function//
let int=setInterval(blurring,30)

function blurring(){
	load++
	if (load==100){
		//stop the timer//
		clearInterval(int)
	}
	//  put the value of load to the number of the web page //
	number.innerText=`${load}%`
	//  make the number gradually invisible  // 
	number.style.opacity=scale(load,0,100,1,0)
	//   make the image less blur  // 
	img.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}
	
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//    stack overflow map a range of numbers to another  //
	const scale=(number, inMin, inMax, outMin, outMax)  =>
{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
