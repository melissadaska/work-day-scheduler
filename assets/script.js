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


