const tagCurrentDate = document.querySelector(".currentDate");
let tagDayList = document.querySelector(".days");
let btnControlIcon = document.querySelectorAll(".icon span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const aryMonth = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

const loadCalendar = function()  
{
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let tempDayNumber = "";

    for (let index = 1; index <= lastDateOfMonth; index++) 
    {
        tagDayList.innerHTML += "<li>"+ index + "</li>";
    }

    (<HTMLElement>tagCurrentDate).innerText = aryMonth[currentMonth]+" "+(currentYear);
}

loadCalendar();

btnControlIcon.forEach(element => 
{
    element.addEventListener("click", () =>
    {
        console.log(element);
    });    
});
