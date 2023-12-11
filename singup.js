let crc = document.querySelector('#cursor');
function cursor(){
    document.addEventListener("mousemove", function(dets){
        crc.style.left = dets.x+"px";
        crc.style.top = dets.y+"px";
    });
}
cursor();

// const firebaseConfig = {
//     apiKey: "AIzaSyAdAocOjG5G9AFVNoo8ky9tGq3KMFv1VoU",
//     authDomain: "login-page-ea132.firebaseapp.com",
//     projectId: "login-page-ea132",
//     storageBucket: "login-page-ea132.appspot.com",
//     messagingSenderId: "306497617927",
//     appId: "1:306497617927:web:63070217b0a82541936aa2",
//     measurementId: "G-DQDCSNJDNZ"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   const auth = firebase.auth();
//   const database = firebase.database();

//   function register(){

//     userName = document.querySelector('#username').Value;
//     email = document.querySelector('#email').Value;
//     password = document.querySelector('#pwd').Value;

//   }

//   if(validate_email == false || validate_pwd == false || validate_user == false){
//     alert('Please fill all details')
//   }

//   auth.createUserWithEmailAndPassword(email, password)
//   .then(function(){

//     var user = auth.currentUser;

//     var database_ref = database.ref();

//     var user_data = {
//         email : email,
//         usreN : userName,
//         lastLogin : Date.now()
//     }

//     database_ref.child('users/'+ user.uid).set(user_data)

//   })
//   .catch(function(error){
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message);
//   })

//   function validate_email(email){
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email) == true){
//         return true;
//     }
//     else{
//         return false;
//     }
//   }

//   function validate_pwd(password){
//     if(password < 6){
//         return false;
//     }
//     else{
//         return true;
//     }
//   }

//   function validate_user(userName){
//     if(userName == null){
//         alert('please enter username');
//         return false;
//     }
//     else{
//         return true;
//     }
//   }