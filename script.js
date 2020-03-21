//. Todays date .//
function updateday() {
    $("#Todaysdate").text(moment().format('dddd') + " " + (moment().format("MMM Do YYYY")));
}
    setInterval(updateday, 1000);
function updatetime() {
    $("#currenttime").html(moment().format('LT'));
}
    setInterval(updatetime, 1000);

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

var hour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

function checktime() {
    for(i = 0; i < hour.length; i++) {
        var hours = $("#" + hour[i]).attr("data");
        if(hours < time){
            $("#" + hour[i]).addClass("over");
        }
        if(hours == time){
            $("#" + hour[i]).addClass("present");
        } 
    }
}

$(".btn").on("click", function() {
    $(".Hours").each(function(index) {
        var timetag = this.id;
        var content = ($(this).val());
        localStorage.setItem(timetag, content);
        location.reload();
    })
})

function checksave() {
    $(".Hours").each(function(index) {
        var key = this.id;
        var result  = localStorage.getItem(key)
        $("#" + key).text(result)
    })
}

$("#resetbtn").on("click", function(){
    localStorage.clear();
    location.reload();
})

checksave()
checktime()