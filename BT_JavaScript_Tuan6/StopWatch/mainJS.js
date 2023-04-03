var minute = 00;
var second = 00;
var milis = 0000;

var time_minute = document.getElementById("minute");
var time_second = document.getElementById("second");
var time_milis = document.getElementById("milis");

// button
var bt_start = document.getElementById("Start-time");
var bt_stop = document.getElementById("Stop-time");
var bt_reset= document.getElementById("res-time");

var times;



function dhTime() {
    milis +=10;
    if(milis == 1000) {
        milis = 0;
        second++;
        if(second==60) {
            second = 0;
            minute++;
        }
    }
   dkPLay();
   
}

function dkPLay() {
    if(minute <= 9) {
        time_minute.innerHTML = "0" + minute;
    } else {
        time_minute.innerHTML =  minute;
    }

    if(second <= 9) {
        time_second.innerHTML = "0" + second;
    } else {
        time_second.innerHTML =  second;

    }

    if(milis <=99) {
        time_milis.innerHTML  = "00" + milis;
    } else if(milis <1000) {
        time_milis.innerHTML = "0" + milis;
    } else if(milis == 1000){
        time_milis.innerHTML =  milis;
    }
}
 bt_start.onclick= function start_time() {
    clearInterval(times);
    times = setInterval(dhTime, 10);    
}

 bt_stop.onclick = function () {
    clearInterval(times);
}

 bt_reset.onclick = function () {
    clearInterval(times);
    time_minute.innerHTML = "00";
    time_second.innerHTML = "00";
    time_milis.innerHTML = "0000";
}