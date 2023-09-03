var currentDate = document.querySelector(".currentDate");
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();
var aryMonth = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var loadCalendar = function () {
    currentDate.innerText = aryMonth[currentMonth] + " " + (currentYear);
};
loadCalendar();
