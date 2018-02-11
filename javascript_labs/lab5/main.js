window.onload = function() {
    document.getElementById("hoursButton").addEventListener("click", runCheckHours)
};

function runCheckHours(){
    var hoursSlept = document.getElementById("hoursInput").value;
    checkHours(hoursSlept);
    
};

function checkHours(numHours) {
    if (numHours >= 8) {
        alert("Your getting plenty of sleep!");
    } else {
        alert("Get some more sleep!");
    }
    
};