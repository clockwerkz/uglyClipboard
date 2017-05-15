# uglyClipboard
A timer designed for custom workouts

[update 05/14/2017]
I had quite a few commits tonight because I was trying to troubleshoot why the code for my timer was not working on my iPad. First I thought it was setInterval, so I did some digging around, googling stuff. I then made a simplified version of my setInterval function and tried that. Turns out it wasn't setInterval that was the problem (By the way, it would be nice to figure out if Safari has a debugging/developer mode like Chrome has. I would have figured out the problem a lot sooner). The problem was I was using const to declare the variables that point to the dom elements, and ios didn't like that for some reason. So I changed the declarations to var and now it works. If I had a way to push the site to my iPad directly instead of committing to github to see the changes, I would have. 
[Things to figure out]
Why const didn't work properly on my iPad (ios)
Is there a developer/debugging mode in Safari, or even the ios version of Chrome?
Cleaner way to test html pages on ios devices vs. pushing constantly up to github pages and then refreshing the page on ios.

My wife and I love using a 7 minute workout app. It has a series of pre determined workouts you can select from, or create a custom workout.
The app then runs through the workouts, giving you 45 seconds to do the exercise with a 10 second break period. Unfortunately, we are limited
to the workouts on the app. So what I'm making is a basic timer. It'll allow one to select from 30 sec, 45 sec, or 1 min intervals, and then 
set the rest time in between exercies. I also would like to add the option to enter in the workouts so while the exercise timer is active,
it displays what the current exercise is. Another feature I'd like to add is sound cues, as well as a timer cue.
