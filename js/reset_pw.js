
//Rules for User

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";
    window.location='index.html';
}

 else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

  }
});

//Sign_In

const resetpw = document.getElementById('resetpw_form_name');

  function reset_password(){

    const emailAddress = resetpw.value;
    const auth = firebase.auth();

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert("Email Confirmation Send");
    }).catch(function(error) {
      // An error happened.
  });
}
