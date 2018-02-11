window.onload = function() {
    var randomBox1 = document.getElementById('eventBox1');
    var randomBox2 = document.getElementById('eventBox2');
    
    randomBox2.onmouseover = function() {
        alert("You hovered over the red box!");
    }
    
    randomBox1.onclick = function(e) {
        console.log(e)
        alert('X = ' + e.clientX + ' and Y = '+ e.clientY);
    }
    
    window.onkeypress = function() {
        alert('You pressed a key!')
    }
    
    // bonus challenge
    window.ondblclick = function(e) {
        console.log(e);
        alert('e.type = ' + e.type);
        alert('e.clientX = ' + e.clientX + ' and e.clientY = '+ e.clientY);
        alert('e.layerX = '  + e.layerX +  ' and e.layerY = '+ e.layerY);        
        alert('e.pageX = '   + e.pageX + ' and e.pageY = '+ e.pageY);
        alert('e.x = ' + e.x + ' and e.y = '+ e.y);  
    }
};

