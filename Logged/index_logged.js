//Rules for User

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if(user!=null){

      var email_id = user.email;

      document.getElementById("user_email_details"). innerHTML = email_id;
    }
}
})  ;

function logout(){
firebase.auth().signOut();
}
