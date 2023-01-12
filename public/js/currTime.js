const today_date = document.getElementById("today_date");
const today_day = document.getElementById("day");
const time = document.getElementById("timing");

function mnth() {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}

function day1() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
}

function updateTime(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thusday", "Friday", "Saturday"];

    // ----------adding midea query through java script------------
    if(window.matchMedia("(max-width: 350px)").matches){
        months = mnth();
        days = day1();
    }
    // ------------------------------------------------------------
    const today = new Date();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
    let date = today.getDate();
    let hr = today.getHours();
    let min = today.getMinutes();
    let period = "AM";
    if(min<10)  min = '0'+min;
    if(hr<12) period = "AM";
    else{
        period = "PM";
        if(hr>12) hr-=12;
    }
    if(hr<10) hr = '0'+hr;
    if(date<10) date = '0'+date;
    let modification1 = `${date} ${month}`;
    let modification2 = `${day}`;
    let modification3 = `${hr} : ${min} ${period}`;
    today_date.innerHTML = modification1;
    today_day.innerHTML = modification2;
    time.innerHTML = modification3;
}

//for making our time is up to date everytime without refreshing the content
window.setInterval("updateTime()", 1);  