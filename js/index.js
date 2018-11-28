//Initialize Date 
inittoday();
inittommorow();

//Get Reviews Deatils
firebase.database().ref("Review/").once('value', function(snap){
snap.forEach(function(childNodes){
    
       name = childNodes.val().name;
       
       username = childNodes.val().username;
       
       if (username.length>10){
	       reviewname = username.split(' ')[0] + " " + username.split(' ')[1];
        }
        else{
           reviewname = username;
        }
             
       subject = childNodes.val().subject;
       message = childNodes.val().message;
       NoReview = childNodes.val().NoReview;
       date = childNodes.val().date;
       img_url=childNodes.val().img_url;
       
       var testi_user_name = "test_name_"+NoReview;
       var testi_dest_date = "test_date_"+NoReview;
       var testi_qoute_title = "test_quoute_title_"+NoReview;
       var testi_qoute_text = "test_quoute_text_"+NoReview;
       var testi_icon_detail = "dest_logo_"+NoReview;
       var testi_div_detail = "testi_"+NoReview;
       var testi_profile_detail = "profile_pic_"+NoReview;
       
           
       document.getElementById(testi_profile_detail).src = img_url;
      
       document.getElementById(testi_user_name).innerHTML = reviewname;
       document.getElementById(testi_dest_date).innerHTML = date;
       document.getElementById(testi_qoute_title).innerHTML = " - " +subject+ " - ";
       document.getElementById(testi_qoute_text).innerHTML = message;
       document.getElementById(testi_qoute_text).src = message;

       
       if(name=="PandawaBeach"){
           document.getElementById(testi_icon_detail).src = "images/island_t.png";
       }
       else if (name=="GunungPayung"){
           document.getElementById(testi_icon_detail).src = "images/stats_1_white.png";
       }
       else if(name=="TimbisParagliding"){
           document.getElementById(testi_icon_detail).src = "images/departurea_white.png";
       }
        else if(name=="PandawaHill"||name=="PuriPandawa"){
           document.getElementById(testi_icon_detail).src = "images/hotel_white.png";
       }
       else if(name=="Package"){
           document.getElementById(testi_icon_detail).src = "images/promotion_white.png";
       }
       else if(name=="Promotion"){
           document.getElementById(testi_icon_detail).src = "images/package_white.png";
       }
       
       document.getElementById(testi_div_detail).style.display="block";
       })
    });

document.getElementById("hotels_check_in_date").value=today;
document.getElementById("hotels_check_out_date").value=tommorow;
document.getElementById("pandawa_check_in_date").value=today;
document.getElementById("gunungpayung_check_in_date").value=today;
document.getElementById("timbis_check_in_date").value=today;

document.getElementById("hotels_check_in_date").setAttribute('min', today);
document.getElementById("hotels_check_out_date").setAttribute('min', tommorow);

document.getElementById("pandawa_check_in_date").setAttribute('min', today);
document.getElementById("gunungpayung_check_in_date").setAttribute('min', today);
document.getElementById("timbis_check_in_date").setAttribute('min', today);

//Date function
function inittoday(){
	return today = new Date().toISOString().split('T')[0];
}

function inittommorow(){
	var myDate = new Date();
	myDate.setDate(myDate.getDate() + 1);
	return tommorow = myDate.toISOString().split('T')[0];
}

function getnextday(selected_date){
var nextdate = new Date(selected_date);
nextdate.setDate(nextdate.getDate()+1)
return next_selected_date = nextdate.toISOString().split('T')[0];
}

function convertToRupiah(angka){
	var rupiah = '';
	var value = angka.toString().split('').reverse().join('');
	for(var i = 0; i < value.length; i++) if(i%3 == 0) rupiah += value.substr(i,3)+'.';
	return 'Rp, '+rupiah.split('',rupiah.length-1).reverse().join('');
}

function hoteldatepicker(){
	var selected_date = document.getElementById("hotels_check_in_date").value;
	document.getElementById("hotels_check_out_date").setAttribute('min', selected_date);
	getnextday(selected_date);
	document.getElementById("hotels_check_out_date").setAttribute('min', next_selected_date);
	document.getElementById("hotels_check_out_date").value=next_selected_date;
}

function check_hotel_search(){
    
    var check_condition;

	var startdate = document.getElementById("hotels_check_in_date").value;
	var endate = document.getElementById("hotels_check_out_date").value;

	var start_day = startdate.substr(8,2);
	var start_month = startdate.substr(5,2);
	var start_year = startdate.substr(0,4);
	var end_day = endate.substr(8,2);
	var end_month = endate.substr(5,2);
	var end_year = endate.substr(0,4);

	if (start_year < end_year){
	        check_condition=true;
	   }
	   
	else if (start_year==end_year) { 
      if(start_month < end_month){
        	check_condition=true;
       }
      
	  else if (start_month == end_month){ 
	   if(start_day < end_day){
	           	   check_condition=true;
	           }
	           else{
	               alert("Invalid Date Setting")
	               check_condition=false;
	           }
	       }
	       else{
	           alert("Invalid Month Setting")
	           	   check_condition=false;
	       }
	   }
	  else{
	      alert("Invalid Year Setting");
 	               check_condition=false;
	  }
	  
	  if(check_condition==true){
	      hotel_search_order();
	      window.location="offers.html"
	  }
	  else{
	      alert("Please Check you Booking Date")
	  }
	  
	  return false;
	  
}

function hotel_search_order(){

  var check_in_date_details = document.getElementById("hotels_check_in_date").value;
  var check_out_date_details = document.getElementById("hotels_check_out_date").value;
  var adults_total_details = document.getElementById("hotels_adults_details").value;
  var children_total_details = document.getElementById("hotels_children_details").value;
  var destination_name_details = document.getElementById("hotels_destination_name").value;

  sessionStorage.setItem("check_in_date",check_in_date_details);
  sessionStorage.setItem("check_out_date",check_out_date_details);
  sessionStorage.setItem("adults_total",adults_total_details);
  sessionStorage.setItem("children_total",children_total_details);
  sessionStorage.setItem("destination_name",destination_name_details)
  sessionStorage.setItem("categories","hotel");

  window.location="offers.html"

  return false;
}

function pandawa_search_order(){
  var check_in_date_details = document.getElementById("pandawa_check_in_date").value;
  var adults_total_details = document.getElementById("pandawa_adults_details").value;
  var children_total_details = document.getElementById("pandawa_children_details").value;

  sessionStorage.setItem("pandawa_check_in_date",check_in_date_details);
  sessionStorage.setItem("pandawa_adults_total",adults_total_details);
  sessionStorage.setItem("pandawa_children_total",children_total_details);
  sessionStorage.setItem("categories","pandawa");
  
}

function gunungpayung_search_order(){
  var check_in_date_details = document.getElementById("gunungpayung_check_in_date").value;
  var adults_total_details = document.getElementById("gunungpayung_adults_details").value;
  var children_total_details = document.getElementById("gunungpayung_children_details").value;

  sessionStorage.setItem("gunungpayung_check_in_date",check_in_date_details);
  sessionStorage.setItem("gunungpayung_adults_total",adults_total_details);
  sessionStorage.setItem("gunungpayung_children_total",children_total_details);
  sessionStorage.setItem("categories","gunungpayung");

  window.location="offers.html"

  return false;

}

function timbis_search_order(){
  var check_in_date_details = document.getElementById("timbis_check_in_date").value;
  var adults_total_details = document.getElementById("timbis_adults_details").value;
  var children_total_details = document.getElementById("timbis_children_details").value;

  sessionStorage.setItem("timbis_check_in_date",check_in_date_details);
  sessionStorage.setItem("timbis_adults_total",adults_total_details);
  sessionStorage.setItem("timbis_children_total",children_total_details);
  sessionStorage.setItem("categories","timbis");

  window.location="offers.html"

    return false;

}
//Every User can Access

//Query Database Promo 1

var db = firebase.database();
var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("001");
ref.once('value', snapshot => {
   if (snapshot.exists()) {

       var date = snapshot.val();
       date = Object.values(date);
       date = date[0].date;

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var rating = snapshot.val();
       rating = Object.values(rating);
       rating = rating[0].rating;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       price = convertToRupiah(price);

   }

   document.getElementById("promo_date_1"). innerHTML =  date;
   document.getElementById("promo_name_1"). innerHTML =  name;
   document.getElementById("promo_price_1"). innerHTML =  price;
   document.getElementById("promo_img_url_1"). style.backgroundImage = "url("+img_url+")";

   var db = firebase.database();
   var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("1001");
   refRating.once('value', snapshot => {
      if (snapshot.exists()) {

        var rating = snapshot.val();
        rating = Object.values(rating);
        rating = rating[0].rating;

      }
      if (rating==1){
        document.getElementById("promo_rating_1"). className =  "rating_r rating_r_1 offers_rating";
      } else if(rating==2){
        document.getElementById("promo_rating_1"). className =  "rating_r rating_r_2 offers_rating";
      } else if(rating==3){
        document.getElementById("promo_rating_1"). className =  "rating_r rating_r_3 offers_rating";
      } else if (rating==4){
        document.getElementById("promo_rating_1"). className =  "rating_r rating_r_4 offers_rating";
      }else{
        document.getElementById("promo_rating_1"). className =  "rating_r rating_r_5 offers_rating";
      }

    }
   )

   }
   )

//Query Database Promo 2

var db = firebase.database();
var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("002");
ref.once('value', snapshot => {
   if (snapshot.exists()) {

       var date = snapshot.val();
       date = Object.values(date);
       date = date[0].date;

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var rating = snapshot.val();
       rating = Object.values(rating);
       rating = rating[0].rating;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       price = convertToRupiah(price);



   }

   document.getElementById("promo_date_2"). innerHTML =  date;
   document.getElementById("promo_name_2"). innerHTML =  name;
   document.getElementById("promo_price_2"). innerHTML = price;
   document.getElementById("promo_img_url_2"). style.backgroundImage = "url("+img_url+")";

   var db = firebase.database();
   var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("002");
   refRating.once('value', snapshot => {
      if (snapshot.exists()) {

        var rating = snapshot.val();
        rating = Object.values(rating);
        rating = rating[0].rating;

      }
      if (rating==1){
        document.getElementById("promo_rating_2"). className =  "rating_r rating_r_1 offers_rating";
      } else if(rating==2){
        document.getElementById("promo_rating_2"). className =  "rating_r rating_r_2 offers_rating";
      } else if(rating==3){
        document.getElementById("promo_rating_2"). className =  "rating_r rating_r_3 offers_rating";
      } else if (rating==4){
        document.getElementById("promo_rating_2"). className =  "rating_r rating_r_4 offers_rating";
      }else{
        document.getElementById("promo_rating_2"). className =  "rating_r rating_r_5 offers_rating";
      }

    }
   )

   }
   )

//Query Database Promo 3

var db = firebase.database();
var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("003");
ref.once('value', snapshot => {
   if (snapshot.exists()) {

       var date = snapshot.val();
       date = Object.values(date);
       date = date[0].date;

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var rating = snapshot.val();
       rating = Object.values(rating);
       rating = rating[0].rating;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       price = convertToRupiah(price);



   }

   document.getElementById("promo_date_3"). innerHTML =  date;
   document.getElementById("promo_name_3"). innerHTML =  name;
   document.getElementById("promo_price_3"). innerHTML =  price;
   document.getElementById("promo_img_url_3"). style.backgroundImage = "url("+img_url+")";


   var db = firebase.database();
   var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("003");
   refRating.once('value', snapshot => {
      if (snapshot.exists()) {

        var rating = snapshot.val();
        rating = Object.values(rating);
        rating = rating[0].rating;

      }
      if (rating==1){
        document.getElementById("promo_rating_3"). className =  "rating_r rating_r_1 offers_rating";
      } else if(rating==2){
        document.getElementById("promo_rating_3"). className =  "rating_r rating_r_2 offers_rating";
      } else if(rating==3){
        document.getElementById("promo_rating_3"). className =  "rating_r rating_r_3 offers_rating";
      } else if (rating==4){
        document.getElementById("promo_rating_3"). className =  "rating_r rating_r_4 offers_rating";
      }else{
        document.getElementById("promo_rating_3"). className =  "rating_r rating_r_5 offers_rating";
      }

    }
  )

  }
  )



//Best Package Deals - offers

//Best Package 1

var db = firebase.database();
var refPackage = db.ref('Package').orderByChild('idnumber').equalTo("1001");
refPackage.once('value', snapshot => {
   if (snapshot.exists()) {

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var detail = snapshot.val();
       detail = Object.values(detail);
       detail = detail[0].detail;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       var check_access = snapshot.val();
       check_access = Object.values(check_access);
       check_access = check_access[0].check_access;

       var check_parking = snapshot.val();
       check_parking = Object.values(check_parking);
       check_parking = check_parking[0].check_parking;

       var check_pet = snapshot.val();
       check_pet = Object.values(check_pet);
       check_pet = check_pet[0].check_pet;

       var check_wifi = snapshot.val();
       check_wifi = Object.values(check_wifi);
       check_wifi = check_wifi[0].check_wifi;

       price = convertToRupiah(price);



   }

   document.getElementById("package_name_1"). innerHTML =  name;
   document.getElementById("package_price_1"). innerHTML =  price;
   document.getElementById("package_details_1"). innerHTML =  detail;
   document.getElementById("package_img_url_1"). style.backgroundImage = "url("+img_url+")";

   if (check_access =="true" && check_parking=="true" && check_pet == "true" && check_wifi =="true"){
     document.getElementById("complete_1").style.display="block";
     document.getElementById("wifi_access_parking_1").style.display="none";
     document.getElementById("wifi_access_1").style.display="none";
   } else if(check_access =="true" && check_parking=="true" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_1").style.display="none";
     document.getElementById("wifi_access_parking_1").style.display="block";
     document.getElementById("wifi_access_1").style.display="none";
   } else if (check_access =="true" && check_parking=="false" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_1").style.display="none";
     document.getElementById("wifi_access_parking_1").style.display="none";
     document.getElementById("wifi_access_1").style.display="block";
   } else {
     return null;
   }

//Rating Query Database Review/Package

   var db = firebase.database();
   var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("1001");
   refRating.once('value', snapshot => {
      if (snapshot.exists()) {

        var rating = snapshot.val();
        rating = Object.values(rating);
        rating = rating[0].rating;

      }
      if (rating==1){
        document.getElementById("package_rating_1"). className =  "rating_r rating_r_1 offers_rating";
      } else if(rating==2){
        document.getElementById("package_rating_1"). className =  "rating_r rating_r_2 offers_rating";
      } else if(rating==3){
        document.getElementById("package_rating_1"). className =  "rating_r rating_r_3 offers_rating";
      } else if (rating==4){
        document.getElementById("package_rating_1"). className =  "rating_r rating_r_4 offers_rating";
      }else{
        document.getElementById("package_rating_1"). className =  "rating_r rating_r_5 offers_rating";
      }

    }
  )

 }
)

//Best Package 2

var db = firebase.database();
var refPackage = db.ref('Package').orderByChild('idnumber').equalTo("1002");
refPackage.once('value', snapshot => {
   if (snapshot.exists()) {

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var detail = snapshot.val();
       detail = Object.values(detail);
       detail = detail[0].detail;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       var check_access = snapshot.val();
       check_access = Object.values(check_access);
       check_access = check_access[0].check_access;

       var check_parking = snapshot.val();
       check_parking = Object.values(check_parking);
       check_parking = check_parking[0].check_parking;

       var check_pet = snapshot.val();
       check_pet = Object.values(check_pet);
       check_pet = check_pet[0].check_pet;

       var check_wifi = snapshot.val();
       check_wifi = Object.values(check_wifi);
       check_wifi = check_wifi[0].check_wifi;

       price = convertToRupiah(price);



   }

   document.getElementById("package_name_2"). innerHTML =  name;
   document.getElementById("package_price_2"). innerHTML =  price;
   document.getElementById("package_details_2"). innerHTML =  detail;
   document.getElementById("package_img_url_2"). style.backgroundImage = "url("+img_url+")";

   if (check_access =="true" && check_parking=="true" && check_pet == "true" && check_wifi =="true"){
     document.getElementById("complete_2").style.display="block";
     document.getElementById("wifi_access_parking_2").style.display="none";
     document.getElementById("wifi_access_2").style.display="none";
   } else if(check_access =="true" && check_parking=="true" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_2").style.display="none";
     document.getElementById("wifi_access_parking_2").style.display="block";
     document.getElementById("wifi_access_2").style.display="none";
   } else if (check_access =="true" && check_parking=="false" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_2").style.display="none";
     document.getElementById("wifi_access_parking_2").style.display="none";
     document.getElementById("wifi_access_2").style.display="block";
   } else {
     return null;
   }

//Rating Query Database Review/Promotion

      var db = firebase.database();
      var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("1002");
      refRating.once('value', snapshot => {
         if (snapshot.exists()) {

           var rating = snapshot.val();
           rating = Object.values(rating);
           rating = rating[0].rating;

         }
         if (rating==1){
           document.getElementById("package_rating_2"). className =  "rating_r rating_r_1 offers_rating";
         } else if(rating==2){
           document.getElementById("package_rating_2"). className =  "rating_r rating_r_2 offers_rating";
         } else if(rating==3){
           document.getElementById("package_rating_2"). className =  "rating_r rating_r_3 offers_rating";
         } else if (rating==4){
           document.getElementById("package_rating_2"). className =  "rating_r rating_r_4 offers_rating";
         }else{
           document.getElementById("package_rating_2"). className =  "rating_r rating_r_5 offers_rating";
         }

       }
     )
  }
)


//Best Package 3

var db = firebase.database();
var refPackage = db.ref('Package').orderByChild('idnumber').equalTo("1003");
refPackage.once('value', snapshot => {
   if (snapshot.exists()) {

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var detail = snapshot.val();
       detail = Object.values(detail);
       detail = detail[0].detail;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       var check_access = snapshot.val();
       check_access = Object.values(check_access);
       check_access = check_access[0].check_access;

       var check_parking = snapshot.val();
       check_parking = Object.values(check_parking);
       check_parking = check_parking[0].check_parking;

       var check_pet = snapshot.val();
       check_pet = Object.values(check_pet);
       check_pet = check_pet[0].check_pet;

       var check_wifi = snapshot.val();
       check_wifi = Object.values(check_wifi);
       check_wifi = check_wifi[0].check_wifi;

       price = convertToRupiah(price);



   }



   document.getElementById("package_name_3"). innerHTML =  name;
   document.getElementById("package_price_3"). innerHTML =  price;
   document.getElementById("package_details_3"). innerHTML =  detail;
   document.getElementById("package_img_url_3"). style.backgroundImage = "url("+img_url+")";

   if (check_access =="true" && check_parking=="true" && check_pet == "true" && check_wifi =="true"){
     document.getElementById("complete_3").style.display="block";
     document.getElementById("wifi_access_parking_3").style.display="none";
     document.getElementById("wifi_access_3").style.display="none";
   } else if(check_access =="true" && check_parking=="true" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_3").style.display="none";
     document.getElementById("wifi_access_parking_3").style.display="block";
     document.getElementById("wifi_access_3").style.display="none";
   } else if (check_access =="true" && check_parking=="false" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_3").style.display="none";
     document.getElementById("wifi_access_parking_3").style.display="none";
     document.getElementById("wifi_access_3").style.display="block";
   } else {
     return null;
   }

   //Rating Query Database Review/Promotion

         var db = firebase.database();
         var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("1003");
         refRating.once('value', snapshot => {
            if (snapshot.exists()) {

              var rating = snapshot.val();
              rating = Object.values(rating);
              rating = rating[0].rating;

            }
            if (rating==1){
              document.getElementById("package_rating_3"). className =  "rating_r rating_r_1 offers_rating";
            } else if(rating==2){
              document.getElementById("package_rating_3"). className =  "rating_r rating_r_2 offers_rating";
            } else if(rating==3){
              document.getElementById("package_rating_3"). className =  "rating_r rating_r_3 offers_rating";
            } else if (rating==4){
              document.getElementById("package_rating_3"). className =  "rating_r rating_r_4 offers_rating";
            }else{
              document.getElementById("package_rating_3"). className =  "rating_r rating_r_5 offers_rating";
            }

          }
        )
     }
   )

//Best Package 4

var db = firebase.database();
var refPackage = db.ref('Package').orderByChild('idnumber').equalTo("1004");
refPackage.once('value', snapshot => {
   if (snapshot.exists()) {

       var name = snapshot.val();
       name = Object.values(name);
       name = name[0].name;

       var price = snapshot.val();
       price = Object.values(price);
       price = price[0].price;

       var detail = snapshot.val();
       detail = Object.values(detail);
       detail = detail[0].detail;

       var img_url = snapshot.val();
       img_url = Object.values(img_url);
       img_url = img_url[0].img_url;

       var check_access = snapshot.val();
       check_access = Object.values(check_access);
       check_access = check_access[0].check_access;

       var check_parking = snapshot.val();
       check_parking = Object.values(check_parking);
       check_parking = check_parking[0].check_parking;

       var check_pet = snapshot.val();
       check_pet = Object.values(check_pet);
       check_pet = check_pet[0].check_pet;

       var check_wifi = snapshot.val();
       check_wifi = Object.values(check_wifi);
       check_wifi = check_wifi[0].check_wifi;

       price = convertToRupiah(price);



   }

   document.getElementById("package_name_4"). innerHTML =  name;
   document.getElementById("package_price_4"). innerHTML =  price;
   document.getElementById("package_details_4"). innerHTML =  detail;
   document.getElementById("package_img_url_4"). style.backgroundImage = "url("+img_url+")";

   if (check_access =="true" && check_parking=="true" && check_pet == "true" && check_wifi =="true"){
     document.getElementById("complete_4").style.display="block";
     document.getElementById("wifi_access_parking_4").style.display="none";
     document.getElementById("wifi_access_4").style.display="none";
   } else if(check_access =="true" && check_parking=="true" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_4").style.display="none";
     document.getElementById("wifi_access_parking_4").style.display="block";
     document.getElementById("wifi_access_4").style.display="none";
   } else if (check_access =="true" && check_parking=="false" && check_wifi == "true" && check_pet=="false"){
     document.getElementById("complete_4").style.display="none";
     document.getElementById("wifi_access_parking_4").style.display="none";
     document.getElementById("wifi_access_4").style.display="block";
   } else {
     return null;
   }

   //Rating Query Database Review/Promotion

         var db = firebase.database();
         var refRating = db.ref('Review/').orderByChild('idnumber').equalTo("1004");
         refRating.once('value', snapshot => {
            if (snapshot.exists()) {

              var rating = snapshot.val();
              rating = Object.values(rating);
              rating = rating[0].rating;

            }
            if (rating==1){
              document.getElementById("package_rating_4"). className =  "rating_r rating_r_1 offers_rating";
            } else if(rating==2){
              document.getElementById("package_rating_4"). className =  "rating_r rating_r_2 offers_rating";
            } else if(rating==3){
              document.getElementById("package_rating_4"). className =  "rating_r rating_r_3 offers_rating";
            } else if (rating==4){
              document.getElementById("package_rating_4"). className =  "rating_r rating_r_4 offers_rating";
            }else{
              document.getElementById("package_rating_4"). className =  "rating_r rating_r_5 offers_rating";
            }

          }
        )
     }
   )





firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    document.getElementById("buy_now_1").style.display="block";
    document.getElementById("see_more_1").style.display="none";

    document.getElementById("buy_now_2").style.display="block";
    document.getElementById("see_more_2").style.display="none";

    document.getElementById("buy_now_3").style.display="block";
    document.getElementById("see_more_3").style.display="none";


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





} else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

    document.getElementById("buy_now_1").style.display="none";
    document.getElementById("see_more_1").style.display="block";

    document.getElementById("buy_now_2").style.display="none";
    document.getElementById("see_more_2").style.display="block";

    document.getElementById("buy_now_3").style.display="none";
    document.getElementById("see_more_3").style.display="block";
  }
});


function logout(){
firebase.auth().signOut();
}
