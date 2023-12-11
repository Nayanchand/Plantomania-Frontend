let crc = document.querySelector('#cursor');
function cursor(){
    document.addEventListener("mousemove", function(dets){
        crc.style.left = dets.x+"px";
        crc.style.top = dets.y+"px";
    });
}
cursor();

const firebaseConfig = {
    apiKey: "AIzaSyAdAocOjG5G9AFVNoo8ky9tGq3KMFv1VoU",
    authDomain: "login-page-ea132.firebaseapp.com",
    projectId: "login-page-ea132",
    storageBucket: "login-page-ea132.appspot.com",
    messagingSenderId: "306497617927",
    appId: "1:306497617927:web:63070217b0a82541936aa2",
    measurementId: "G-DQDCSNJDNZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);