
var idnumberArray = ['101', '102', '103', '104', '105',
                     '201', '202', '203', '204',
                     '301', '302',
                     '501', '502', '601', '602'];

var randomstring = idnumberArray[Math.floor(Math.random() * idnumberArray.length)];
var rand = Number(randomstring);
console.log(randomstring);

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


       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - Pandawa";
       document.getElementById("ads_price").innerHTML="Rp, " + price;

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


       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - GunungPayung";
       document.getElementById("ads_price").innerHTML="Rp, " + price;

   }
 }
)
}

if (rand==301 || rand==302 ) {

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


       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - Timbis";
       document.getElementById("ads_price").innerHTML="Rp, " + price;

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


       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - PuriPandawa";
       document.getElementById("ads_price").innerHTML="Rp, " + price;

   }
 }
)
}

if (rand==601 || rand==602) {

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


       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
       document.getElementById("ads_name").innerHTML=name + " - PandawaHill";
       document.getElementById("ads_price").innerHTML="Rp, " + price;

   }
 }
)
}

var order_number = 123456;

function finalcheckout(){

  const name_details = chekout_name_details.value;
  const order_qty = chekout_qty_details.value;
  const total_price = chekout_totalprice_details.value;
  const date_details = chekout_date_details.value;

  var userId = firebase.auth().currentUser.uid;
  var email_id = user.email;

  //Database write
        var database = firebase.database();
        var usernameRef = database.ref('PaymentDetails/'+ userId);
        var result = usernameRef.push({
          destinationname:name_details,
          quantity:order_qty,
          totalprice:total_price,
          orderid:order_id,
          email:email_id,
          date:date_details
        });
  window.location='payment.html';

  return false;
}


//Rules for User
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // User is signed in.

    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    document.getElementById("check_now").style.display="none";
    document.getElementById("buy_now").style.display="block";

  //Read Chechkout Details
      var user = firebase.auth().currentUser;

      var email_id = user.email;
      var userId = user.uid;

      var db = firebase.database();
      var userId = firebase.auth().currentUser.uid;
      var ref = db.ref('CheckoutDetails/'+ userId + '/').orderByChild('email').equalTo(email_id);
      ref.once('value', snapshot => {
         if (snapshot.exists()) {
             var destinationname = snapshot.val();
             var quantity = snapshot.val();
             var totalprice = snapshot.val();
             var orderid = snapshot.val();
             var date = snapshot.val();

             destinationname = Object.values(destinationname);
             destinationname = destinationname[0].destinationname;

             quantity = Object.values(quantity);
             quantity = quantity[0].quantity;

             totalprice = Object.values(totalprice);
             totalprice = totalprice[0].totalprice;

             orderid = Object.values(orderid);
             orderid = orderid[0].orderid;

             date = Object.values(date);
             date = date[0].date;

}});


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

 else {
    // No user is signed in.

    window.location='index.html';

    document.getElementById("check_now").style.display="block";
    document.getElementById("buy_now").style.display="none";


  }
});
