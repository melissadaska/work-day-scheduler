let workDay = {
    "7 AM": "",
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
};

$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

var counter = 1;
for(const property in workDay) {
    var textInput = "#text-input" + counter;
    $(textInput).text(workDay[property]);
    var timeId = "#time" + counter;
    var presentHour = moment().hour();
    var timeString = $(timeId).text();
    var time = hourNumberFromHourString(timeString);  
    if(time < presentHour) {
        $(textInput).addClass("past");
    } else if (time > presentHour) {
        $(textInput).addClass("future");
    } else {
        $(textInput).addClass("present");
    }
    counter ++;
}

// call saveSchedule when button is clicked
$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();

    // call saveSchedule
});

// switch statement to convert hour string into hour number
function hourNumberFromHourString(hourString) {
    switch(hourString) {
        case "7 AM": return 7;
        case "8 AM": return 8;
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
    }
}

