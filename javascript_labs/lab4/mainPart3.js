window.onload = function() {
    document.getElementById("findNameBtn").addEventListener('click', lookForName); 
    document.getElementById('tryAgain').addEventListener('click', reload);
}

function lookForName(e) {
    var timesFound = [];
    var text = document.getElementById("inputNameBox").value;
    var myName=document.getElementById("userName").value;
    var i = 0;
    var j = 0;
    
    document.getElementById("demo1").innerHTML = "input text =" + text;  

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
   
   //     
   validateTimesFound(timesFound,myName); 
    
} // end of lookForName()

function validateTimesFound(timesFound,myName) {
    /*
        Need to take the timesFound array
    */
    var cleanTimesFound = [];
    var myNameToUpperCase = myName.toUpperCase();
    var testString = "";
    var testArray = [];
    var testArrayToUpper = [];
    var namesMatch = false;
    var timesMatch = 0;
    var j = 0;
    var i = 0;
    var index = 0;

    // timesFound  contains myName or other words that start with myName[0] and is the same length
    // get the timesFound[j] word and assign it to testString
    while (  i < timesFound.length ) {
        //set j to i to be at the start of each word in timesFound array
        j = i;
        while (j < (myName.length + i)) {
             testString += timesFound[j];
            j ++;
        } // end while j < (myName.length + i

        //get the upperCase value of testString
        testArrayToUpper = testString.toUpperCase();
        namesMatch = testArrayToUpper.includes(myNameToUpperCase);
        if ( namesMatch === true) {
            // increase counter timesmatch by 1
            timesMatch ++;
            //turn testString to an array
            testArray = testString.split(",");
            
            //add myNaame that is in testArray to the cleanTimesFound array
            for(var index =0; index < (myName.length); index ++ ) {
                cleanTimesFound.push(testArray[index]);
           }//end for index < myName.length
            
        }// end if namesMatch === true
        
        // set the test var's back to empty
        testArray = [];
        testArrayToUpper = [];
        testString = "";  
        
        // increase i by myName.length to get to the next word in timesFound array
        i = i + myName.length;
        
    } // end  while  i < timesFound.length 
    
    //output msg to web page
    if (cleanTimesFound.length == 0) {
        document.getElementById("demo2").innerHTML ="Your name was not found!";
    }else {
        document.getElementById("demo2").innerHTML = "Number of times your name was found " + timesMatch +"!! " + " And you entered you name this way " + cleanTimesFound;
    } 
}

function reload(e) {
    location.reload();
}