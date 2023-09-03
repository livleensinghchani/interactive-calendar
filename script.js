var currentDate = document.querySelector(".currentDate");
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();
var aryMonth = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var loadCalendar = function () {
    var lastDateOfMonth = new Date(currentYear, currentMonth, 0).getDate();
    console.log(lastDateOfMonth);
    currentDate.innerText = aryMonth[currentMonth] + " " + (currentYear);
};
loadCalendar();
