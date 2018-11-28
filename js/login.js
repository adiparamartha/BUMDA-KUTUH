document.getElementById("warningid").style.display="none";

//Rules for User

firebase.auth().onAuthStateChanged(function(user) {
// User is signed in.

if (user !== null) {
    user.providerData.forEach(function (profile) {
    var signup_name = profile.displayName;
    var signup_email = profile.email;
    var signup_url = profile.photoURL;

    var userId = firebase.auth().currentUser.uid;
    var emailId = firebase.auth().currentUser.email;

    var database = firebase.database();
    var ref = database.ref('DatabaseUser/'+userId).orderByChild('email').equalTo(signup_email);
    ref.once('value', snapshot => {
      //Check User ?
     if (snapshot.exists()) {
       var name = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       window.location='index.html';
   }
   else{
       //Database write
          var usernameRef = database.ref('DatabaseUser/'+ userId);
          var result = usernameRef.push({
            name:signup_name,
            email:signup_email,
            img_url:signup_url

    });
            window.location='index.html'

   }
 }
)
})
}

 else {
    // No user is signed in.

  }
});

//Sign_In

const login_form_name = document.getElementById('login_form_name');
const login_form_password = document.getElementById('login_form_password');

function sign_in(){
      const sign_in_email = login_form_name.value;
      const sign_in_pass = login_form_password.value;
      const sign_in_auth = firebase.auth();

      const promise = sign_in_auth.signInWithEmailAndPassword(sign_in_email,sign_in_pass);
      promise.catch(e => {
      var errorMessage = e.message;

      document.getElementById("warningid").style.display="block";

      if(errorMessage=="The password is invalid or the user does not have a password."){
        document.getElementById("warningid").innerHTML="Please Make Sure you entering Correct Password. <br> If you never login using this method before. <br> Please Reset the Password or Login with another method. ";
      }
      else{
        document.getElementById("warningid").innerHTML=errorMessage;
      }

    })
    return false;
}
