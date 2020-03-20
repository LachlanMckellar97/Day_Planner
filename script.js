//. Todays date .//
$("#Todaysdate").text(moment().format('dddd') + " " + (moment().format("MMM Do YYYY")));

//. Todays time .//
var timeofday = moment().format('LT');
var AMPM = timeofday.includes("PM") ==! timeofday.includes("12:");
var time = parseInt(+timeofday.charAt(0) + timeofday.charAt(1));
if(AMPM === true) {
    amorpm();
}

function amorpm() {
    time = time + 12;
}



console.log(AMPM)
console.log(timeofday);
console.log(time);