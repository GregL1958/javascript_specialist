window.onload = function() {
    document.getElementById("addingButton").addEventListener("click", addNumbers);
    document.getElementById("multiplyButton").addEventListener("click", multiplyNumbers);  
}

function addNumbers(e) { 
    var answer = 0;
    //even with getting the input's by value javascript stores the number as a string.
    //the javascript parseInt will convert the string nymber to a int. then you can do addiction.
    var input1 = parseInt(document.getElementById('inputOne').value);
    var input2 = parseInt(document.getElementById('inputTwo').value);
    answer = input1 + input2;
    // this works but it is very confusing
    //answer += + document.getElementById('inputOne').value + +  document.getElementById('inputTwo').value;
    alert(answer);  
}

function multiplyNumbers(e) { 
    var answer = 0;
    //JavaScript will try to convert strings to numbers in all numeric operations:
    answer =  document.getElementById('inputOne').value * document.getElementById('inputTwo').value;
    alert(answer);  
}