window.onload=function() {
    document.getElementById('btnCalc').addEventListener('click', subtractNums); 
 
}

function subtractNums(e) {
    var firstNum = parseInt(document.getElementById('num1').value);
    var secondNum = parseInt(document.getElementById('num2').value);
    
    // this examble of function getting num and doing subtraction
    var remainder = firstNum - secondNum;
    
    //this is example of calling function with parm
    subtractNums2(firstNum,secondNum);
   
 
   document.getElementById("result").innerHTML = firstNum + " - " + secondNum + " = " + remainder;   
 }//end of subtractNums()


function subtractNums2(num1,num2) {
    var remainder = num1 -num2;
    console.log( num1 + " - " + num2 + " = " + remainder);
}


