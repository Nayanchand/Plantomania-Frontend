let crc = document.querySelector('#cursor');
function cursor(){
    document.addEventListener("mousemove", function(dets){
        crc.style.left = dets.x+"px";
        crc.style.top = dets.y+"px";
    });
}
cursor();
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"80px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top - 11%",
        scrub: 2
    }
});
gsap.to("#links .l",{
    color: "#fff"
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

let cbtn = document.querySelector('#cbtn');

cbtn.addEventListener("click", function(){
    alert("hey you can contact me on my email provided down below");
});