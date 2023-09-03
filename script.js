var tagCurrentDate = document.querySelector(".currentDate");
var tagDayList = document.querySelector(".days");
var btnControlIcon = document.querySelectorAll(".icon span");
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();
var aryMonth = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var loadCalendar = function () {
    var lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var tempDayNumber = "";
    for (var index = 1; index <= lastDateOfMonth; index++) {
        tagDayList.innerHTML += "<li>" + index + "</li>";
    }
    tagCurrentDate.innerText = aryMonth[currentMonth] + " " + (currentYear);
};
loadCalendar();
btnControlIcon.forEach(function (element) {
    element.addEventListener("click", function () {
        console.log(element);
    });
});
