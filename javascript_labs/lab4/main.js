window.onload = function() {
    document.getElementById("findNameBtn").addEventListener('click', lookForName); 
}

function lookForName(e) {
    var myName="Greg";
    var timesFound = [];
    var text = document.getElementById("inputNameBox").value;

    
    for (var i = 0; i < text.length; i++) {
        if (text[i] === "G") {
            for( var j = i; j < (myName.length + i); j++) {
                 timesFound.push(text[j]);
            }//end for j < myName.length  
            
        } // end if text[i] === "G"
        
    }// end for i < text.length
   
    
    if (timesFound.length == 0) {
        alert("Your name was not found!");
    }else {
        alert(timesFound);
    }
    
} // end of lookForName()

