window.onload=function() {  
    document.getElementById("findMostfrequentBtn").addEventListener('click',findMostFrequent); 
    document.getElementById('tryAgain').addEventListener('click', reload); 
}

function findMostFrequent() {
    var text = document.getElementById("inputNameBox").value; 
    //turn text to an array
    var arr = text.split(" ");
    var i = 0;
    var startIndex = 0;
    var finishIndex = 0;
    var mostFrequent = 1;
    var timesFound = 1;
    var searchItem;
    var Item;
    var mostFrequentArray = [];
    var nElements = [];
    document.getElementById("demo1").innerHTML = "Input text = " + arr;
    
    nElements = returnFirstNelements(arr); 
    if (nElements.length > 0) {
        document.getElementById("demo4").innerHTML =  "The first " + nElements.length + " items are " + nElements; 
    }
    
    //sort the array to get the random input items together
    arr.sort(); 
    //start at the 1st item in the array
    searchItem = arr[0];
    while(i < arr.length) {
        //get the 1st and last index of a item
        startIndex = arr.indexOf(searchItem);
        finishIndex = arr.lastIndexOf(searchItem);
        //item is only in array 1 time get the next item to search for
        if (startIndex == finishIndex ) {
            i = finishIndex + 1; //move i to the next item index
            searchItem = arr[i]; //set searchItem to next item in arra
            timesFound = 1;
            continue;
        }
        // get how many times item is in array.
        timesFound = (finishIndex - startIndex) + 1;        
        if (timesFound > mostFrequent ) {
            item = searchItem;
            mostFrequent = timesFound;
        }
        i = finishIndex + 1; //move i to the next item index
        searchItem = arr[i]; //set searchItem to next item in array
        
    }
    if (mostFrequent == timesFound) {
        if (mostFrequent == 1) {
            document.getElementById("demo2").innerHTML = "USER ERROR: All ITEMS ONLY APPEAR 1 TIME!!!"; 
        } else {
            document.getElementById("demo2").innerHTML = "USER ERROR: NO ONE ITEM APPEARS THE MOST TIMES!!!"; 
        }  
    } else {
        document.getElementById("demo2").innerHTML =  "The item " + item + " appears " + mostFrequent + " times";  
    }
    
    
}

function returnFirstNelements(arr) {
    var numElements = parseInt(document.getElementById("inputNumElements").value);
    document.getElementById("demo3").innerHTML = "You asked for " + numElements + " items";
    var returnArray = [];
    if (numElements > arr.length ) {
       document.getElementById("demo4").innerHTML = "ERROR you asked for more items then you entered!!!";
    } else {
        for (var i = 0; i < numElements; i++) {
            returnArray[i] = arr[i];
        }
    }
    return returnArray;
}

function reload(e) {
    location.reload();
}