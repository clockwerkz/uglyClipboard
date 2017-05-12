//console.log("Works");
var time = 5;
function countdown() {
	if (time===0) {
		clearInterval(timerCountdown);
		console.log("Time's up!");
	}
	else {
		console.log(time--);
	}
}

var timerCountdown = setInterval(countdown, 1000);