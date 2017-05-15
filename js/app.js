//console.log("Works");
const stopwatch = document.querySelector('#stopwatch');
console.log(stopwatch);
var time = 5;
var rest = false;
var masterTime=2;
function countdown() {
	stopwatch.innerHTML = time;
	if (time===0){
		if (rest) {
			masterTime--;
			console.log("starting workout: "+masterTime);
			rest = !rest;
			time = 5;
		} else {
			console.log ("Rest Period");
			rest = !rest;
			time = 3;
		}
	} else {
		time--;
	}
	if (masterTime===0) {
		clearInterval(timerCountdown);
		stopwatch.innerHTML="FINISHED";
		console.log("Time's up!");
	}
}
console.log("starting workout: "+masterTime);
var timerCountdown = setInterval(countdown, 1000);

