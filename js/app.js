//console.log("Works");
const stopwatch = document.querySelector('#stopwatch');
console.log(stopwatch);
var totalTime = 2;
var timerCountdown;
var active = false;
var time = 5;
continueTimer = false;
function countdown() {
	if (time===0) {
		clearInterval(timerCountdown);
		stopwatch.innerHTML="FINISHED";
		console.log("Time's up!");
		active = false;
		continueTimer = true;
	}
	else {
		stopwatch.innerHTML=time;
		console.log(time--);
	}
}
console.log("starting");

