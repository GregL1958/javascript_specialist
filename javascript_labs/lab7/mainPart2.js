window.onload = function() {
        document.getElementById('confirmButton').addEventListener('click',runConfirm);
}

function runConfirm() {
    var message;
    var myConfirm = confirm("Press a button!");
    var name = prompt("What is your name")
    if ( name == null) {
        name = "unknown";
    }
    
    if (myConfirm){
        message = name + " pressed OK!"
    } else {
       message = name + " pressed Cancel!" 
    }
    
    document.getElementById('text').innerHTML = message;
    
}