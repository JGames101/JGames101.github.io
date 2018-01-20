var player = document.querySelector('#player');
var left = 16;
var topPos = 16;
var moveL = 0;
var moveT = 0;
var map = {};

onkeydown = onkeyup = function(e){
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
    if (map[68] == true) {
        moveL += 2;
    };
    if (map[65] == true) {
        moveL -= 2;
    };
    if (map[83] == true) {
        moveT += 2;
    };
    if (map[87] == true) {
        moveT -= 2;
    };
}

window.setInterval(function(){
    moveL = moveL / 1.25;
    left += moveL;
    player.style.left = left + 'px';
    moveT = moveT / 1.25;
    topPos += moveT;
    player.style.top = topPos + 'px';
}, 33);