window.onload = function() {
    document.getElementById('capitalizeBtn').addEventListener('click',capWord); 
    document.getElementById('sortStringBtn').addEventListener('click',sortString);
    document.getElementById('tryAgain').addEventListener('click',reload);
            
}

function capWord(e) {
    var strToCap = document.getElementById("inputStringBox").value;
    var numToCap = document.getElementById("inputNumCapBox").value;
    var i = 0;
    var index = 0;
    var spacePos = 0;
    var space = " ";
    var done = false;
    var gotError = false;
    var errorMsg = "";

    strToCap.trim(); //get rid or spaces befor and after string
    while(i < numToCap && !gotError) {
        if (strToCap.charAt(index) != space) {            // make sure we are on a letter  
            // word at index get set to Upper case
            strToCap = strToCap.substr(0,index) + strToCap.charAt(index).toUpperCase() + strToCap.substr(index+1);
            //we have changed the 1st letter in a word
            i ++;
            if (i == numToCap) {
                done = true; // no more words to capitalize
            } 
        } else {
           //this should not happen but.........
            gotError = true;
            errorMsg = "ERROR could not parse input string";  
            break;
        }
        // see if more words to cap
        if (i < numToCap) {
            while( !done && index < strToCap.length) {      // index check to keep from getting endless loop
                spacePos = strToCap.indexOf(space,index);
                if (spacePos != -1) {   // -1 means space not found
                    index = spacePos + 1; //need to get past space to the next word
                    if (strToCap.charAt(index) == space) {
                        continue; //have another space so keep going to on next word
                    } else {
                         break; // get out of while( !done && index < strToCap.length) on to next word
                    }
                    
                } else {
                    gotError = true;
                    errorMsg = "ERROR#1 Number of words to capitalize is greater then words in input.";  
                    break; 
                }
                
            } // end while( !done && index < strToCap.length)
            
            if (index >= strToCap.length) {
                //this should not happen but....
                gotError = true;
                errorMsg = "ERROR#2 Number of words to capitalize is greater then words in input.";  
            }
        }//if (i < numToCap)
        //done = false;
    } // end of while(i < numToCap && index < strToCap.length)
    
    
    
    if (gotError) {
       document.getElementById("demo1").innerHTML = errorMsg; 
    } else {
        document.getElementById("demo1").innerHTML = "Input text = " + strToCap;
    }
    
}// end of function capWorld()

function sortString(e) { 
    var space = " ";
    var index = 0;
    var myString = "the quick brown fox jumped over the lazy dogs";
    document.getElementById("demo2").innerHTML = "String to sort in alphabetical order  = " + myString;
    
    //have to get rid of spaces
    while(index < myString.length) {
        if (myString.charAt(index) == space) {            // make sure we are on a letter  
            // got a sspace trim it out of string
            myString = myString.substr(0,index)  + myString.substr(index+1);
            //we have changed the 1st letter in a word
            index ++;
        } else {
            index ++;
        }
    }//end of while

    // convert the string of word to an array of letters seperated by ,
    var arr = myString.split("");
    //sort the array to get the letters in alphabetical order
    arr.sort();
    document.getElementById("demo3").innerHTML = "Sorted string in alphabetical order  = " + arr;  
    
  
} //end function sortString()

function reload(e) {
    location.reload();
} // end function reload()