const currentDate = document.querySelector(".currentDate");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const aryMonth = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

const loadCalendar = function()  
{
    let lastDateOfMonth = new Date(currentYear, currentMonth, 0).getDate();
    console.log(lastDateOfMonth);
    (<HTMLElement>currentDate).innerText = aryMonth[currentMonth]+" "+(currentYear);
}

loadCalendar();
