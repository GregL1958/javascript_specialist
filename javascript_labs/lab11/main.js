window.onload = function() {
    document.getElementById('checkForVowels').addEventListener('click', countVowels);            
}

function countVowels() {
    var sentence = document.getElementById('inputSentence').value;
    var numVowels = sentence.match(/[aeiou]/gi).length;
    document.getElementById("result1").innerHTML = "The input sentence =>" +  " " +sentence +" " + "<=  contained " + numVowels + " vowels.";
}