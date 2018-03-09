window.onload = function() {
    document.getElementById('checkDay').addEventListener('click', runIsWeekend);   document.getElementById('checkMonth').addEventListener('click', getDaysInMonth);            
};

function runIsWeekend() {
    var dateToCheck = document.getElementById('inputDay').value;
    isWeekend(dateToCheck);
};//end of function runIsWeekend()

function isWeekend(targetDate) {
    var d = new Date(targetDate);
    var day = "";
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day = days[d.getDay()];
    if (day === "Saturday" || day === "Sunday") {
        document.getElementById("result1").innerHTML = targetDate + "  is a "+ day + " It's a weekend!";
    } else {
        document.getElementById("result1").innerHTML = targetDate + "  is a "+ day + " Not a weekend!";
    }
    
};// end function isWeekend()


function getDaysInMonth(e) {
    var d = new Date();
    var year = d.getFullYear();
    var month = document.getElementById('inputMonth').value;
    //javascript stores month in array 0 .. 11
    // so need to subtract 1 from inpuitMonth value
    month --;
    var months = ["January","February","March","April","May","June","July","August","September",                           "October","November","December"];
    var daysInMonth = new Date(year, month, 0).getDate();
    document.getElementById("result2").innerHTML = months[month] + " has " + daysInMonth + " in it.";
}