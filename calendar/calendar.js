document.querySelector('.dark-mode-switch').onclick = () =>{
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
}
// is Leap Year 

isLeapYear = (year) =>{
    return (year % 4 == 0 && year % 100 !==0 &&  year % 400 !==0) || ( year % 100 ===0 &&  year % 400 ==0)
}

function getFebYearDays(year) {
    return isLeapYear(year) ? 29 : 28;
}

let calendar = document.querySelector('.calendar');

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let monthList = document.querySelector('.month-list');

let currDay = new Date();

let currMonth = {value: currDay.getMonth()};
let currYear = {value: currDay.getFullYear()};


monthNames.forEach((ele,index)=>{
    let month = document.createElement('div');
    month.innerHTML = `<div>${ele}</div>`;
    month.onclick = ()=> {
        monthList.classList.remove('show');
        currMonth.value = index;
        generateCalendar(currMonth.value, currYear.value)
    }
    monthList.appendChild(month);
});

// Month Picker 
let monthPicker = document.querySelector('.month-picker')

document.querySelector('#prev-year').onclick = () =>{
    currYear.value-- 
    generateCalendar(currMonth.value, currYear.value)
}
document.querySelector('#next-year').onclick = () =>{
    currYear.value++ 
    generateCalendar(currMonth.value, currYear.value)
}

monthPicker.onclick = ()=>{
    monthList.classList.add('show');
    console.log(monthPicker)
}

// Generate Calendar 
generateCalendar = (month,year) =>{
    let calendarDays = document.querySelector('.calendar-days');
    let calendarHeaderYear = document.querySelector('#year');
    calendarDays.innerHTML = '';
    let daysOfMonth = [31,getFebYearDays(),31,30,31,31,31,31,30,31,30,31]
    console.log(monthNames[month])
    monthPicker.innerHTML = monthNames[month];
    calendarHeaderYear.innerHTML = year ? year : calendarHeaderYear.value;

    let firstDay = new Date(month,year,1);
    console.log(daysOfMonth[month] + firstDay.getDay() -1)
    for(let i=0;i< daysOfMonth[month] + firstDay.getDay() -1;i++) {
        let day = document.createElement('div');
        // console.log(firstDay.getDay())
        if(i >= firstDay.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - firstDay.getDay() + 1;
        if (i - firstDay.getDay()+1 == currDay.getDate() && year == currDay.getFullYear() && month == currDay.getMonth() ) {
            // console.log("day.innerHTML",day.innerHTML)    
            day.classList.add('curr-date')
            
        }
        }
        calendarDays.appendChild(day)
    }
}


generateCalendar(currMonth.value, currYear.value);




