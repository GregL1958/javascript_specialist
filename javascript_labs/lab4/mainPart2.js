window.onload = function() {
    document.getElementById("findNameBtn").addEventListener('click', lookForName); 
}

function lookForName(e) {
    var myName="Greg";
    var timesFound = [];
    var text = document.getElementById("inputNameBox").value;
    var i = 0;
    var j = 0;

    while (i < text.length) {
        if (text[i] === "G") {
            j = i

            while (j < (myName.length + i)) {
                 timesFound.push(text[j]);
                 j++;
            }//end for j < myName.length  
            
        } // end if text[i] === "G"
     i ++;   
    }// end while i < text.length
   
    
    if (timesFound.length == 0) {
        alert("Your name was not found!");
    }else {
        alert(timesFound);
    }
    
} // end of lookForName()

