window.onload = function() {
        document.getElementById('confirmButton').addEventListener('click',runConfirm);
}

function runConfirm() {
    var message;
    var myConfirm = confirm("Press a button!");
    
    if (myConfirm){
        message = "You pressed OK!"
    } else {
       message = "You pressed Cancel!" 
    }
    
    document.getElementById('text').innerHTML = message;
    
}