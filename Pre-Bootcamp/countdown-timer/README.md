# Countdown Timer

The goal of this project is to create a countdown timer that shows you how much time is left on each task. This timer is inspired by the Pomodoro Technique which is a time management method that uses a timer to break down work into intervals, traditional 25 minutes in length separated by short breaks. The focus button lets you focus exactly for 25 minutes. There is also one button with a short break of 5 minutes and a long break of 10 minutes. I added my own additions to this timer for example if instead you want to take a short break of 3 minutes to do a meditation session or do a mini deep breathing exercise for 1 minute. And of course if you want to take a break to fill your tummy with something yummy, there's an option for that too.


# Objective

- Create a function called Timer and work in the console to start

- Display the amount of time left by setting an interval and calculating how many seconds are left using the function Math.round

<center>setInterval(()=>{
<br>const secondsLeft = Math.round((then - Date.now())/1000));
<br>},1000);<br></center>

- Stop running the interval by assigning setInterval to a variable and call clearInterval();

- Convert and display the time left to minutes and seconds

- Display the end time

- Set each button with a data-time attribute with the number of seconds we wish to run on it

# Improvements

- There is no way for the timers to cancel themselves out unless seconds equals zero. The solution to this problem is when we start our time, we must clear any existing timers present with the following function:

function timer(seconds){
<br>//clear any existing timers
<br>clearInterval(countdown);


![gif](countdown-timer.gif)
