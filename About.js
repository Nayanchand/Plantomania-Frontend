let crc = document.querySelector('#cursor');


function cursor(){
    document.addEventListener("mousemove", function(dets){
        crc.style.left = dets.x+"px";
        crc.style.top = dets.y+"px";
    });
}
cursor();
