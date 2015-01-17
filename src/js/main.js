

  ws = new WebSocket('ws://35.2.71.254:6450');
  ws.onmessage = function(e) {
    document.body.innerHTML = JSON.stringify(e);
 };


//function doMove() {
//foo.style.left = (foo.style.left+10)+'px'; // pseudo-property code: Move right by 10px
//}
//doMove();
//document.getElementById("demo").innerHTML = "What's up!!";
