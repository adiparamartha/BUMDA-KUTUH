document.getElementById("statusbar").style.display="none";

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

       document.getElementById("ads_image").style.backgroundImage = "url("+img_url+")";
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

if (rand==501 || rand==502 ) {

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

//Read statistics

function getstatistic(years,id){

  var db = firebase.database();
  var ref = db.ref("Statistic").orderByChild('years').equalTo(years);
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var clients = snapshot.val();
         clients = Object.values(clients);
         clients = clients[0].clients;

         var pandawa = snapshot.val();
         pandawa = Object.values(pandawa);
         pandawa = pandawa[0].pandawa;

         var gunungpayung = snapshot.val();
         gunungpayung = Object.values(gunungpayung);
         gunungpayung = gunungpayung[0].gunungpayung;

         var timbis = snapshot.val();
         timbis = Object.values(timbis);
         timbis = timbis[0].timbis;

         document.getElementById("clients_tahun"+id).innerHTML=clients;
         document.getElementById("pandawa_tahun"+id).innerHTML=pandawa;
         document.getElementById("gunungpayung_tahun"+id).innerHTML=gunungpayung;
         document.getElementById("timbis_tahun"+id).innerHTML=timbis;

     }

   }
  )

}

getstatistic(2017,1);
getstatistic(2018,2);

percentage(2000);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Set Stats Percentage
async function percentage(timer) {
  var clientlist = document.getElementById("clientsdata");
  var pandawalist = document.getElementById("pandawadata");
  var gunungpayunglist = document.getElementById("gunungpayungdata");
  var timbislist = document.getElementById("timbisdata");

  await sleep(timer);
  var clientlist1 = document.getElementById("clients_tahun1").innerHTML;
  var clientlist2 = document.getElementById("clients_tahun2").innerHTML;

  var pandawalist1 = document.getElementById("pandawa_tahun1").innerHTML;
  var pandawalist2 = document.getElementById("pandawa_tahun2").innerHTML;

  var gunungpayunglist1 = document.getElementById("gunungpayung_tahun1").innerHTML;
  var gunungpayunglist2 = document.getElementById("gunungpayung_tahun2").innerHTML;

  var timbislist1 = document.getElementById("timbis_tahun1").innerHTML;
  var timbislist2 = document.getElementById("timbis_tahun2").innerHTML;

  clientlist.setAttribute('data-x',clientlist1);
  clientlist.setAttribute('data-y',clientlist2);

  pandawalist.setAttribute('data-x',pandawalist1);
  pandawalist.setAttribute('data-y',pandawalist2);

  gunungpayunglist.setAttribute('data-x',gunungpayunglist1);
  gunungpayunglist.setAttribute('data-y',gunungpayunglist2);

  timbislist.setAttribute('data-x',timbislist1);
  timbislist.setAttribute('data-y',timbislist2);

  document.getElementById("statusbar").style.display="block";

}

//User Authority
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    document.getElementById("explore_now").style.display="none";
    document.getElementById("check_now").style.display="none";
    document.getElementById("buy_now").style.display="block";

    var user = firebase.auth().currentUser;

    if(user!=null){

      var email_id = user.email;
      var userId = user.uid;

      //Get username

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

} else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

    document.getElementById("explore_now").style.display="block";
    document.getElementById("check_now").style.display="block";
    document.getElementById("buy_now").style.display="none";
  }
});




function logout(){
firebase.auth().signOut();
}
