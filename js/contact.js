function initMap(){
  // The location of Uluru
  var uluru = {lat: -8.83492794, lng: 115.18080762};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: {lat: -8.480223, lng:114.8919861}});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map,icon: "images/logo.png"});

  var infoWindow = new google.maps.InfoWindow({
    content : '<div><p>GisTravel</p> <p>(0361) 777828</p></div>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map,marker);
  });
}

document.getElementById("captcha_alert").style.display="none";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    var user = firebase.auth().currentUser;

    if(user!=null){

      var email_id = user.email;
      var userId = user.uid;

      var db = firebase.database();
      var ref = db.ref('DatabaseUser/'+ userId + '/').orderByChild('email').equalTo(email_id);
      ref.on('value', snapshot => {
         if (snapshot.exists()) {
             var name = snapshot.val();
             name = Object.values(name);
             name = name[0].name;

             if (name.length>10){
	            username = name.split(' ')[0] + " " + name.split(' ')[1];
             }
             else{
                 username = name;
             }

             document.getElementById("text_username"). innerHTML =  username;
             
             document.getElementById("contact_form_name").value = name;


         }
       }
     )
   };

} else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";
    
    warn();

  }
});

function customersubmit(){
  var captcha_result = document.getElementById("captcha_check").value;
  var response = grecaptcha.getResponse();


  var name = document.getElementById("contact_form_name").value;
  var categories = document.getElementById("contact_form_categories").value;
  var subject = document.getElementById("contact_form_subject").value;
  var message = document.getElementById("contact_form_message").value;

  if(categories=="" || subject=="" || message=="" || categories==""){
    alert("Please Complete the Form")
  }

  else{
    if(response.length == 0){
        //reCaptcha not verified
        document.getElementById("captcha_alert").style.display="block";
      }
    else{

      var userId = firebase.auth().currentUser.uid;
      var emailId = firebase.auth().currentUser.email;

      //Database write
            var database = firebase.database();
            var usernameRef = database.ref("CustomerServices/"+ categories +"/"+ userId);
            var result = usernameRef.push({
              name:name,
              email:emailId,
              subject:subject,
              message:message

            });

            alert("Message Sent, Thank You for Keep in Touch with Us")
    }
  }

  return false;

}

function warn(){
    alert("Please Create an Account and Login to Contact Us")
    window.location="register.html";
}


function logout(){
firebase.auth().signOut();
}
