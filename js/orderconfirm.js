function bni_check(){

  document.getElementById("bni_check").classList.add("selected");
  document.getElementById("bni_border").classList.add("restore_opacity");

  document.getElementById("mandiri_check").classList.remove("selected");
  document.getElementById("mandiri_border").classList.remove("restore_opacity");

  document.getElementById("bri_check").classList.remove("selected");
  document.getElementById("bri_check").classList.remove("restore_opacity");

  document.getElementById("bca_check").classList.remove("selected");
  document.getElementById("bca_border").classList.remove("restore_opacity");

  sessionStorage.setItem("payment_method","Bank Negara Indonesia");
  sessionStorage.setItem("bank_chek","true")

  return false;
}

function mandiri_check(){

  document.getElementById("mandiri_check").classList.add("selected");
  document.getElementById("mandiri_border").classList.add("restore_opacity");

  document.getElementById("bni_check").classList.remove("selected");
  document.getElementById("bni_border").classList.remove("restore_opacity");

  document.getElementById("bri_check").classList.remove("selected");
  document.getElementById("bri_border").classList.remove("restore_opacity");

  document.getElementById("bca_check").classList.remove("selected");
  document.getElementById("bca_border").classList.remove("restore_opacity");

  sessionStorage.setItem("payment_method","Bank Mandiri");
  sessionStorage.setItem("bank_chek","true")

  return false;
}

function bri_check(){

  document.getElementById("bri_check").classList.add("selected");
  document.getElementById("bri_border").classList.add("restore_opacity");

  document.getElementById("bni_check").classList.remove("selected");
  document.getElementById("bni_border").classList.remove("restore_opacity");

  document.getElementById("mandiri_check").classList.remove("selected");
  document.getElementById("mandiri_border").classList.remove("restore_opacity");

  document.getElementById("bca_check").classList.remove("selected");
  document.getElementById("bca_border").classList.remove("restore_opacity");

  sessionStorage.setItem("payment_method","Bank Rakyat Indonesia");
  sessionStorage.setItem("bank_chek","true");

  return false;
}

function bca_check(){

  document.getElementById("bca_check").classList.add("selected");
  document.getElementById("bca_border").classList.add("restore_opacity");

  document.getElementById("bri_check").classList.remove("selected");
  document.getElementById("bri_border").classList.remove("restore_opacity");

  document.getElementById("bni_check").classList.remove("selected");
  document.getElementById("bni_border").classList.remove("restore_opacity");

  document.getElementById("mandiri_check").classList.remove("selected");
  document.getElementById("mandiri_border").classList.remove("restore_opacity");

  sessionStorage.setItem("payment_method","Bank Central Asia");
  sessionStorage.setItem("bank_chek","true")

  return false;
}

function convertToRupiah(angka){
	var rupiah = '';
	var value = angka.toString().split('').reverse().join('');
	for(var i = 0; i < value.length; i++) if(i%3 == 0) rupiah += value.substr(i,3)+'.';
	return 'Rp, '+rupiah.split('',rupiah.length-1).reverse().join('');
}

var final_id = sessionStorage.getItem("ID");
var final_name = sessionStorage.getItem("name");
var final_date = sessionStorage.getItem("date_checkout");
var final_dateout = sessionStorage.getItem("date_out_checkout")
var final_price = sessionStorage.getItem("price");
var final_adults = sessionStorage.getItem("adults_checkout");
var final_children = sessionStorage.getItem("children_chekout");
sessionStorage.setItem("condition_status","true");

if (final_id !==null && final_name !==null && final_date !==null && final_adults!==null && final_children!==null && final_price!==null){

sessionStorage.setItem("final_price",final_random_price);

var total_guest = (Number(final_adults) + Number(final_children));
var final_total_price = (Number(total_guest)*Number(final_price))+getRandomIntInclusive(100,200);

var final_total_price = convertToRupiah(final_total_price);

document.getElementById("confirm_id").innerHTML=final_id;
document.getElementById("confirm_destination").innerHTML=final_name;

if (final_dateout==""){
  document.getElementById("confirm_date").innerHTML=final_date;
}
else {
  document.getElementById("confirm_date").innerHTML=final_date + " - " +final_dateout;
}
if (final_children == 0) {
  document.getElementById("confirm_qty").innerHTML=final_adults + " Adults";

}
else {
  document.getElementById("confirm_qty").innerHTML=final_adults + " Adults + " + final_children + " Children";
}

var final_random_price = document.getElementById("confirm_price").innerHTML=final_total_price;

sessionStorage.setItem("fix_price",final_random_price);

//Rules for User
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

         }
       }
     )
   };
}

 else {
    // No user is signed in.

    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

    window.location="index.html"

  }
});
}
else {
  window.location="orderlist.html"
}

function getordernumber(){

  var user = firebase.auth().currentUser;
  var userId = user.uid;

  var refID = firebase.database().ref('PaymentDetails/' + userId).orderByValue().limitToLast(1);

  refID.once('value', snapshot => {
     if (snapshot.exists()) {
         var orderid = snapshot.val();

         orderid = Object.values(orderid);
         orderid = orderid[0].orderid;

         orderid=Number(orderid)+1;
         console.log(orderid);

         confirm_payment(orderid);
    }

    else{
      confirm_payment(1);
    }
  })

}

function confirm_payment(orderid){

  var final_payment_details = sessionStorage.getItem("payment_method");

  var user = firebase.auth().currentUser;

  var email_id = user.email;
  var userId = user.uid;

  getspecialID(userId,final_id,VariableID)

    if (final_dateout==""){
      findate=final_date;
    }
    else {
      findate=final_date + " - " +final_dateout;
    }

    neworderid = ""+orderid;

    //getordernumber(ordernumber);

  //Database write
        var database = firebase.database();
        var usernameRef = database.ref('PaymentDetails/'+ userId);
        var result = usernameRef.push({
          orderid:neworderid,
          id:final_id,
          price:final_random_price,
          adults:final_adults,
          children:final_children,
          name:final_name,
          date:findate,
          uniquecode:ordernumber,
          bank:final_payment_details,
          enreview:"false",
          status:"unpaid"
        })

      writeuser();
      window.location="payment.html";

      return false;
    }

function writeuser(){
  var user = firebase.auth().currentUser;
  var userId = user.uid;
  var email_id = user.email;

  var database = firebase.database();
  var userdetails = database.ref('Users');
  var detail = userdetails.push({
    uid:userId,
    email:email_id,
    uniquecode:ordernumber
  })
}

var VarID = Math.random().toString(36).substring(10);
var VariableID = VarID.toUpperCase();

function getspecialID(userId,final_id,VariableID){

  //User Id
  var str = userId;
  var userID = str.slice(1, 3);

  //ID Produk
  var idproduct= final_id;

  //Random ID
  var id = VariableID;

  ordernumber = userID + idproduct + id;
  sessionStorage.setItem("uniquecode",ordernumber);
  return ordernumber;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function logout(){
firebase.auth().signOut();
}
