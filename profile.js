let crc = document.querySelector('#cursor');
function cursor(){
    document.addEventListener("mousemove", function(dets){
        crc.style.left = dets.x+"px";
        crc.style.top = dets.y+"px";
    });
}
cursor();


const profileImage = document.getElementById("profile-image");
const imageUpload = document.getElementById("image-upload");

imageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            profileImage.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }
});
