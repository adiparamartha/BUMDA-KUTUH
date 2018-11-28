const signup_form_email = document.getElementById('signup_form_email');
const signup_form_password = document.getElementById('signup_form_password');
const signup_form_password_confirm = document.getElementById('signup_form_password_confirm');
const signup_form_phone = document.getElementById('signup_form_phone');
const signup_form_name = document.getElementById("signup_form_name");

document.getElementById("submit_status").style.display="none"
document.getElementById("captcha_alert").style.display="none";
//Rules for User

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    const signup_email = signup_form_email.value;
    const signup_password = signup_form_password.value;
    const signup_name = signup_form_name.value;
    const signup_phone = signup_form_phone.value;

    var userId = firebase.auth().currentUser.uid;
    var initprofile = "https://firebasestorage.googleapis.com/v0/b/loginwebapps.appspot.com/o/WebsiteImage%2Finitprofile.png?alt=media&token=0b6b4074-fb78-4a33-bf8c-b93a76e6a2cf"

    //Database write
          var database = firebase.database();
          var usernameRef = database.ref('DatabaseUser/'+ userId);
          var result = usernameRef.push({
            name:signup_name,
            email:signup_email,
            phone:signup_phone,
            img_url:initprofile

          });

          verifyemail();
          alert("Email for Confirmation sent to : " + signup_email)

          document.getElementById("submit_status").innerHTML ="SignUp Success, Please Login to Continue";
          document.getElementById("submit_status").style.display="block";
          
          $('#contact_form')[0].reset();
          $('html, body').animate({ scrollTop: 0 }, 'fast');

}

 else {
    // No user is signed in.
  }
});


//Sign_Up
function sign_up(){

      if(signup_form_email.value != "" && signup_form_password.value != "" && signup_form_phone.value != "" && signup_form_name.value !="" && signup_form_password_confirm !=""){
          
          console.log(signup_form_password.value)
          console.log(signup_form_password_confirm.value)
              
              var captcha_result = document.getElementById("captcha_check").value;
        
              var response = grecaptcha.getResponse();
        
              if(response.length == 0){
                  //reCaptcha not verified
                  document.getElementById("captcha_alert").style.display="block";
                }
        
              else {
                  if(signup_form_password.value==signup_form_password_confirm.value){
                      
                  //reCaptch verified
                  document.getElementById("captcha_alert").style.display="none";
        
                  const signup_email = signup_form_email.value;
                  const signup_password = signup_form_password.value;
        
                  const signup_auth = firebase.auth();
                  const promise = signup_auth.createUserWithEmailAndPassword(signup_email,signup_password);
                  promise.catch(e => console.log(e.message));
                }
                 else{
                    alert("Password Input Not Match, Please Check Your Password");
                  }
              }
      }
      else{
        alert("Please Complete the Form");
      }
      return false;
}

function verifyemail(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
  // Email sent.
  }).catch(function(error) {
  // An error happened.
  });
}
