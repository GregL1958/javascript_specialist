window.onload = function() {
    document.getElementById('httpButton').addEventListener('click', renderText);            
}
    
function renderText(e) {
    var xhttp = new XMLHttpRequest();
    
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };

    xhttp.open("GET", "text.txt", true);
    xhttp.send();
}
    