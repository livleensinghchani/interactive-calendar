var tagCurrentDate = document.querySelector(".currentDate");
var tagDayList = document.querySelector(".days");
var tagControlIcon = document.querySelectorAll(".icon span");
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();
var aryMonth = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var DayList = function () {
    var tagDays = document.querySelectorAll("#button, #active");
    tagDays.forEach(function (element) {
        element.addEventListener("click", function () {
            tagDays.forEach(function (element) {
                element.id = "button";
            });
            console.log(element.textContent);
            element.id = "active";
        });
    });
};
var LoadCalendar = function () {
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    //console.log(firstDayOfMonth);
    var lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    //console.log(lastDateOfMonth);
    var lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    //console.log(lastDayOfMonth);
    var lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    //console.log(lastDateOfLastMonth);
    var dayTags = "";
    for (var index = firstDayOfMonth; index > 0; index--) {
        dayTags += '<li class = "inactive">' + (lastDateOfLastMonth - index + 1) + '</li>';
    }
    for (var index = 1; index <= lastDateOfMonth; index++) {
        var activeDay = index === date.getDate() && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear() ? "active" : "";
        dayTags += '<li id =' + ("button") + ' class =' + (activeDay) + '>' + index + '</li>';
    }
    for (var index = lastDayOfMonth; index < 6; index++) {
        dayTags += '<li class = "inactive">' + (index - lastDayOfMonth + 1) + '</li>';
    }
    tagCurrentDate.innerText = aryMonth[currentMonth] + " " + (currentYear);
    tagDayList.innerHTML = dayTags;
    DayList();
};
LoadCalendar();
tagControlIcon.forEach(function (element) {
    element.addEventListener("click", function () {
        currentMonth = element.id === "btnPrev" ? currentMonth - 1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }
        else {
            date = new Date();
        }
        LoadCalendar();
    });
});
