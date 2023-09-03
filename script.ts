const currentDate = document.querySelector(".currentDate");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const aryMonth = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

const loadCalendar = function()  
{
    (<HTMLElement>currentDate).innerText = aryMonth[currentMonth]+" "+(currentYear);
}

loadCalendar();
