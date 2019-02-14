"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Connor J Webdale 
   Date: 2.14.19 

   Filename:   ph_clock.js     

*/
// Creates a globa variable named minsLeft with an initial value of 0. 
var minsLeft = 0;

// Creates a global variable named secsLeft, with an initial value of 15. 
var secsLeft = 5;

// Declares a global variable named timeLeft. Sets the inital value of the variable equal to the number of minutes left multiplied by 60 plus the number of seconds left. 
var timeLeft = ((minsLeft * 60) + secsLeft);

// Inserted a command to run the countdown() function every second. 
var clockID = countdown();
setInterval("countdown()", 1000);

// Creates the countDown function to update the time left every second. 
function countdown() {
    // Assigns a new value to the minsLeft variable by dividing the timeLeft variable by 60 and using the Math.floor() method to round that down to the next lowest integer. 
    minsLeft = Math.floor(timeLeft / 60);

    // Calculates a new value for the secsLeft variable equal to the value of the timeLeft variable minus 60 times the minsLeft variable. 
    secsLeft = timeLeft - (60 * (minsLeft));

    // Creates a new variable named minsString and sets it equal to the value returned by the addLeadingZero function using minsLeft as the parameter value. 
    var minsString = addLeadingZero(minsLeft);

    // Calls the addLeadingZero() function again using secsLeft as the parameter value and stores the result in the secsString variable. 
    var secsString = addLeadingZero(secsLeft);

    // Within the element with the ID minutes, changes the text content to the value of the minsString variable. 
    document.getElementById("minutes").innerHTML = minsString;

    // Withing the element with the ID seconds, changes the text content to the value of the secsString variable. 
    document.getElementById("seconds").innerHTML = secsString;

    // Calls the checkTime() function. 
    checkTimer();

    // Uses the decrement operator to decrese the value of the timeLeft variable by 1. 
    timeLeft--;
}

// Creates a function called stopClock() with the purpose of stopping the clock once the time to submit the order has run out, and to notify the user that the time has expired. 
function stopClock() {
    // Displays HTML code directly before the end of the page element with the ID TimeHead. 
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br />(Order Expired)");

    // Uses the clearInterval() method to clear the timed command stored in the clockID and stop it from continuting to run. 
    clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}