const tagCurrentDate = document.querySelector(".currentDate");
const tagDayList = document.querySelector(".days");
const tagControlIcon = document.querySelectorAll(".icon span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const aryMonth = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

const loadCalendar = function()  
{
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    //console.log(firstDayOfMonth);

    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    //console.log(lastDateOfMonth);

    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    //console.log(lastDayOfMonth);

    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    //console.log(lastDateOfLastMonth);

    let dayTags = "";

    for (let index = firstDayOfMonth; index > 0; index--) 
    {
        dayTags += '<li class = "inactive">'+ (lastDateOfLastMonth - index + 1) + '</li>';
    }

    for (let index = 1; index <= lastDateOfMonth; index++) 
    {
        let activeDay = index === date.getDate() && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear() ? "active" : "";
        dayTags += '<li id ='+("button")+' class ='+(activeDay)+'>'+ index + '</li>';
    }

    for (let index = lastDayOfMonth; index < 6; index++) 
    {
        dayTags += '<li class = "inactive">'+ (index - lastDayOfMonth + 1) + '</li>';
    }

    (<HTMLElement>tagCurrentDate).innerText = aryMonth[currentMonth]+" "+(currentYear);
    tagDayList.innerHTML = dayTags;
}

loadCalendar();

tagControlIcon.forEach(element => 
{
    element.addEventListener("click", function()
    {
        currentMonth = element.id === "btnPrev" ? currentMonth - 1 : currentMonth + 1; 

        if(currentMonth < 0 || currentMonth > 11)
        {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }
        else
        {
            date = new Date();
        }

        loadCalendar();
    });    
});

const tagDays = document.querySelectorAll("#button, #active");

tagDays.forEach(element =>
{
    element.addEventListener("click", function()
    {
        tagDays.forEach(element => 
        {
            element.id = "button";    
        });
        
        console.log(element.textContent);
        element.id = "active"
    });
});

