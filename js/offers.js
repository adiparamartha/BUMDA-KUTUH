
                        //  IMPLEMENTATION WITHOUT INPUT //
                        //  IMPLEMENTATION WITHOUT INPUT //

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

function hoteldatepicker(){
	var selected_date = document.getElementById("hotels_check_in_date").value;
	document.getElementById("hotels_check_out_date").setAttribute('min', selected_date);
	getnextday(selected_date);
	document.getElementById("hotels_check_out_date").setAttribute('min', next_selected_date);
	document.getElementById("hotels_check_out_date").value=next_selected_date;
}

inittoday();
inittommorow();

var verify_check_result;

document.getElementById("hotels_check_in_date").value=today;
document.getElementById("hotels_check_out_date").value=tommorow;
document.getElementById("activity_check_in_date").value=today;
document.getElementById("package_check_in_date").value=today;
document.getElementById("promotion_check_in_date").value=today;

document.getElementById("hotels_check_in_date").setAttribute('min', today);
document.getElementById("hotels_check_out_date").setAttribute('min', tommorow);

document.getElementById("activity_check_in_date").setAttribute('min', today);
document.getElementById("package_check_in_date").setAttribute('min', today);
document.getElementById("promotion_check_in_date").setAttribute('min', today);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logged_in").style.display="block";
    document.getElementById("logged_out").style.display="none";

    //AllHotels Menu Button
    document.getElementById("offer1_allhotel_book_button").style.display="block";
    document.getElementById("offer1_allhotel_check_button").style.display="none";

    document.getElementById("offer2_allhotel_book_button").style.display="block";
    document.getElementById("offer2_allhotel_check_button").style.display="none";

    document.getElementById("offer3_allhotel_book_button").style.display="block";
    document.getElementById("offer3_allhotel_check_button").style.display="none";

    document.getElementById("offer4_allhotel_book_button").style.display="block";
    document.getElementById("offer4_allhotel_check_button").style.display="none";

    //PandawaHill Menu Button
    document.getElementById("offer1_pandawahill_book_button").style.display="block";
    document.getElementById("offer1_pandawahill_check_button").style.display="none";

    document.getElementById("offer2_pandawahill_book_button").style.display="block";
    document.getElementById("offer2_pandawahill_check_button").style.display="none";

    //Puri Pandawa Menu Button
    document.getElementById("offer1_puripandawa_book_button").style.display="block";
    document.getElementById("offer1_puripandawa_check_button").style.display="none";

    document.getElementById("offer2_puripandawa_book_button").style.display="block";
    document.getElementById("offer2_puripandawa_check_button").style.display="none";

    //All Activity Menu Button
    document.getElementById("offer1_allactivity_book_button").style.display="block";
    document.getElementById("offer1_allactivity_check_button").style.display="none";

    document.getElementById("offer2_allactivity_book_button").style.display="block";
    document.getElementById("offer2_allactivity_check_button").style.display="none";

    document.getElementById("offer3_allactivity_book_button").style.display="block";
    document.getElementById("offer3_allactivity_check_button").style.display="none";

    //Pandawa Menu Button
    document.getElementById("offer1_pandawa_activity_book_button").style.display="block";
    document.getElementById("offer1_pandawa_activity_check_button").style.display="none";

    document.getElementById("offer2_pandawa_activity_book_button").style.display="block";
    document.getElementById("offer2_pandawa_activity_check_button").style.display="none";

    document.getElementById("offer3_pandawa_activity_book_button").style.display="block";
    document.getElementById("offer3_pandawa_activity_check_button").style.display="none";

    document.getElementById("offer4_pandawa_activity_book_button").style.display="block";
    document.getElementById("offer4_pandawa_activity_check_button").style.display="none";

    document.getElementById("offer5_pandawa_activity_book_button").style.display="block";
    document.getElementById("offer5_pandawa_activity_check_button").style.display="none";

    //GunungPayung Menu Button
    document.getElementById("offer1_gunungpayung_activity_book_button").style.display="block";
    document.getElementById("offer1_gunungpayung_activity_check_button").style.display="none";

    document.getElementById("offer2_gunungpayung_activity_book_button").style.display="block";
    document.getElementById("offer2_gunungpayung_activity_check_button").style.display="none";

    document.getElementById("offer3_gunungpayung_activity_book_button").style.display="block";
    document.getElementById("offer3_gunungpayung_activity_check_button").style.display="none";

    document.getElementById("offer4_gunungpayung_activity_book_button").style.display="block";
    document.getElementById("offer4_gunungpayung_activity_check_button").style.display="none";

    document.getElementById("offer5_gunungpayung_activity_book_button").style.display="block";
    document.getElementById("offer5_gunungpayung_activity_check_button").style.display="none";

    //Timbis Menu Button
    document.getElementById("offer1_timbis_activity_book_button").style.display="block";
    document.getElementById("offer1_timbis_activity_check_button").style.display="none";

    document.getElementById("offer2_timbis_activity_book_button").style.display="block";
    document.getElementById("offer2_timbis_activity_check_button").style.display="none";

    document.getElementById("offer1_timbis_activity_book_button").style.display="block";
    document.getElementById("offer1_timbis_activity_check_button").style.display="none";

    document.getElementById("offer2_timbis_activity_book_button").style.display="block";
    document.getElementById("offer2_timbis_activity_check_button").style.display="none";

    //Promotion
    document.getElementById("offer1_allpromotion_book_button").style.display="block";
    document.getElementById("offer1_allpromotion_check_button").style.display="none";

    document.getElementById("offer2_allpromotion_book_button").style.display="block";
    document.getElementById("offer2_allpromotion_check_button").style.display="none";

    document.getElementById("offer3_allpromotion_book_button").style.display="block";
    document.getElementById("offer3_allpromotion_check_button").style.display="none";

    //Package
    document.getElementById("offer1_allpackage_book_button").style.display="block";
    document.getElementById("offer1_allpackage_check_button").style.display="none";

    document.getElementById("offer2_allpackage_book_button").style.display="block";
    document.getElementById("offer2_allpackage_check_button").style.display="none";

    document.getElementById("offer3_allpackage_book_button").style.display="block";
    document.getElementById("offer3_allpackage_check_button").style.display="none";

    document.getElementById("offer4_allpackage_book_button").style.display="block";
    document.getElementById("offer4_allpackage_check_button").style.display="none";


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

    //AllHotels Menu Button
    document.getElementById("offer1_allhotel_book_button").style.display="none";
    document.getElementById("offer1_allhotel_check_button").style.display="block";

    document.getElementById("offer2_allhotel_book_button").style.display="none";
    document.getElementById("offer2_allhotel_check_button").style.display="block";

    document.getElementById("offer3_allhotel_book_button").style.display="none";
    document.getElementById("offer3_allhotel_check_button").style.display="block";

    document.getElementById("offer4_allhotel_book_button").style.display="none";
    document.getElementById("offer4_allhotel_check_button").style.display="block";

    //PandawaHill Menu Button
    document.getElementById("offer1_pandawahill_book_button").style.display="none";
    document.getElementById("offer1_pandawahill_check_button").style.display="block";

    document.getElementById("offer2_pandawahill_book_button").style.display="none";
    document.getElementById("offer2_pandawahill_check_button").style.display="block";

    //Puri Pandawa Menu Button
    document.getElementById("offer1_puripandawa_book_button").style.display="none";
    document.getElementById("offer1_puripandawa_check_button").style.display="block";

    document.getElementById("offer2_puripandawa_book_button").style.display="none";
    document.getElementById("offer2_puripandawa_check_button").style.display="block";

    //All Activity Menu Button
    document.getElementById("offer1_allactivity_book_button").style.display="none";
    document.getElementById("offer1_allactivity_check_button").style.display="block";

    document.getElementById("offer2_allactivity_book_button").style.display="none";
    document.getElementById("offer2_allactivity_check_button").style.display="block";

    document.getElementById("offer3_allactivity_book_button").style.display="none";
    document.getElementById("offer3_allactivity_check_button").style.display="block";

    //Pandawa Menu Button
    document.getElementById("offer1_pandawa_activity_book_button").style.display="none";
    document.getElementById("offer1_pandawa_activity_check_button").style.display="block";

    document.getElementById("offer2_pandawa_activity_book_button").style.display="none";
    document.getElementById("offer2_pandawa_activity_check_button").style.display="block";

    document.getElementById("offer3_pandawa_activity_book_button").style.display="none";
    document.getElementById("offer3_pandawa_activity_check_button").style.display="block";

    document.getElementById("offer4_pandawa_activity_book_button").style.display="none";
    document.getElementById("offer4_pandawa_activity_check_button").style.display="block";

    document.getElementById("offer5_pandawa_activity_book_button").style.display="none";
    document.getElementById("offer5_pandawa_activity_check_button").style.display="block";

    //GunungPayung Menu Button
    document.getElementById("offer1_gunungpayung_activity_book_button").style.display="none";
    document.getElementById("offer1_gunungpayung_activity_check_button").style.display="block";

    document.getElementById("offer2_gunungpayung_activity_book_button").style.display="none";
    document.getElementById("offer2_gunungpayung_activity_check_button").style.display="block";

    document.getElementById("offer3_gunungpayung_activity_book_button").style.display="none";
    document.getElementById("offer3_gunungpayung_activity_check_button").style.display="block";

    document.getElementById("offer4_gunungpayung_activity_book_button").style.display="none";
    document.getElementById("offer4_gunungpayung_activity_check_button").style.display="block";

    document.getElementById("offer5_gunungpayung_activity_book_button").style.display="none";
    document.getElementById("offer5_gunungpayung_activity_check_button").style.display="block";

    //Timbis Menu Button
    document.getElementById("offer1_timbis_activity_book_button").style.display="none";
    document.getElementById("offer1_timbis_activity_check_button").style.display="block";

    document.getElementById("offer2_timbis_activity_book_button").style.display="none";
    document.getElementById("offer2_timbis_activity_check_button").style.display="block";

    document.getElementById("offer1_timbis_activity_book_button").style.display="none";
    document.getElementById("offer1_timbis_activity_check_button").style.display="block";

    document.getElementById("offer2_timbis_activity_book_button").style.display="none";
    document.getElementById("offer2_timbis_activity_check_button").style.display="block";

    //Promotion
    document.getElementById("offer1_allpromotion_book_button").style.display="none";
    document.getElementById("offer1_allpromotion_check_button").style.display="block";

    document.getElementById("offer2_allpromotion_book_button").style.display="none";
    document.getElementById("offer2_allpromotion_check_button").style.display="block";

    document.getElementById("offer3_allpromotion_book_button").style.display="none";
    document.getElementById("offer3_allpromotion_check_button").style.display="block";

    //Package
    document.getElementById("offer1_allpackage_book_button").style.display="none";
    document.getElementById("offer1_allpackage_check_button").style.display="block";

    document.getElementById("offer2_allpackage_book_button").style.display="none";
    document.getElementById("offer2_allpackage_check_button").style.display="block";

    document.getElementById("offer3_allpackage_book_button").style.display="none";
    document.getElementById("offer3_allpackage_check_button").style.display="block";

    document.getElementById("offer4_allpackage_book_button").style.display="none";
    document.getElementById("offer4_allpackage_check_button").style.display="block";

  }
});

function verify_check(){
    var user = firebase.auth().currentUser;
    var verified_status = user.emailVerified;
    
    if (verified_status == false){
        alert("Please Verify Your Account to Create an Order, Thank You")
        window.location="profile.html";
      }
}

function date_selector(today,tommorow){
  var day_details= today.substr(8,2);
  var month_details= today.substr(5,2);
  var year_details = today.substr(0,4)

  var next_day_details_out= tommorow.substr(8,2);
  var month_details_out= tommorow.substr(5,2);
  var year_details_out = tommorow.substr(0,4)

  if(month_details==01){
    month_details="Januari";
  }
  else if (month_details==02) {
    month_details="Februari";
  }
  else if (month_details==03) {
    month_details="Maret";
  }
  else if (month_details==04){
    month_details="April";
  }
  else if (month_details==05) {
    month_details="Mei";
  }
  else if (month_details==06) {
    month_details="Juni";
  }
  else if (month_details==07){
    month_details="Juli";
  }
  else if (month_details==08) {
    month_details="Agustus";
  }
  else if (month_details==09) {
    month_details="September";
  }
  else if (month_details==10){
    month_details="Oktober";
  }
  else if (month_details==11) {
    month_details="November";
  }
  else{
    month_details="Desember";
  }

  //NExt Day

  if(month_details_out==01){
    month_details_out="Januari";
  }
  else if (month_details_out==02) {
    month_details_out="Februari";

  }
  else if (month_details_out==03) {
    month_details_out="Maret";
  }
  else if (month_details_out==04){
    month_details_out="April";
  }
  else if (month_details_out==05) {
    month_details_out="Mei";
  }
  else if (month_details_out==06) {
    month_details_out="Juni";
  }
  else if (month_details_out==07){
    month_details_out="Juli";
  }
  else if (month_details_out==08) {
    month_details_out="Agustus";
  }
  else if (month_details_out==09) {
    month_details_out="September";
  }
  else if (month_details_out==10){
    month_details_out="Oktober";
  }
  else if (month_details_out==11) {
    month_details_out="November";
  }
  else{
    month_details_out="Desember";
  }

  new_date_details = day_details + " " + month_details + " " + year_details;
  new_next_date_details = next_day_details_out + " " + month_details_out + " " + year_details_out;

  return new_date_details;
  return new_next_date_details;

}

function logout(){
firebase.auth().signOut();
}

function convertToRupiah(angka){
	var rupiah = '';
	var value = angka.toString().split('').reverse().join('');
	for(var i = 0; i < value.length; i++) if(i%3 == 0) rupiah += value.substr(i,3)+'.';
	return 'Rp, '+rupiah.split('',rupiah.length-1).reverse().join('');
}

                        //  IMPLEMENTATION WITH INPUT //
                        //  IMPLEMENTATION WITH INPUT //


var categories_details = sessionStorage.getItem("categories");
var dest_name_details = sessionStorage.getItem("destination_name");
var check_in_details = sessionStorage.getItem("check_in_date");
var check_out_details = sessionStorage.getItem("check_out_date");
var adults_details = sessionStorage.getItem("adults_total");
var children_details = sessionStorage.getItem("children_total");

var current_tab = sessionStorage.getItem("active_tab");

if(categories_details!=null){

    var pandawa_check_in_date_details = sessionStorage.getItem("pandawa_check_in_date");
    var pandawa_adults_total_details = sessionStorage.getItem("pandawa_adults_total");
    var pandawa_children_total_details = sessionStorage.getItem("pandawa_children_total");

    var gunungpayung_check_in_date_details = sessionStorage.getItem("gunungpayung_check_in_date");
    var gunungpayung_adults_total_details = sessionStorage.getItem("gunungpayung_adults_total");
    var gunungpayung_children_total_details = sessionStorage.getItem("gunungpayung_children_total");

    var timbis_check_in_date_details = sessionStorage.getItem("timbis_check_in_date");
    var timbis_adults_total_details = sessionStorage.getItem("timbis_adults_total");
    var timbis_children_total_details = sessionStorage.getItem("timbis_children_total");


    if (categories_details=="hotel"){

              if (dest_name_details==1){

                puripandawacall();
                document.getElementById("hotels_state_control").value=1;

                date_selector(check_in_details,check_out_details);

                if (children_details==0){
                  document.getElementById("selected_date").innerHTML="Puri Pandawa | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults";

                }
                else{
                  document.getElementById("selected_date").innerHTML="Puri Pandawa | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults | " + children_details + " Children";

                }

                document.getElementById("hotels_check_in_date").value=check_in_details;
                document.getElementById("hotels_check_out_date").value=check_out_details;
                document.getElementById("hotels_total_adults").value=adults_details;
                document.getElementById("hotels_total_children").value=children_details;


              }
              else if(dest_name_details==2){

                pandawahillcall();
                document.getElementById("hotels_state_control").value=2;

                date_selector(check_in_details,check_out_details);

                if (children_details==0){
                  document.getElementById("selected_date").innerHTML="Pandawa Hill | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults";

                }
                else{
                  document.getElementById("selected_date").innerHTML="Pandawa Hill | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults | " + children_details + " Children";

                }

                document.getElementById("hotels_check_in_date").value=check_in_details;
                document.getElementById("hotels_check_out_date").value=check_out_details;
                document.getElementById("hotels_total_adults").value=adults_details;
                document.getElementById("hotels_total_children").value=children_details;

              }
              else{

                allhotels();

                date_selector(check_in_details,check_out_details);

                if (children_details==0){
                  document.getElementById("selected_date").innerHTML="Hotels | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults";

                }
                else{
                  document.getElementById("selected_date").innerHTML="Hotels | " + new_date_details + " - " + new_next_date_details + " | "+ adults_details + " Adults | " + children_details + " Children";

                }

                document.getElementById("hotels_check_in_date").value=check_in_details;
                document.getElementById("hotels_check_out_date").value=check_out_details;
                document.getElementById("hotels_total_adults").value=adults_details;
                document.getElementById("hotels_total_children").value=children_details;
              }

              sessionStorage.removeItem("categories");
    }

    else if (categories_details=="pandawa"){

      pandawabeachcall();

      document.getElementById("activity_tab").classList.add("active");
      document.getElementById("hotels_tab").classList.remove("active");

      document.getElementById("search_hotels_tab").classList.remove("active");
      document.getElementById("search_activity_tab").classList.add("active");

      document.getElementById("activity_state_control").value=1;

      document.getElementById("activity_check_in_date").value=pandawa_check_in_date_details;
      document.getElementById("activity_total_adults").value=pandawa_adults_total_details;
      document.getElementById("activity_total_children").value=pandawa_children_total_details;

      date_selector(pandawa_check_in_date_details,pandawa_check_in_date_details);

      document.getElementById("selected_date").style.display="none";
      document.getElementById("selected_date_pandawa").style.display="block";
      document.getElementById("selected_date_gunungpayung").style.display="none";
      document.getElementById("selected_date_timbis").style.display="none";
      document.getElementById("selected_date_allfunction").style.display="none";

      if(pandawa_children_total_details==0){
        document.getElementById("selected_date_pandawa").innerHTML="Pandawa Beach | " +new_date_details +  " | "+ pandawa_adults_total_details + " Adults";

      }

      else{
      document.getElementById("selected_date_pandawa").innerHTML="Pandawa Beach | " +new_date_details +  " | "+ pandawa_adults_total_details + " Adults | " + pandawa_children_total_details + " Children";
      }

      console.log(pandawa_check_in_date_details);
      console.log(pandawa_adults_total_details);
      console.log(pandawa_children_total_details);

      sessionStorage.clear();

    }

    else if (categories_details=="gunungpayung"){

      gunungpayungcall();

      document.getElementById("activity_tab").classList.add("active");
      document.getElementById("hotels_tab").classList.remove("active");

      document.getElementById("search_hotels_tab").classList.remove("active");
      document.getElementById("search_activity_tab").classList.add("active");

      document.getElementById("activity_state_control").value=2;

      document.getElementById("activity_check_in_date").value=gunungpayung_check_in_date_details;
      document.getElementById("activity_total_adults").value=gunungpayung_adults_total_details;
      document.getElementById("activity_total_children").value=gunungpayung_children_total_details;

      date_selector(gunungpayung_check_in_date_details,gunungpayung_check_in_date_details);

      document.getElementById("selected_date").style.display="none";
      document.getElementById("selected_date_pandawa").style.display="none";
      document.getElementById("selected_date_gunungpayung").style.display="block";
      document.getElementById("selected_date_timbis").style.display="none";
      document.getElementById("selected_date_allfunction").style.display="none";

      if(gunungpayung_children_total_details==0){
        document.getElementById("selected_date_gunungpayung").innerHTML="Gunung Payung | " +new_date_details +  " | "+ gunungpayung_adults_total_details + " Adults";

      }

      else{
      document.getElementById("selected_date_gunungpayung").innerHTML="Gunung Payung | " +new_date_details +  " | "+ gunungpayung_adults_total_details + " Adults | " + gunungpayung_children_total_details + " Children";
      }

      console.log(gunungpayung_check_in_date_details);
      console.log(gunungpayung_adults_total_details);
      console.log(gunungpayung_children_total_details);

      sessionStorage.clear();

    }

    else if (categories_details=="timbis"){

      timbiscall();

      document.getElementById("activity_tab").classList.add("active");
      document.getElementById("hotels_tab").classList.remove("active");

      document.getElementById("search_hotels_tab").classList.remove("active");
      document.getElementById("search_activity_tab").classList.add("active");

      document.getElementById("activity_state_control").value=3;

      document.getElementById("activity_check_in_date").value=timbis_check_in_date_details;
      document.getElementById("activity_total_adults").value=timbis_adults_total_details;
      document.getElementById("activity_total_children").value=timbis_children_total_details;

      date_selector(timbis_check_in_date_details,timbis_check_in_date_details);

      document.getElementById("selected_date").style.display="none";
      document.getElementById("selected_date_pandawa").style.display="none";
      document.getElementById("selected_date_gunungpayung").style.display="none";
      document.getElementById("selected_date_timbis").style.display="block";
      document.getElementById("selected_date_allfunction").style.display="none";

      if(timbis_children_total_details==0){
        document.getElementById("selected_date_timbis").innerHTML="Timbis Paragliding | " +new_date_details +  " | "+ timbis_adults_total_details + " Adults";
      }

      else{
      document.getElementById("selected_date_timbis").innerHTML="Timbis Paragliding | " +new_date_details +  " | "+ timbis_adults_total_details + " Adults | " + timbis_children_total_details + " Children";
      }

      console.log(timbis_check_in_date_details);
      console.log(timbis_adults_total_details);
      console.log(timbis_children_total_details);

      sessionStorage.clear();
      }
    }

      else {

        if(current_tab == "hotels" || current_tab==null){
          document.getElementById("hotels_tab").classList.add("active");
          document.getElementById("activity_tab").classList.remove("active");
          document.getElementById("package_tab").classList.remove("active");
          document.getElementById("promotion_tab").classList.remove("active");
          allhotels();
          hotels_search();

          document.getElementById("search_hotels_tab").classList.add("active")
          document.getElementById("search_activity_tab").classList.remove("active");
          document.getElementById("search_package_tab").classList.remove("active");
          document.getElementById("search_promotion_tab").classList.remove("active");
        }
        else if(current_tab == "activity"){
          document.getElementById("hotels_tab").classList.remove("active");
          document.getElementById("activity_tab").classList.add("active");
          document.getElementById("package_tab").classList.remove("active");
          document.getElementById("promotion_tab").classList.remove("active");
          allactivity();
          activity_search();

          document.getElementById("search_hotels_tab").classList.remove("active")
          document.getElementById("search_activity_tab").classList.add("active");
          document.getElementById("search_package_tab").classList.remove("active");
          document.getElementById("search_promotion_tab").classList.remove("active");

        }
        else if(current_tab == "package"){
          document.getElementById("hotels_tab").classList.remove("active");
          document.getElementById("activity_tab").classList.remove("active");
          document.getElementById("package_tab").classList.add("active");
          document.getElementById("promotion_tab").classList.remove("active");
          allpackage();
          package_search();

          document.getElementById("search_hotels_tab").classList.remove("active")
          document.getElementById("search_activity_tab").classList.remove("active");
          document.getElementById("search_package_tab").classList.add("active");
          document.getElementById("search_promotion_tab").classList.remove("active");

        }
        else if (current_tab == "promotion"){
          document.getElementById("hotels_tab").classList.remove("active");
          document.getElementById("activity_tab").classList.remove("active");
          document.getElementById("package_tab").classList.remove("active");
          document.getElementById("promotion_tab").classList.add("active");
          allpromotion();
          promotion_search();

          document.getElementById("search_hotels_tab").classList.remove("active")
          document.getElementById("search_activity_tab").classList.remove("active");
          document.getElementById("search_package_tab").classList.remove("active");
          document.getElementById("search_promotion_tab").classList.add("active");

        }
}

//end of index.html request decision

function hotels_search_check(){
    
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
    	   hotels_search();
	  }
	  else{
	      alert("Please Check you Booking Date")
	  }
	  
	  return false;
}


function hotels_search(){

  var hotels_select = document.getElementById("hotels_state_control").value;
  var hotels_checkin = document.getElementById("hotels_check_in_date").value;
  var hotels_checkout = document.getElementById("hotels_check_out_date").value;
  var hotels_adults_total = document.getElementById("hotels_total_adults").value;
  var hotels_children_total = document.getElementById("hotels_total_children").value;

  date_selector(hotels_checkin,hotels_checkout);

  document.getElementById("selected_date").innerHTML=new_date_details + " - " + new_next_date_details;

    if (hotels_select==0) {
      allhotels();

      if (hotels_children_total==0){
        document.getElementById("selected_date").innerHTML="Hotels | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults";

      }
      else{
        document.getElementById("selected_date").innerHTML="Hotels | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults | " + hotels_children_total + " Children";

      }
    }
    else if(hotels_select==1){
      puripandawacall();

      if (hotels_children_total==0){
        document.getElementById("selected_date").innerHTML="Puri Pandawa | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults";

      }
      else{
        document.getElementById("selected_date").innerHTML="Puri Pandawa | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults | " + hotels_children_total + " Children";

      }
    }
    else if(hotels_select==2){
      pandawahillcall();
      if (hotels_children_total==0){
        document.getElementById("selected_date").innerHTML="Pandawa Hill | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults";

      }
      else{
        document.getElementById("selected_date").innerHTML="Pandawa Hill | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults | " + hotels_children_total + " Children";

      }
    }

    return false;

  }

function pandawahillcall(){
  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="block";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

  var hotels_checkin = document.getElementById("hotels_check_in_date").value;
  var hotels_checkout = document.getElementById("hotels_check_out_date").value;
  var hotels_adults_total = document.getElementById("hotels_total_adults").value;
  var hotels_children_total = document.getElementById("hotels_total_children").value;

  date_selector(hotels_checkin,hotels_checkout);

  document.getElementById("selected_date").innerHTML="Pandawa Hill | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults";


document.getElementById("pandawahill_offer_1").style.display="block";
var db = firebase.database();
var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("601");
ref.once('value', snapshot => {
   if (snapshot.exists()) {
       var name = snapshot.val();
       var price = snapshot.val();
       var detail = snapshot.val();
       var img_url = snapshot.val();

       name = Object.values(name);
       name = name[0].name;

       price = Object.values(price);
       price = price[0].price ;

       detail = Object.values(detail);
       detail = detail[0].detail ;

       img_url = Object.values(img_url);
       img_url = img_url[0].img_url ;

       price = convertToRupiah(price);

       document.getElementById("pandawahill_img_offer_1"). style.backgroundImage = "url("+img_url+")";

       document.getElementById("pandawahill_text_offer_1"). innerHTML =  name;
       document.getElementById("pandawahill_price_offer_1"). innerHTML =    price;
       document.getElementById("pandawahill_detail_offer_1"). innerHTML =  detail;

   }
 }
)

document.getElementById("pandawahill_offer_2").style.display="block";
var db = firebase.database();
var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("602");
ref.once('value', snapshot => {
  if (snapshot.exists()) {
      var name = snapshot.val();
      var price = snapshot.val();
      var detail = snapshot.val();
      var img_url = snapshot.val();

      name = Object.values(name);
      name = name[0].name;

      price = Object.values(price);
      price = price[0].price ;

      detail = Object.values(detail);
      detail = detail[0].detail ;

      img_url = Object.values(img_url);
      img_url = img_url[0].img_url ;

      price = convertToRupiah(price);

      document.getElementById("pandawahill_img_offer_2"). style.backgroundImage = "url("+img_url+")";

      document.getElementById("pandawahill_text_offer_2"). innerHTML =  name;
      document.getElementById("pandawahill_price_offer_2"). innerHTML =  price;
      document.getElementById("pandawahill_detail_offer_2"). innerHTML =  detail;

  }
}
)
return false;
}

function puripandawacall(){
  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="block";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

  var hotels_checkin = document.getElementById("hotels_check_in_date").value;
  var hotels_checkout = document.getElementById("hotels_check_out_date").value;
  var hotels_adults_total = document.getElementById("hotels_total_adults").value;
  var hotels_children_total = document.getElementById("hotels_total_children").value;

  date_selector(hotels_checkin,hotels_checkout);

  document.getElementById("selected_date").innerHTML="Puri Pandawa | " + new_date_details + " - " + new_next_date_details + " | "+ hotels_adults_total + " Adults";


   document.getElementById("puripandawa_offer_1").style.display="block";
    var db = firebase.database();
    var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("501");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("puripandawa_img_offer_1"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("puripandawa_text_offer_1"). innerHTML =  name;
           document.getElementById("puripandawa_price_offer_1"). innerHTML =    price;
           document.getElementById("puripandawa_detail_offer_1"). innerHTML =  detail;

       }
     }
   )

   document.getElementById("puripandawa_offer_1").style.display="block";
    var db = firebase.database();
    var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("502");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("puripandawa_img_offer_2"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("puripandawa_text_offer_2"). innerHTML =  name;
           document.getElementById("puripandawa_price_offer_2"). innerHTML =    price;
           document.getElementById("puripandawa_detail_offer_2"). innerHTML =  detail;

       }
     }
   )
   return false;
}

function activity_search(){
var activity_select = document.getElementById("activity_state_control").value;
var activity_checkin = document.getElementById("activity_check_in_date").value;
var activity_adults_total = document.getElementById("activity_total_adults").value;
var activity_children_total = document.getElementById("activity_total_children").value;

date_selector(activity_checkin,activity_checkin);

document.getElementById("selected_date").innerHTML=new_date_details;

  if (activity_select==0) {
    allactivity();

    if(activity_children_total==0){
      document.getElementById("selected_date_allfunction").innerHTML="Activities | " +new_date_details +  " | "+ activity_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_allfunction").innerHTML="Activities | " +new_date_details +  " | "+ activity_adults_total + " Adults | " + activity_children_total + " Children";
    }
  }
  else if(activity_select==1){
    pandawabeachcall();

    if(activity_children_total==0){
      document.getElementById("selected_date_pandawa").innerHTML="Pandawa Beach | " +new_date_details +  " | "+ activity_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_pandawa").innerHTML="Pandawa Beach | " +new_date_details +  " | "+ activity_adults_total + " Adults | " + activity_children_total + " Children";
    }
  }
  else if(activity_select==2){
    gunungpayungcall();

    if(activity_children_total==0){
      document.getElementById("selected_date_gunungpayung").innerHTML="Gunung Payung | " +new_date_details +  " | "+ activity_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_gunungpayung").innerHTML="Gunung Payung | " +new_date_details +  " | "+ activity_adults_total + " Adults | " + activity_children_total + " Children";
    }

  }
  else if(activity_select==3){
    timbiscall();

    if(activity_children_total==0){
      document.getElementById("selected_date_timbis").innerHTML="Timbis Paragliding | " +new_date_details +  " | "+ activity_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_timbis").innerHTML="Timbis Paragliding | " +new_date_details +  " | "+ activity_adults_total + " Adults | " + activity_children_total + " Children";
    }
  }

  return false;

}

function package_search(){
  var package_select = document.getElementById("package_state_control").value;
  var package_checkin = document.getElementById("package_check_in_date").value;
  var package_adults_total = document.getElementById("package_total_adults").value;
  var package_children_total = document.getElementById("package_total_children").value;

  date_selector(package_checkin,package_checkin);

  if (package_select==0) {
    allpackage();
    if(package_children_total==0){
      document.getElementById("selected_date_allfunction").innerHTML="Package | " +new_date_details +  " | "+ package_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_allfunction").innerHTML="Package | " +new_date_details +  " | "+ package_adults_total + " Adults | " + package_children_total + " Children";
    }
  }
  else if(package_select==1){
    honeymoonpackagecall();
  }
  else if(package_select==2){
    familypackagecall();
  }
  else if(package_select==3){
    grouppackagecall();
  }
  else if(package_select==4){
    custompackagecall();
  }

  return false;

}

function promotion_search(){
  var promotion_select = document.getElementById("promotion_state_control").value;
  var promotion_checkin = document.getElementById("promotion_check_in_date").value;
  var promotion_adults_total = document.getElementById("promotion_total_adults").value;
  var promotion_children_total = document.getElementById("promotion_total_children").value;

  date_selector(promotion_checkin,promotion_checkin);

  if (promotion_select==0) {
    allpromotion();
    if(promotion_children_total==0){
      document.getElementById("selected_date_allfunction").innerHTML="Promotion | " +new_date_details +  " | "+ promotion_adults_total + " Adults";
    }

    else{
    document.getElementById("selected_date_allfunction").innerHTML="Promotion | " +new_date_details +  " | "+ promotion_adults_total + " Adults | " + promotion_children_total + " Children";
    }
  }
  else if(promotion_select==1){
    pandawabeachcall();
  }
  else if(promotion_select==2){
    gunungpayungcall();
  }
  else if(promotion_select==3){
    timbiscall();
  }

  return false;

}

function allhotels(){

  sessionStorage.setItem("active_tab","hotels")

  document.getElementById("selected_date").style.display="block";
  document.getElementById("selected_date_pandawa").style.display="none";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="none";
  document.getElementById("selected_date_allfunction").style.display="none";

  document.getElementById("allpost_hotels").style.display="block";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

  var hotels_checkin = document.getElementById("hotels_check_in_date").value;
  var hotels_checkout = document.getElementById("hotels_check_out_date").value;
  var inithotels_adults= document.getElementById("hotels_total_adults").value;
  var inithotels_child = document.getElementById("hotels_total_children").value;

  date_selector(hotels_checkin,hotels_checkout);

  if (inithotels_child==0){
    document.getElementById("selected_date").innerHTML="Hotels |" + new_date_details + " - " +new_next_date_details + " | "+ inithotels_adults + " Adults";
  }
  else{
    document.getElementById("selected_date").innerHTML="Hotels | " + new_date_details + " - " +new_next_date_details + " | "+ inithotels_adults + " Adults | " + inithotels_child + " Children";
  }

  document.getElementById("allhotels_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("601");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allhotels_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allhotels_text_offer_1"). innerHTML =  name;
         document.getElementById("allhotels_price_offer_1"). innerHTML =    price;
         document.getElementById("allhotels_detail_offer_1"). innerHTML =  detail;

     }
   }
  )

  document.getElementById("allhotels_offer_2").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("602");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allhotels_img_offer_2"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allhotels_text_offer_2"). innerHTML =  name;
         document.getElementById("allhotels_price_offer_2"). innerHTML =    price;
         document.getElementById("allhotels_detail_offer_2"). innerHTML =  detail;

     }
   }
  )

  //Offer_2
  document.getElementById("allhotels_offer_3").style.display="block";
   var db = firebase.database();
   var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("501");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allhotels_img_offer_3"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allhotels_text_offer_3"). innerHTML =  name;
          document.getElementById("allhotels_price_offer_3"). innerHTML =    price;
          document.getElementById("allhotels_detail_offer_3"). innerHTML =  detail;

      }
    }
  )

  //Offer_2
  document.getElementById("allhotels_offer_4").style.display="block";
   var db = firebase.database();
   var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("502");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allhotels_img_offer_4"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allhotels_text_offer_4"). innerHTML =  name;
          document.getElementById("allhotels_price_offer_4"). innerHTML =    price;
          document.getElementById("allhotels_detail_offer_4"). innerHTML =  detail;

      }
    }
  )

}

function allactivity(){

  sessionStorage.setItem("active_tab","activity");

  var initactivity_checkin = document.getElementById("activity_check_in_date").value;
  var initactivity_adults = document.getElementById("activity_total_adults").value;
  var initactivity_childern = document.getElementById("activity_total_children").value;

  date_selector(initactivity_checkin,initactivity_checkin);

  if (initactivity_childern==0){
    document.getElementById("selected_date_allfunction").innerHTML="Activities | " + new_date_details + " | "+ initactivity_adults + " Adults";
  }
  else{
    document.getElementById("selected_date_allfunction").innerHTML="Activities | " + new_date_details + " | "+ initactivity_adults + " Adults | " + initactivity_childern + " Children";
  }

  document.getElementById("selected_date").style.display="none";
  document.getElementById("selected_date_pandawa").style.display="none";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="none";
  document.getElementById("selected_date_allfunction").style.display="block";

  document.getElementById("activity_state_control").value=0;

  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="block";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

  document.getElementById("allactivity_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("103");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allactivity_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allactivity_text_offer_1"). innerHTML =  name;
         document.getElementById("allactivity_price_offer_1"). innerHTML =    price;
         document.getElementById("allactivity_detail_offer_1"). innerHTML =  detail;

     }
   }

 )

 //Offer_2
   document.getElementById("allactivity_offer_2").style.display="block";
   var db = firebase.database();
   var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("202");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allactivity_img_offer_2"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allactivity_text_offer_2"). innerHTML =  name;
          document.getElementById("allactivity_price_offer_2"). innerHTML =    price;
          document.getElementById("allactivity_detail_offer_2"). innerHTML =  detail;

      }
    }
  )

  //Offer_3
    document.getElementById("allactivity_offer_3").style.display="block";
    var db = firebase.database();
    var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("301");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("allactivity_img_offer_3"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("allactivity_text_offer_3"). innerHTML =  name;
           document.getElementById("allactivity_price_offer_3"). innerHTML =    price;
           document.getElementById("allactivity_detail_offer_3"). innerHTML =  detail;

       }
     }
   )
}

function allpackage(){

  sessionStorage.setItem("active_tab","package")

  var initpackage_checkin = document.getElementById("package_check_in_date").value;
  var initpackage_adults = document.getElementById("package_total_adults").value;
  var initpackage_childern = document.getElementById("package_total_children").value;

  date_selector(initpackage_checkin,initpackage_checkin);

  if (initpackage_childern==0){
    document.getElementById("selected_date_allfunction").innerHTML="Package | " + new_date_details +" | "+ initpackage_adults + " Adults";
  }
  else{
    document.getElementById("selected_date_allfunction").innerHTML="Package | " + new_date_details +" | "+ initpackage_adults + " Adults | " + initpackage_childern + " Children";
  }

  document.getElementById("selected_date").style.display="none";
  document.getElementById("selected_date_pandawa").style.display="none";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="none";
  document.getElementById("selected_date_allfunction").style.display="block";

  document.getElementById("package_state_control").value=0;

  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="block";
  document.getElementById("allpost_promotion").style.display="none";


  document.getElementById("allpackage_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Package').orderByChild('idnumber').equalTo("1001");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allpackage_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allpackage_text_offer_1"). innerHTML =  name;
         document.getElementById("allpackage_price_offer_1"). innerHTML =    price;
         document.getElementById("allpackage_detail_offer_1"). innerHTML =  detail;

     }
   }
  )

  document.getElementById("allpackage_offer_2").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Package').orderByChild('idnumber').equalTo("1002");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allpackage_img_offer_2"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allpackage_text_offer_2"). innerHTML =  name;
         document.getElementById("allpackage_price_offer_2"). innerHTML =    price;
         document.getElementById("allpackage_detail_offer_2"). innerHTML =  detail;

     }
   }
  )

  //Offer_2
  document.getElementById("allpackage_offer_3").style.display="block";
   var db = firebase.database();
   var ref = db.ref('Package').orderByChild('idnumber').equalTo("1003");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allpackage_img_offer_3"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allpackage_text_offer_3"). innerHTML =  name;
          document.getElementById("allpackage_price_offer_3"). innerHTML =    price;
          document.getElementById("allpackage_detail_offer_3"). innerHTML =  detail;

      }
    }
  )

  //Offer_2
  document.getElementById("allpackage_offer_4").style.display="block";
   var db = firebase.database();
   var ref = db.ref('Package').orderByChild('idnumber').equalTo("1004");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allpackage_img_offer_4"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allpackage_text_offer_4"). innerHTML =  name;
          document.getElementById("allpackage_price_offer_4"). innerHTML =    price;
          document.getElementById("allpackage_detail_offer_4"). innerHTML =  detail;

      }
    }
  )

}

function allpromotion(){

  sessionStorage.setItem("active_tab","promotion")

  var initpromotion_checkin = document.getElementById("promotion_check_in_date").value;
  var initpromotion_adults = document.getElementById("promotion_total_adults").value;
  var initpromotion_childern = document.getElementById("promotion_total_children").value;

  date_selector(initpromotion_checkin,initpromotion_checkin);

  if (initpromotion_childern==0){
    document.getElementById("selected_date_allfunction").innerHTML="Promotion | " + new_date_details +" | "+ initpromotion_adults + " Adults";
  }
  else{
    document.getElementById("selected_date_allfunction").innerHTML="Promotion | " + new_date_details +" | "+ initpromotion_adults + " Adults | " + initpromotion_childern + " Children";
  }

  document.getElementById("selected_date").style.display="none";
  document.getElementById("selected_date_pandawa").style.display="none";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="none";
  document.getElementById("selected_date_allfunction").style.display="block";

  document.getElementById("promotion_state_control").value=0;

  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="block";


  document.getElementById("allpromotion_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("001");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allpromotion_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allpromotion_text_offer_1"). innerHTML =  name;
         document.getElementById("allpromotion_price_offer_1"). innerHTML =    price;
         document.getElementById("allpromotion_detail_offer_1"). innerHTML =  detail;

     }
   }
  )

  document.getElementById("allpromotion_offer_2").style.display="block";
  var db = firebase.database();
  var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("002");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("allpromotion_img_offer_2"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("allpromotion_text_offer_2"). innerHTML =  name;
         document.getElementById("allpromotion_price_offer_2"). innerHTML =    price;
         document.getElementById("allpromotion_detail_offer_2"). innerHTML =  detail;

     }
   }
  )

  //Offer_2
  document.getElementById("allpromotion_offer_3").style.display="block";
   var db = firebase.database();
   var ref = db.ref('Promotion').orderByChild('idnumber').equalTo("003");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("allpromotion_img_offer_3"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("allpromotion_text_offer_3"). innerHTML =  name;
          document.getElementById("allpromotion_price_offer_3"). innerHTML =    price;
          document.getElementById("allpromotion_detail_offer_3"). innerHTML =  detail;

      }
    }
  )
}

function pandawabeachcall(){

  document.getElementById("selected_date").style.display="none";
  document.getElementById("selected_date_pandawa").style.display="block";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="none";
  document.getElementById("selected_date_allfunction").style.display="none";

  var activity_checkin = document.getElementById("activity_check_in_date").value;

  date_selector(activity_checkin,activity_checkin);

  document.getElementById("selected_date_pandawa").innerHTML="Pandawa Beach - " +new_date_details;

  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="block";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="none";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

  document.getElementById("pandawa_activity_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("101");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("pandawa_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("pandawa_activity_text_offer_1"). innerHTML =  name;
         document.getElementById("pandawa_activity_price_offer_1"). innerHTML =    price;
         document.getElementById("pandawa_activity_detail_offer_1"). innerHTML =  detail;

     }
   }

 )

 //Offer_2
   document.getElementById("pandawa_activity_offer_2").style.display="block";
   var db = firebase.database();
   var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("102");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("pandawa_img_offer_2"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("pandawa_activity_text_offer_2"). innerHTML =  name;
          document.getElementById("pandawa_activity_price_offer_2"). innerHTML =    price;
          document.getElementById("pandawa_activity_detail_offer_2"). innerHTML =  detail;

      }
    }
  )

  //Offer_3
    document.getElementById("pandawa_activity_offer_3").style.display="block";
    var db = firebase.database();
    var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("103");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("pandawa_img_offer_3"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("pandawa_activity_text_offer_3"). innerHTML =  name;
           document.getElementById("pandawa_activity_price_offer_3"). innerHTML =    price;
           document.getElementById("pandawa_activity_detail_offer_3"). innerHTML =  detail;

       }
     }
   )

   //Offer_4
    document.getElementById("pandawa_activity_offer_4").style.display="block";
     var db = firebase.database();
     var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("104");
     ref.once('value', snapshot => {
        if (snapshot.exists()) {
            var name = snapshot.val();
            var price = snapshot.val();
            var detail = snapshot.val();
            var img_url = snapshot.val();

            name = Object.values(name);
            name = name[0].name;

            price = Object.values(price);
            price = price[0].price ;

            detail = Object.values(detail);
            detail = detail[0].detail ;

            img_url = Object.values(img_url);
            img_url = img_url[0].img_url ;

            price = convertToRupiah(price);

            document.getElementById("pandawa_img_offer_4"). style.backgroundImage = "url("+img_url+")";

            document.getElementById("pandawa_activity_text_offer_4"). innerHTML =  name;
            document.getElementById("pandawa_activity_price_offer_4"). innerHTML =    price;
            document.getElementById("pandawa_activity_detail_offer_4"). innerHTML =  detail;
        }
      }
    )

    //Offer_5
      document.getElementById("pandawa_activity_offer_5").style.display="block";
      var db = firebase.database();
      var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("105");
      ref.once('value', snapshot => {
         if (snapshot.exists()) {
             var name = snapshot.val();
             var price = snapshot.val();
             var detail = snapshot.val();
             var img_url = snapshot.val();

             name = Object.values(name);
             name = name[0].name;

             price = Object.values(price);
             price = price[0].price ;

             detail = Object.values(detail);
             detail = detail[0].detail ;

             img_url = Object.values(img_url);
             img_url = img_url[0].img_url ;

             price = convertToRupiah(price);

             document.getElementById("pandawa_img_offer_5"). style.backgroundImage = "url("+img_url+")";

             document.getElementById("pandawa_activity_text_offer_5"). innerHTML =  name;
             document.getElementById("pandawa_activity_price_offer_5"). innerHTML =    price;
             document.getElementById("pandawa_activity_detail_offer_5"). innerHTML =  detail;

         }
       }
     )

}

function gunungpayungcall(){

document.getElementById("selected_date").style.display="none";
document.getElementById("selected_date_pandawa").style.display="none";
document.getElementById("selected_date_gunungpayung").style.display="block";
document.getElementById("selected_date_timbis").style.display="none";
document.getElementById("selected_date_allfunction").style.display="none";

var activity_checkin = document.getElementById("activity_check_in_date").value;

date_selector(activity_checkin,activity_checkin);

document.getElementById("selected_date_gunungpayung").innerHTML="Gunung Payung Cultural Park - " +new_date_details;

document.getElementById("allpost_hotels").style.display="none";

document.getElementById("puripandawa_hotels").style.display="none";
document.getElementById("pandawahill_hotels").style.display="none";

document.getElementById("allpost_activity").style.display="none";
document.getElementById("pandawa_activity").style.display="none";
document.getElementById("gunungpayung_activity").style.display="block";
document.getElementById("timbis_activity").style.display="none";

document.getElementById("allpost_package").style.display="none";
document.getElementById("allpost_promotion").style.display="none";

  document.getElementById("gunungpayung_activity_offer_1").style.display="block";
  var db = firebase.database();
  var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("201");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();
         var detail = snapshot.val();
         var img_url = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

         detail = Object.values(detail);
         detail = detail[0].detail ;

         img_url = Object.values(img_url);
         img_url = img_url[0].img_url ;

         price = convertToRupiah(price);

         document.getElementById("gunungpayung_img_offer_1"). style.backgroundImage = "url("+img_url+")";

         document.getElementById("gunungpayung_activity_text_offer_1"). innerHTML =  name;
         document.getElementById("gunungpayung_activity_price_offer_1"). innerHTML =    price;
         document.getElementById("gunungpayung_activity_detail_offer_1"). innerHTML =  detail;

     }
   }
 )

 //Offer_2
   document.getElementById("gunungpayung_activity_offer_2").style.display="block";
   var db = firebase.database();
   var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("202");
   ref.once('value', snapshot => {
      if (snapshot.exists()) {
          var name = snapshot.val();
          var price = snapshot.val();
          var detail = snapshot.val();
          var img_url = snapshot.val();

          name = Object.values(name);
          name = name[0].name;

          price = Object.values(price);
          price = price[0].price ;

          detail = Object.values(detail);
          detail = detail[0].detail ;

          img_url = Object.values(img_url);
          img_url = img_url[0].img_url ;

          price = convertToRupiah(price);

          document.getElementById("gunungpayung_img_offer_2"). style.backgroundImage = "url("+img_url+")";

          document.getElementById("gunungpayung_activity_text_offer_2"). innerHTML =  name;
          document.getElementById("gunungpayung_activity_price_offer_2"). innerHTML =    price;
          document.getElementById("gunungpayung_activity_detail_offer_2"). innerHTML =  detail;

      }
    }
  )

  //Offer_3
    document.getElementById("gunungpayung_activity_offer_3").style.display="block";
    var db = firebase.database();
    var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("203");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("gunungpayung_img_offer_3"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("gunungpayung_activity_text_offer_3"). innerHTML =  name;
           document.getElementById("gunungpayung_activity_price_offer_3"). innerHTML =    price;
           document.getElementById("gunungpayung_activity_detail_offer_3"). innerHTML =  detail;

       }
     }
   )

   //Offer_4
    document.getElementById("gunungpayung_activity_offer_4").style.display="block";
     var db = firebase.database();
     var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("204");
     ref.once('value', snapshot => {
        if (snapshot.exists()) {
            var name = snapshot.val();
            var price = snapshot.val();
            var detail = snapshot.val();
            var img_url = snapshot.val();

            name = Object.values(name);
            name = name[0].name;

            price = Object.values(price);
            price = price[0].price ;

            detail = Object.values(detail);
            detail = detail[0].detail ;

            img_url = Object.values(img_url);
            img_url = img_url[0].img_url ;

            price = convertToRupiah(price);

            document.getElementById("gunungpayung_img_offer_4"). style.backgroundImage = "url("+img_url+")";

            document.getElementById("gunungpayung_activity_text_offer_4"). innerHTML =  name;
            document.getElementById("gunungpayung_activity_price_offer_4"). innerHTML =    price;
            document.getElementById("gunungpayung_activity_detail_offer_4"). innerHTML =  detail;

        }
      }
    )
    document.getElementById("gunungpayung_activity_offer_5").style.display="none";
 }

function timbiscall(){

  document.getElementById("selected_date").style.display="none";
  document.getElementById("selected_date_pandawa").style.display="none";
  document.getElementById("selected_date_gunungpayung").style.display="none";
  document.getElementById("selected_date_timbis").style.display="block";
  document.getElementById("selected_date_allfunction").style.display="none";

  var activity_checkin = document.getElementById("activity_check_in_date").value;

  date_selector(activity_checkin,activity_checkin);

  document.getElementById("selected_date_timbis").innerHTML="Timbis Paragliding - " +new_date_details;


  document.getElementById("allpost_hotels").style.display="none";

  document.getElementById("puripandawa_hotels").style.display="none";
  document.getElementById("pandawahill_hotels").style.display="none";

  document.getElementById("allpost_activity").style.display="none";
  document.getElementById("pandawa_activity").style.display="none";
  document.getElementById("gunungpayung_activity").style.display="none";
  document.getElementById("timbis_activity").style.display="block";

  document.getElementById("allpost_package").style.display="none";
  document.getElementById("allpost_promotion").style.display="none";

    document.getElementById("timbis_activity_offer_1").style.display="block";
    var db = firebase.database();
    var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("301");
    ref.once('value', snapshot => {
       if (snapshot.exists()) {
           var name = snapshot.val();
           var price = snapshot.val();
           var detail = snapshot.val();
           var img_url = snapshot.val();

           name = Object.values(name);
           name = name[0].name;

           price = Object.values(price);
           price = price[0].price ;

           detail = Object.values(detail);
           detail = detail[0].detail ;

           img_url = Object.values(img_url);
           img_url = img_url[0].img_url ;

           price = convertToRupiah(price);

           document.getElementById("timbis_img_offer_1"). style.backgroundImage = "url("+img_url+")";

           document.getElementById("timbis_activity_text_offer_1"). innerHTML =  name;
           document.getElementById("timbis_activity_price_offer_1"). innerHTML =    price;
           document.getElementById("timbis_activity_detail_offer_1"). innerHTML =  detail;

       }
     }
   )

   //Offer_2
     document.getElementById("timbis_activity_offer_2").style.display="block";
     var db = firebase.database();
     var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("302");
     ref.once('value', snapshot => {
        if (snapshot.exists()) {
            var name = snapshot.val();
            var price = snapshot.val();
            var detail = snapshot.val();
            var img_url = snapshot.val();

            name = Object.values(name);
            name = name[0].name;

            price = Object.values(price);
            price = price[0].price ;

            detail = Object.values(detail);
            detail = detail[0].detail ;

            img_url = Object.values(img_url);
            img_url = img_url[0].img_url ;

            price = convertToRupiah(price);

            document.getElementById("timbis_img_offer_2"). style.backgroundImage = "url("+img_url+")";

            document.getElementById("timbis_activity_text_offer_2"). innerHTML =  name;
            document.getElementById("timbis_activity_price_offer_2"). innerHTML =    price;
            document.getElementById("timbis_activity_detail_offer_2"). innerHTML =  detail;

        }
      }
    )
 }


                                  //Order function Pandawa//
                                  //Order function Pandawa//
                                  //Order function Pandawa//

function pandawa_entranceticket(){
    
  verify_check();
  
  fixdate_checkout = document.getElementById("activity_check_in_date").value;
  date_selector(fixdate_checkout,fixdate_checkout);

  adults_checkout = document.getElementById("activity_total_adults").value;
  children_chekout = document.getElementById("activity_total_children").value;


  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("101");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;

       }

       sessionStorage.setItem("ID","101");
       sessionStorage.setItem("name",name+" - PandawaBeach");
       sessionStorage.setItem("date_checkout",new_date_details);
       sessionStorage.setItem("date_out_checkout", "")
       sessionStorage.setItem("adults_checkout",adults_checkout);
       sessionStorage.setItem("children_chekout",children_chekout);
       sessionStorage.setItem("price",price);

         window.location="orderconfirm.html";
    }
  )
  return false;
}

function pandawa_canoeticket(){
    
  verify_check();
  
  fixdate_checkout = document.getElementById("activity_check_in_date").value;
  date_selector(fixdate_checkout,fixdate_checkout);

  adults_checkout = document.getElementById("activity_total_adults").value;
  children_chekout = document.getElementById("activity_total_children").value;


  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("102");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;
       }

       sessionStorage.setItem("ID","102");
       sessionStorage.setItem("name",name+" - PandawaBeach");
       sessionStorage.setItem("date_checkout",new_date_details);
       sessionStorage.setItem("date_out_checkout", "")
       sessionStorage.setItem("adults_checkout",adults_checkout);
       sessionStorage.setItem("children_chekout",children_chekout);
       sessionStorage.setItem("price",price);

         window.location="orderconfirm.html";
    }
  )
  return false;
}

function pandawa_bananaboatticket(){
    
  verify_check();
  
  fixdate_checkout = document.getElementById("activity_check_in_date").value;
  date_selector(fixdate_checkout,fixdate_checkout);

  adults_checkout = document.getElementById("activity_total_adults").value;
  children_chekout = document.getElementById("activity_total_children").value;


  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("103");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;
       }

       sessionStorage.setItem("ID","103");
       sessionStorage.setItem("name",name+" - PandawaBeach");
       sessionStorage.setItem("date_checkout",new_date_details);
       sessionStorage.setItem("date_out_checkout", "")
       sessionStorage.setItem("adults_checkout",adults_checkout);
       sessionStorage.setItem("children_chekout",children_chekout);
       sessionStorage.setItem("price",price);

         window.location="orderconfirm.html";
    }
  )
  return false;
}

function pandawa_barbequeticket(){
    
  verify_check();

  fixdate_checkout = document.getElementById("activity_check_in_date").value;
  date_selector(fixdate_checkout,fixdate_checkout);

  adults_checkout = document.getElementById("activity_total_adults").value;
  children_chekout = document.getElementById("activity_total_children").value;


  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("104");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;
       }

       sessionStorage.setItem("ID","104");
       sessionStorage.setItem("name",name+" - PandawaBeach");
       sessionStorage.setItem("date_checkout",new_date_details);
       sessionStorage.setItem("date_out_checkout", "")
       sessionStorage.setItem("adults_checkout",adults_checkout);
       sessionStorage.setItem("children_chekout",children_chekout);
       sessionStorage.setItem("price",price);

         window.location="orderconfirm.html";
    }
  )
  return false;
}

function pandawa_kecakdanceticket(){
    
  verify_check();

  fixdate_checkout = document.getElementById("activity_check_in_date").value;
  date_selector(fixdate_checkout,fixdate_checkout);

  adults_checkout = document.getElementById("activity_total_adults").value;
  children_chekout = document.getElementById("activity_total_children").value;


  var db = firebase.database();
  var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("105");
  ref.once('value', snapshot => {
     if (snapshot.exists()) {
         var name = snapshot.val();
         var price = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         price = Object.values(price);
         price = price[0].price ;
       }

       sessionStorage.setItem("ID","105");
       sessionStorage.setItem("name",name+" - PandawaBeach");
       sessionStorage.setItem("date_checkout",new_date_details);
       sessionStorage.setItem("date_out_checkout", "")
       sessionStorage.setItem("adults_checkout",adults_checkout);
       sessionStorage.setItem("children_chekout",children_chekout);
       sessionStorage.setItem("price",price);

         window.location="orderconfirm.html";
    }
  )
  return false;
}

                                  //Order function GunungPayung//
                                  //Order function GunungPayung//
                                  //Order function GunungPayung//

function gunungpayung_entranceticket(){
    
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("201");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","201");
sessionStorage.setItem("name",name+" - GunungPayung");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function gunungpayung_beachpicnicticket(){
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("202");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","202");
sessionStorage.setItem("name",name+" - GunungPayung");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function gunungpayung_openstageticket(){
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("203");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","203");
sessionStorage.setItem("name",name+" - GunungPayung");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function gunungpayung_openhallticket(){
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("204");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","204");
sessionStorage.setItem("name",name+" - GunungPayung");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}


                                  //Order function TimbisParagliding//
                                  //Order function TimbisParagliding//
                                  //Order function TimbisParagliding//

function timbis_tandemticket(){
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("301");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","301");
sessionStorage.setItem("name",name+" - TimbisParagliding");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function timbis_soloticket(){
verify_check();

fixdate_checkout = document.getElementById("activity_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("activity_total_adults").value;
children_chekout = document.getElementById("activity_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("302");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","302");
sessionStorage.setItem("name",name+" - TimbisParagliding");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}


                                  //Order function Package//
                                  //Order function Package//
                                  //Order function Package//

function package_honeymoontrip(){
verify_check();

fixdate_checkout = document.getElementById("package_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("package_total_adults").value;
children_chekout = document.getElementById("package_total_children").value;

var db = firebase.database();
var ref = db.ref('Package').orderByChild('idnumber').equalTo("1001");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","1001");
sessionStorage.setItem("name",name+" - Package");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function package_familytrip(){
verify_check();

fixdate_checkout = document.getElementById("package_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("package_total_adults").value;
children_chekout = document.getElementById("package_total_children").value;

var db = firebase.database();
var ref = db.ref('Package').orderByChild('idnumber').equalTo("1002");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","1002");
sessionStorage.setItem("name",name+" - Package");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function package_grouptrip(){
verify_check();

fixdate_checkout = document.getElementById("package_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("package_total_adults").value;
children_chekout = document.getElementById("package_total_children").value;

var db = firebase.database();
var ref = db.ref('Package').orderByChild('idnumber').equalTo("1003");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","1003");
sessionStorage.setItem("name",name+" - Package");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function package_customtrip(){
verify_check();

fixdate_checkout = document.getElementById("package_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("package_total_adults").value;
children_chekout = document.getElementById("package_total_children").value;

var db = firebase.database();
var ref = db.ref('Package').orderByChild('idnumber').equalTo("1004");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","1004");
sessionStorage.setItem("name",name+" - Package");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}


                                //Order function Promotion//
                                //Order function Promotion//
                                //Order function Promotion//

function promotion_pandawa(){
verify_check();

fixdate_checkout = document.getElementById("promotion_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("promotion_total_adults").value;
children_chekout = document.getElementById("promotion_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/Pandawa').orderByChild('idnumber').equalTo("101");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","101");
sessionStorage.setItem("name",name+" - PandawaBeach");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function promotion_gunungpayung(){
verify_check();

fixdate_checkout = document.getElementById("promotion_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("promotion_total_adults").value;
children_chekout = document.getElementById("promotion_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/GunungPayung').orderByChild('idnumber').equalTo("201");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","201");
sessionStorage.setItem("name",name+" - GunungPayung");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function promotion_timbis(){
verify_check();

fixdate_checkout = document.getElementById("promotion_check_in_date").value;
date_selector(fixdate_checkout,fixdate_checkout);

adults_checkout = document.getElementById("promotion_total_adults").value;
children_chekout = document.getElementById("promotion_total_children").value;

var db = firebase.database();
var ref = db.ref('ObyekWisata/Timbis').orderByChild('idnumber').equalTo("301");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","301");
sessionStorage.setItem("name",name+" - TimbisParagliding");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", "")
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}


                                //Order function Hotels//
                                //Order function Hotels//
                                //Order function Hotels//

function pandawahill_superior(){
verify_check();

fixdate_checkout = document.getElementById("hotels_check_in_date").value;
fixdateout_checkout = document.getElementById("hotels_check_out_date").value;
date_selector(fixdate_checkout,fixdateout_checkout);

adults_checkout = document.getElementById("hotels_total_adults").value;
children_chekout = document.getElementById("hotels_total_children").value;

var db = firebase.database();
var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("601");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","601");
sessionStorage.setItem("name",name+" - PandawaHill");
sessionStorage.setItem("date_checkout", new_date_details);
sessionStorage.setItem("date_out_checkout", new_next_date_details)
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function pandawahill_family(){
verify_check();

fixdate_checkout = document.getElementById("hotels_check_in_date").value;
fixdateout_checkout = document.getElementById("hotels_check_out_date").value;
date_selector(fixdate_checkout,fixdateout_checkout);

adults_checkout = document.getElementById("hotels_total_adults").value;
children_chekout = document.getElementById("hotels_total_children").value;

var db = firebase.database();
var ref = db.ref('Akomodasi/PandawaHill').orderByChild('idnumber').equalTo("602");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","602");
sessionStorage.setItem("name",name+" - PandawaHill");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", new_next_date_details)
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function puripandawa_superior(){
verify_check();

fixdate_checkout = document.getElementById("hotels_check_in_date").value;
fixdateout_checkout = document.getElementById("hotels_check_out_date").value;
date_selector(fixdate_checkout,fixdateout_checkout);

adults_checkout = document.getElementById("hotels_total_adults").value;
children_chekout = document.getElementById("hotels_total_children").value;

var db = firebase.database();
var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("501");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","501");
sessionStorage.setItem("name",name+" - PuriPandawa");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", new_next_date_details)
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}

function puripandawa_family(){
verify_check();

fixdate_checkout = document.getElementById("hotels_check_in_date").value;
fixdateout_checkout = document.getElementById("hotels_check_out_date").value;
date_selector(fixdate_checkout,fixdateout_checkout);

adults_checkout = document.getElementById("hotels_total_adults").value;
children_chekout = document.getElementById("hotels_total_children").value;

var db = firebase.database();
var ref = db.ref('Akomodasi/PuriPandawa').orderByChild('idnumber').equalTo("502");
ref.once('value', snapshot => {
if (snapshot.exists()) {
var name = snapshot.val();
var price = snapshot.val();

name = Object.values(name);
name = name[0].name;

price = Object.values(price);
price = price[0].price ;
}

sessionStorage.setItem("ID","502");
sessionStorage.setItem("name",name+" - PuriPandawa");
sessionStorage.setItem("date_checkout",new_date_details);
sessionStorage.setItem("date_out_checkout", new_next_date_details)
sessionStorage.setItem("adults_checkout",adults_checkout);
sessionStorage.setItem("children_chekout",children_chekout);
sessionStorage.setItem("price",price);

window.location="orderconfirm.html";
}
)
return false;
}
