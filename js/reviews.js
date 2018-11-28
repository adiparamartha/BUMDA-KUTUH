var dest_name = sessionStorage.getItem("dest_name");
document.getElementById("destionation_name").innerHTML=dest_name;

var uniquecode = sessionStorage.getItem("uniquecode");
var review_date = sessionStorage.getItem("date_checkout");
var review_adults = sessionStorage.getItem("adults_checkout");
var review_children = sessionStorage.getItem("children_checkout");
if(review_children==null || review_children == ""){
  review_children=0;
}

sessionStorage.removeItem("dest_name");
sessionStorage.removeItem("uniquecode");
sessionStorage.removeItem("date_checkout");
sessionStorage.removeItem("adults_checkout");
sessionStorage.removeItem("children_checkout");

if (dest_name !==null && uniquecode !==null && review_date !==null && review_adults!==null && review_children!==null){

//Rules for User
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

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
         }
       }
     )

	 }

}

 else {
    // No user is signed in.
		document.getElementById("logged_in").style.display="none";
		document.getElementById("logged_out").style.display="block";

	  window.location="index.html"

  }
});

}
else{
  window.location="orderlist.html";
}

function submitreview(){

  var subject = document.getElementById("review_form_subject").value;
  var message = document.getElementById("review_form_message").value;
  var rating = document.getElementsByName('star');


  for (var i = 0, length = rating.length; i < length; i++) {
      if (rating[i].checked) {
          rating = rating[i].value;

          break;
      }
    }

  if (subject=="" || message =="" || rating ==""){
    document.getElementById("optsubmitmessage").innerHTML ="Please Fill All Form";
    document.getElementById("optsubmitmessage").style.display="block";
    document.getElementById("optsubmitmessage").classList.add("redcolor");

    setTimeout(function status(){
      document.getElementById("optsubmitmessage").style.display="none"},2000);
  }
  else if(subject.length>=20){
    document.getElementById("optsubmitmessage").innerHTML ="Subject Limited to 10 Words";
    document.getElementById("optsubmitmessage").style.display="block";
    document.getElementById("optsubmitmessage").classList.add("redcolor");
    
    setTimeout(function status(){
      document.getElementById("optsubmitmessage").style.display="none"},2000);
  }
  
  else if (message.length>=70){
    document.getElementById("optsubmitmessage").innerHTML ="Review Message Limited to 70 Words";
    document.getElementById("optsubmitmessage").style.display="block";
    document.getElementById("optsubmitmessage").classList.add("redcolor");
    
    setTimeout(function status(){
      document.getElementById("optsubmitmessage").style.display="none"},2000);
  }
  
  else{

    var username= document.getElementById("text_username").innerHTML;

    dest_name=dest_name.split(' - ')[1];
    
    console.log(dest_name);
    
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var email_id = user.email;
    
      var dbimg = firebase.database();
      var refimg = dbimg.ref('DatabaseUser/'+ uid + '/').orderByChild('email').equalTo(email_id);
      refimg.once('value', snapshot => {
           if (snapshot.exists()) {
        
               var img_url = snapshot.val();
               img_url = Object.values(img_url);
               img_url = img_url[0].img_url;
               
      var db = firebase.database();
      var ref = db.ref('ReviewNumber/').orderByChild('detail').equalTo('new_review');
      ref.once('value', snapshot => {
         if (snapshot.exists()) {
             var no_review = snapshot.val();
             var no_reviewkey = Object.keys(snapshot.val())[0];
    
             no_review = Object.values(no_review);
             no_review = no_review[0].no_review;

             var newnumber=Number(no_review)+1;
    
             reviews(newnumber,rating,message,subject,no_reviewkey,img_url);
        }
    
    else{
      reviews(1,rating,message,subject);
        }
     })
    }
  })
 }
  return false;
}

function getdetails(img_url){
   
}

function reviews(review_number,rating,message,subject,no_reviewkey,img_url){

    var user = firebase.auth().currentUser;
    var userId = user.uid;
    var email_id = user.email;
    
    var database = firebase.database();
    var reviewPush = database.ref('Review/');
    var result = reviewPush.push({
      name:dest_name,
      NoReview:""+review_number,
      uid:userId,
      date:review_date,
      adults:review_adults,
      children:review_children,
      username:username,
      uniquecode:uniquecode,
      subject:subject,
      message:message,
      rating:rating,
      img_url:img_url

    });


    database.ref('PaymentDetails/' + userId).orderByChild('uniquecode').equalTo(""+uniquecode).
    once('value').then(function(snapshot) {

    var key = Object.keys(snapshot.val())[0];

    database.ref('PaymentDetails/' + userId +"/" + key).update({
      enreview:"false"
      });
      
    database.ref('ReviewNumber/'+no_reviewkey).update({
      no_review:""+review_number
    });
    
    });

    document.getElementById("optsubmitmessage").innerHTML ="Thank You for the Review<br>We Hope you will Visit us again Soon";
    document.getElementById("optsubmitmessage").classList.remove("redcolor");
    document.getElementById("optsubmitmessage").classList.add("greencolor");
    document.getElementById("optsubmitmessage").style.display="block";

    setTimeout(function uploadsuccess(){
    document.getElementById("optsubmitmessage").style.display="none"},2000);

  wait();

  return false;

}

async function wait() {
  await sleep(5000);
    window.location="orderlist.html";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function logout(){
firebase.auth().signOut();
}
