//console.log("Works");
const stopwatch = document.querySelector('#stopwatch');
const workoutName = document.querySelector('#workoutName');
const lowBeep = document.querySelector('#lowBeep');
const highBeep = document.querySelector('#highBeep');
console.log(stopwatch);
repTime = 15;
restTime = 5;
var time = repTime;
var rest = false;
var isDone = false;
const workouts = ["Jumping Jacks", "Push Ups", "Bear Crawls"]
var masterTime=workouts.length;
function countdown() {
	stopwatch.innerHTML = time;
	if (time===2 || time===1) {
		lowBeep.play();
	}
	if (time===0 && !isDone){
		highBeep.play();
		if (rest && !isDone) {
			masterTime--;
			workoutName.innerHTML = workouts[workouts.length-masterTime];
			console.log("starting workout: "+masterTime);
			rest = !rest;
			time = repTime;
		} else {
			workoutName.innerHTML = "Rest Break";
			console.log ("Rest Period");
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
		console.log("Time's up!");
	}
}
console.log("starting workout: "+masterTime);
workoutName.innerHTML = workouts[workouts.length-masterTime];
var timerCountdown = setInterval(countdown, 1000);

