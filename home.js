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
    height:"100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top - 11%",
        scrub: 2
    }
});

let plantInfo = document.querySelector('#plantinfo');
let arr = [
    {
        Image: "alvora.jpg",
        Name: "Aloe Vera",
        sciName: "Aloe barbadensis miller",
        dis: "Aloe vera, also known as Aloe barbadensis miller, is a succulent plant known for its numerous medicinal and cosmetic properties. Here's a brief description of Aloe vera, including its scientific name, traditional uses etc."
    },
    {
        Image: "Mayana.jpg",
        Name: "Mayana",
        sciName: "Coleus scutellarioides",
        dis: "Mayana is primarily cultivated for its ornamental value, and its potential medicinal uses have not been extensively studied. If you plan to use it for any therapeutic purpose, it's advisable to consult with a healthcare professional and rely on well-established medicinal plants with a history of safe use."
    },
    {
        Image: "oregano.jpg",
        Name: "Oregano",
        sciName: "Origanum vulgare",
        dis: "Oregano is characterized by its small, oval leaves and tiny, tubular pink or purple flowers. The leaves of the oregano plant are known for their strong, aromatic flavor and are widely used as a culinary herb."
    },
    {
        Image: "Tawa_tawa.jpg",
        Name: "Tawa Tawa",
        sciName: "Euphorbia hirta",
        dis: "Tawa Tawa, scientifically known as Euphorbia hirta, is a small, herbaceous plant belonging to the Euphorbiaceae family. It is native to tropical and subtropical regions and is commonly found in Asia, Africa, and the Americas."
    },
    {
        Image: "tulsi.jpg",
        Name: "Tulsi",
        sciName: "Ocimum sanctum",
        dis: "Tulsi is a small shrub with green or purple leaves that have a strong, pleasant aroma. There are several varieties of tulsi, including Krishna Tulsi, Rama Tulsi, and Vana Tulsi, each with distinct characteristics and flavors."
    },
    {
        Image: "hibiscus.jpg",
        Name: "Hibiscus",
        sciName: "Hibiscus rosa-sinensis",
        dis: "Hibiscus, scientifically known as Hibiscus rosa-sinensis, is a flowering plant from the family Malvaceae. It is native to tropical and subtropical regions but is cultivated worldwide for its beautiful and vibrant flowers."
    },

];
let clutter = "";
arr.forEach(function(elem){
    clutter += `<div class="plant">
    <img src="${elem.Image}" alt="">
      <h3 class="plantName">${elem.Name}</h3>
      <h3>Scientific Name:<span>${elem.sciName}</span></h3>
      <h3>Description:<span>${elem.dis}</span></h3>
  </div>`
});

plantInfo.innerHTML = clutter;
let button = document.querySelector('#bottom #button a');

//button.addEventListener("mouseenter", function(){
        
//});

