 "use strict";
var angle = 0;
function klikken() {
    var spin = document.getElementById("pg");
    angle+=90;
    spin.style.transform = "rotate("+angle+"deg)";
        console.log(angle);
if (angle < 360){
    spin.style.transform = "rotate("+angle+"deg)";
} 
else if (angle ===360){
    angle = 0;
}    
}
function rightway() {

    if (angle == 90){
        alert("That's not the right way!");
    }
    else if (angle == 180){
        alert("That's not the right way!");
    }
    else if (angle == 270){
        alert("That's not the right way!");
    }
    else {
        alert("That's the right way!");
    }
}

 var imgs = ["http://i60.tinypic.com/14vo280.jpg","https://i1.sndcdn.com/artworks-000090505806-np23ap-t500x500.jpg","http://s2.evcdn.com/images/edpborder500/I0-001/004/351/181-2.jpeg_/kerri-chandler-81.jpeg", "http://data.whicdn.com/images/134681852/superthumb.jpg", "http://ih1.redbubble.net/image.29011331.8844/fc,550x550,white.u2.jpg",];
    var i = 0;
    function nieuwe() {
    document.getElementById('pg').src=imgs[++i];
    console.log(i);
    if (i==5) {
i=-1;
}
if (!imgs[i+1]) {
    i = -1;
}
}
    
