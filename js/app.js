//console.log("Works");
var stopwatch = document.getElementById('stopwatch');
var workoutName = document.getElementById('workoutName');

var lowBeep = document.getElementById('lowBeep');
var highBeep = document.getElementById('highBeep');
console.log(stopwatch);
repTime = 15;
restTime = 5;
var time = repTime;
var rest = false;
var isDone = false;
var workouts = ["Jumping Jacks", "Push Ups", "Bear Crawls"]
var masterTime=workouts.length;
function countdown() {
	stopwatch.innerHTML = time--;
	if (time === 0) {
		clearInterval(timerCountdown);
	}
}
	/*
	stopwatch.innerHTML = (time===0) ? "Finished!" : time;
	if (time===2 || time===1) {
		lowBeep.play();
	}
	
	if (time===0 && !isDone){
		highBeep.play();
		if (rest && !isDone) {
			masterTime--;
			workoutName.innerHTML = workouts[workouts.length-masterTime];
			rest = !rest;
			time = repTime;
		} else {
			workoutName.innerHTML = "Rest Break";
			rest = !rest;
			time = restTime;
		}
	} else {
		time--;
	}
	if (masterTime===0) {
		isDone = true;
		clearInterval(timerCountdown);
		stopwatch.innerHTML="FINISHED";
	}
	
}
workoutName.innerHTML = workouts[workouts.length-masterTime];
*/
var timerCountdown = setInterval(countdown, 500);

