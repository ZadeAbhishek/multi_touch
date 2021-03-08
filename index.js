window.onload = function(){
var nodeList = document.getElementsByClassName('draggable');
 
  for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    //so Know came to know about multi touch sice i here  represent the finger and below 
    obj.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
      
      // Place element where the finger is
      event.target.style.left = touch.pageX + 'px';
      event.target.style.top = touch.pageY + 'px';
      event.preventDefault();
    }, false);
  }
}