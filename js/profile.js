document.getElementById("update_status").style.display="none";
document.getElementById("uploader").style.display="none";

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function convertToRupiah(angka){
	var rupiah = '';
	var value = angka.toString().split('').reverse().join('');
	for(var i = 0; i < value.length; i++) if(i%3 == 0) rupiah += value.substr(i,3)+'.';
	return 'Rp, '+rupiah.split('',rupiah.length-1).reverse().join('');
}

var idnumberArray = ['101', '102', '103', '104', '105',
                     '201', '202', '203', '204',
                     '301', '302',
                     '501', '502', '601', '602'];

var randomstring = idnumberArray[Math.floor(Math.random() * idnumberArray.length)];
var rand = Number(randomstring);

if (rand==101 || rand==102 || rand==103 || rand==104 ||rand==105) {

  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo(randomstring);

  ref.once('value', snapshot => {
     if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       price = Object.values(price);
       price = price[0].price ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("ads_image").style.backgroundImage ="url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - Pandawa";
       document.getElementById("ads_price").innerHTML=price;

   }
 }
)
}

if (rand==201 || rand==202 || rand==203 || rand==204) {

  var db = firebase.database();
  var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo(randomstring);

  ref.once('value', snapshot => {
     if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       price = Object.values(price);
       price = price[0].price ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - GunungPayung";
       document.getElementById("ads_price").innerHTML=price;

   }
 }
)
}

if (rand==301 || rand==302) {

  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo(randomstring);

  ref.once('value', snapshot => {
     if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       price = Object.values(price);
       price = price[0].price ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - Timbis";
       document.getElementById("ads_price").innerHTML=price;

   }
 }
)
}

if (rand==501 || rand==502) {

  var db = firebase.database();
  var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo(randomstring);

  ref.once('value', snapshot => {
     if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;


       price = Object.values(price);
       price = price[0].price ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - PuriPandawa";
       document.getElementById("ads_price").innerHTML=price;

   }
 }
)
}

if (rand==601 || rand==602 ) {

  var db = firebase.database();
  var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo(randomstring);

  ref.once('value', snapshot => {
     if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       price = Object.values(price);
       price = price[0].price ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - PandawaHill";
       document.getElementById("ads_price").innerHTML=price;

   }
 }
)
}

//User Verification

document.getElementById("editprofile_button").style.display="block";
document.getElementById("submitprofile_button").style.display="none";

var fileButton = document.getElementById("changeImage");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    document.getElementById("check_now").style.display="none";
    document.getElementById("buy_now").style.display="block";

    var user = firebase.auth().currentUser;

    if(user!=null){

      var email_id = user.email;
      var userId = user.uid;
      var verified_status = user.emailVerified;

      if (verified_status == false){
        verified_status = "Not Verified";
        document.getElementById("verified_action").style.display="block";
        document.getElementById("verified_action").innerHTML="Verify Account Now";
      }
      else {
        verified_status = "Verified";
        document.getElementById("verified_action").style.display="none";
      }

      document.getElementById("profile_form_email").value =  email_id;

      //Get User Details

      var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var x = 188;
            var y = 10;
            var width = 200;
            var height = 137;
            var imageObj = new Image();

            imageObj.onload = function() {
              ctx.drawImage(imageObj, x, y, width, height);
            };

            var db = firebase.database();
            var userId = firebase.auth().currentUser.uid;
            var ref = db.ref('DatabaseUser/'+ userId + '/').orderByChild('email').equalTo(email_id);
            ref.on('value', snapshot => {
               if (snapshot.exists()) {
                   var img_url = snapshot.val();
                   img_url = Object.values(img_url);
                   img_url = img_url[0].img_url;

                   imageObj.src = img_url;
      }});

          var db = firebase.database();
          var ref = db.ref('DatabaseUser/'+ userId + '/').orderByChild('email').equalTo(email_id);
          ref.on('value', snapshot => {
             if (snapshot.exists()) {
                 var name = snapshot.val();
                 var dateofbirth = snapshot.val();
                 var idcard = snapshot.val();
                 var address = snapshot.val();
                 var phone = snapshot.val();

                 name = Object.values(name);
                 name = name[0].name;

                 dateofbirth = Object.values(dateofbirth);
                 dateofbirth = dateofbirth[0].dateofbirth;

                 idcard = Object.values(idcard);
                 idcard = idcard[0].idcard;

                 address = Object.values(address);
                 address = address[0].address;

                 phone = Object.values(phone);
                 phone = phone[0].phone;

                 if(idcard == undefined){
                   idcard = "-";
                 }
                 if(dateofbirth == undefined){
                   dateofbirth = "-";
                 }
                 if(address == undefined){
                   address = "-";
                 }
                 if(phone == undefined){
                   phone = "-";
                 }

                 document.getElementById("profile_form_name").value = name + " ( " + verified_status + " User )";
                 document.getElementById("profile_dateofbirth").value =  dateofbirth;
                 document.getElementById("profile_id_number").value =  idcard;
                 document.getElementById("profile_address").value =  address;
                 document.getElementById("profile_phone_number").value =  phone;

                 if (name.length>10){
    	            username = name.split(' ')[0] + " " + name.split(' ')[1];
                 }
                 else{
                     username = name;
                 }
    
                 document.getElementById("text_username"). innerHTML =  username;
                 document.getElementsByTagName('title')[0].innerHTML = "Profile - " + name.capitalize();
             }
           }
         )

    }



   if(changeImage){
     fileButton.addEventListener('change',function(e){
       document.getElementById("uploader").style.display="inline-block";

       var file = e.target.files[0];
       var userId = firebase.auth().currentUser.uid;
       var storageRef = firebase.storage().ref('userStorage/' + userId  + '/' + 'profile_pic/' + file.name );
       var uploadTask = storageRef.put(file);

       uploadTask.on('state_changed', function(snapshot){
     // Observe state change events such as progress, pause, and resume
     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     document.getElementById("uploader"). value =  progress;
     //console.log('Upload is ' + progress + '% done');
     if (progress==100){
       uploadsuccess();
     }
     switch (snapshot.state) {
       case firebase.storage.TaskState.PAUSED: // or 'paused'
         //console.log('Upload is paused');
         break;
       case firebase.storage.TaskState.RUNNING: // or 'running'
         //console.log('Upload is running');
         break;
     }
   }, function(error) {
     // Handle unsuccessful uploads
       document.getElementById("upload_status").innerHTML ="Upload Failed ";
       document.getElementById("upload_status").style.display="block";
       //console.log(errormsg);

   }, function() {
     // Handle successful uploads on complete
     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
     var add_img_url = downloadURL;
     
     var user = firebase.auth().currentUser;
     var userId = user.uid; 
     
     var database = firebase.database();
     database.ref('DatabaseUser/' + userId).once('value').then(function(snapshot) {
     var key = Object.keys(snapshot.val())[0];

     database.ref('DatabaseUser/' + userId +"/" + key).update({ 
         img_url: add_img_url });
      });
      
     var ref = db.ref('Review/').orderByChild('uid').equalTo(userId);
     ref.on('value', snapshot => {
        if (snapshot.exists()) {

            var key = Object.keys(snapshot.val())[0];
            
            var review_key = Object.keys(snapshot.val())[0];
            
             database.ref('Review/' + review_key).update({ 
                 img_url: add_img_url });
         }
      })
      
     });
   });
   });
   }

   function uploadsuccess(){
     document.getElementById("upload_status").innerHTML ="Upload Sucesssful";
     document.getElementById("upload_status").style.display="block";
     document.getElementById("uploader").style.display="inline-block";

     setTimeout(function uploadsuccess(){
       document.getElementById("upload_status").innerHTML ="Upload Sucesssful";
       document.getElementById("upload_status").style.display="none",document.getElementById("uploader").style.display="none"},3000);

   };



} else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

    document.getElementById("check_now").style.display="block";
    document.getElementById("buy_now").style.display="none";

  }
});


function verified_now(){
  var user = firebase.auth().currentUser;
  var email_id = user.email;

  user.sendEmailVerification().then(function() {
    console.log("sukses");
    alert("Email Verification Confirmation sent to : " + email_id);
  // Email sent.
  }).catch(function(error) {
  // An error happened.
  });
}

function logout(){
firebase.auth().signOut();
}

function editprofile(){
  document.getElementById("editprofile_button").style.display="none";
  document.getElementById("submitprofile_button").style.display="block";

  document.getElementById("profile_dateofbirth").readOnly = false;
  document.getElementById("profile_id_number").readOnly = false;
  document.getElementById("profile_address").readOnly = false;
  document.getElementById("profile_phone_number").readOnly = false;

  document.getElementById("profile_dateofbirth").classList.remove("input_field_user");
  document.getElementById("profile_id_number").classList.remove("input_field_user");
  document.getElementById("profile_address").classList.remove("input_field_user");
  document.getElementById("profile_phone_number").classList.remove("input_field_user");

  document.getElementById("profile_dateofbirth").classList.add("input_field");
  document.getElementById("profile_id_number").classList.add("input_field");
  document.getElementById("profile_address").classList.add("input_field");
  document.getElementById("profile_phone_number").classList.add("input_field");

  document.getElementById("profile_dateofbirth").classList.remove("cursordefault");
  document.getElementById("profile_id_number").classList.remove("cursordefault");
  document.getElementById("profile_address").classList.remove("cursordefault");
  document.getElementById("profile_phone_number").classList.remove("cursordefault");

  document.getElementById("profile_dateofbirth").classList.add("cursortext");
  document.getElementById("profile_id_number").classList.add("cursortext");
  document.getElementById("profile_address").classList.add("cursortext");
  document.getElementById("profile_phone_number").classList.add("cursortext");

  if(document.getElementById("profile_phone_number").value=="-"){
    document.getElementById("profile_phone_number").value=" ";
  }
  if(document.getElementById("profile_dateofbirth").value=="-"){
    document.getElementById("profile_dateofbirth").value="";
  }
  if(document.getElementById("profile_id_number").value=="-"){
    document.getElementById("profile_id_number").value="";
  }
  if(document.getElementById("profile_address").value=="-"){
    document.getElementById("profile_address").value="";
  }

  return false;

}

function submitupdate(){
  document.getElementById("editprofile_button").style.display="block";
  document.getElementById("submitprofile_button").style.display="none";

  document.getElementById("profile_dateofbirth").readOnly = true;
  document.getElementById("profile_id_number").readOnly = true;
  document.getElementById("profile_address").readOnly = true;
  document.getElementById("profile_phone_number").readOnly = true;

  document.getElementById("profile_dateofbirth").classList.remove("input_field");
  document.getElementById("profile_id_number").classList.remove("input_field");
  document.getElementById("profile_address").classList.remove("input_field");
  document.getElementById("profile_phone_number").classList.remove("input_field");

  document.getElementById("profile_dateofbirth").classList.add("input_field_user");
  document.getElementById("profile_id_number").classList.add("input_field_user");
  document.getElementById("profile_address").classList.add("input_field_user");
  document.getElementById("profile_phone_number").classList.add("input_field_user");

  document.getElementById("profile_dateofbirth").classList.remove("cursortext");
  document.getElementById("profile_id_number").classList.remove("cursortext");
  document.getElementById("profile_address").classList.remove("cursortext");
  document.getElementById("profile_phone_number").classList.remove("cursortext");

  document.getElementById("profile_dateofbirth").classList.add("cursordefault");
  document.getElementById("profile_id_number").classList.add("cursordefault");
  document.getElementById("profile_address").classList.add("cursordefault");
  document.getElementById("profile_phone_number").classList.add("cursordefault");

  var update_phone = document.getElementById("profile_phone_number").value;
  var update_dateofbirth = document.getElementById("profile_dateofbirth").value;
  var update_idcard = document.getElementById("profile_id_number").value;
  var update_address = document.getElementById("profile_address").value;

  if(update_phone==""){
    update_phone="-";
  }
  if(update_dateofbirth == ""){
    update_dateofbirth="-";
  }
  if(update_idcard==""){
    update_idcard="-";
  }
  if(update_address==""){
    update_address="-";
  }

  var user = firebase.auth().currentUser;
  var userId = user.uid;

  var database = firebase.database();
  database.ref('DatabaseUser/' + userId).once('value').then(function(snapshot) {

  var key = Object.keys(snapshot.val())[0];

  database.ref('DatabaseUser/' + userId +"/" + key).update({
    phone: update_phone,
    dateofbirth:update_dateofbirth,
    idcard:update_idcard,
    address :update_address
    });

   });
   document.getElementById("update_status").style.display="block";

   wait();

  return false;

}

async function wait() {
  await sleep(2000);
  document.getElementById("update_status").style.display="none";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
