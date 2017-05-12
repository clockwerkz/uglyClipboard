//console.log("Works");
const stopwatch = document.querySelector('#stopwatch');
console.log(stopwatch);
var time = 5;
function countdown() {
	if (time===0) {
		clearInterval(timerCountdown);
		stopwatch.innerHTML="FINISHED";
		console.log("Time's up!");
	}
	else {
		stopwatch.innerHTML=time;
		console.log(time--);
	}
}

var timerCountdown = setInterval(countdown, 1000);