document.getElementById("orderlist").style.display="none";
document.getElementById("empty_review_list").style.display="none";

document.getElementById("tab_reviews").style.display="none";

document.getElementById("orderid-1").style.display="none";
document.getElementById("orderid-2").style.display="none";
document.getElementById("orderid-3").style.display="none";
document.getElementById("orderid-4").style.display="none";
document.getElementById("orderid-5").style.display="none";
document.getElementById("orderid-6").style.display="none";
document.getElementById("orderid-7").style.display="none";
document.getElementById("orderid-8").style.display="none";
document.getElementById("orderid-9").style.display="none";
document.getElementById("orderid-10").style.display="none";

document.getElementById("reviewid-1").style.display="none";
document.getElementById("reviewid-2").style.display="none";
document.getElementById("reviewid-3").style.display="none";
document.getElementById("reviewid-4").style.display="none";
document.getElementById("reviewid-5").style.display="none";
document.getElementById("reviewid-6").style.display="none";
document.getElementById("reviewid-7").style.display="none";
document.getElementById("reviewid-8").style.display="none";
document.getElementById("reviewid-9").style.display="none";
document.getElementById("reviewid-10").style.display="none";

wait();

async function wait() {
  await sleep(5000);
  document.getElementById("empty_order").innerHTML="You Dont Have any Recent Order Yet ...";
  document.getElementById("createORDER").innerHTML="Create Order?";
  document.getElementById("empty_review").innerHTML="You dont have any Reviews Left . . .";
  document.getElementById("reviewcreateORDER").innerHTML="Create Order?";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function create_order(){
  window.location="offers.html"
}

function logout(){
firebase.auth().signOut();
}

function changetab(next,before){
  document.getElementById(next).classList.add("active_tab_list");
  document.getElementById(before).classList.remove("active_tab_list");

  if(next=="reviewsview"){
    document.getElementById("tab_orderlist").style.display="none";
    document.getElementById("tab_reviews").style.display="block";
    document.getElementById("tab_tittle").innerHTML="Reviews"
    document.getElementById("empty_review_list").style.display="block";

    getreviewsdetails();

  }
  else{
    document.getElementById("tab_orderlist").style.display="block";
    document.getElementById("tab_reviews").style.display="none";
    document.getElementById("tab_tittle").innerHTML="Order List"

  }
}

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

      //Get Order List

      firebase.database().ref("PaymentDetails/"+userId).once('value', function(snap){
      snap.forEach(function(childNodes){

      name = childNodes.val().name;
      orderid = childNodes.val().orderid;
      date = childNodes.val().date;
      uniquecode = childNodes.val().uniquecode;
      status = childNodes.val().status;

      var name_order="destination_order_" +orderid;
      var date_order="date_order_"+orderid;
      var code_order="code_order_"+orderid;
      var orderno = "orderid-"+orderid;
      var status_order = "payment_status_order_"+orderid;

      breakme:if(orderno!=="orderid-undefined"){
        document.getElementById("empty_order_list").style.display="none";
        document.getElementById("orderlist").style.display="block";
        document.getElementById(orderno).style.display="block";
        document.getElementById(name_order).innerHTML = name;
        document.getElementById(date_order).innerHTML = date;
        document.getElementById(code_order).innerHTML = uniquecode;

        if (status=="paid"){
          document.getElementById(status_order).classList.add("status_button_paid");
          document.getElementById(status_order).innerHTML=" Status : Paid "

        }
        else {
          document.getElementById(status_order).classList.add("status_button_unpaid");
          document.getElementById(status_order).innerHTML=" Status : Unpaid "
        }
      }
      else{
        break breakme;
      }

  })
});


}
}

 else {
    // No user is signed in.
    document.getElementById("logged_in").style.display="none";
    document.getElementById("logged_out").style.display="block";

    window.location='index.html';
  }
});

function getdetails(number){
  var user = firebase.auth().currentUser;
  var userId = user.uid;

  var db = firebase.database();
  var ref = db.ref('PaymentDetails/'+ userId + '/').orderByChild("orderid").equalTo(number);
  ref.on('value', snapshot => {
     if (snapshot.exists()) {
         var id = snapshot.val();
         var bank = snapshot.val();
         var uniquecode = snapshot.val();
         var name = snapshot.val();
         var date = snapshot.val();
         var adults = snapshot.val();
         var children = snapshot.val();
         var price = snapshot.val();
         var status = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         bank = Object.values(bank);
         bank = bank[0].bank;

         id = Object.values(id);
         id = id[0].id;

         date = Object.values(date);
         date = date[0].date;

         uniquecode = Object.values(uniquecode);
         uniquecode = uniquecode[0].uniquecode;

         adults = Object.values(adults);
         adults = adults[0].adults;

         children = Object.values(children);
         children = children[0].children;

         price = Object.values(price);
         price = price[0].price;

         status = Object.values(status);
         status = status[0].status;


         sessionStorage.setItem("ID",id);
         sessionStorage.setItem("uniquecode",uniquecode);
         sessionStorage.setItem("payment_method",bank);
         sessionStorage.setItem("name",name);
         sessionStorage.setItem("date_checkout",date);
         sessionStorage.setItem("date_out_checkout", "")
         sessionStorage.setItem("adults_checkout",adults);
         sessionStorage.setItem("children_chekout",children);
         sessionStorage.setItem("status",status);
         sessionStorage.setItem("fix_price",price);

         window.location="payment.html"

     }
   }
  )


}

function getreviews(number){
  var user = firebase.auth().currentUser;
  var userId = user.uid;

  var db = firebase.database();
  var ref = db.ref('PaymentDetails/'+ userId + '/').orderByChild("orderid").equalTo(number);
  ref.on('value', snapshot => {
     if (snapshot.exists()) {
         var uniquecode = snapshot.val();
         var name = snapshot.val();
         var date = snapshot.val();
         var adults = snapshot.val();
         var children = snapshot.val();

         name = Object.values(name);
         name = name[0].name;

         date = Object.values(date);
         date = date[0].date;

         uniquecode = Object.values(uniquecode);
         uniquecode = uniquecode[0].uniquecode;

         adults = Object.values(adults);
         adults = adults[0].adults;

         children = Object.values(children);
         children = children[0].children;

         sessionStorage.setItem("uniquecode",uniquecode);
         sessionStorage.setItem("dest_name",name);
         sessionStorage.setItem("date_checkout",date);
         sessionStorage.setItem("date_out_checkout", "")
         sessionStorage.setItem("adults_checkout",adults);
         sessionStorage.setItem("children_chekout",children);

         window.location="reviews.html"

     }
   }
  )

}

function getreviewsdetails(){

        var user = firebase.auth().currentUser;
        var userId = user.uid;

        //Get Review List

        firebase.database().ref("PaymentDetails/"+userId).once('value', function(snap){
        snap.forEach(function(childNodes){

        name = childNodes.val().name;
        orderid = childNodes.val().orderid;
        date = childNodes.val().date;
        uniquecode = childNodes.val().uniquecode;
        enreview = childNodes.val().enreview;

        breakreview:if(enreview!=="false" || enreview==""){


        var name_order="review_destination_order_" +orderid;
        var date_order="review_date_order_"+orderid;
        var code_order="review_code_order_"+orderid;
        var reviewno = "reviewid-"+orderid;
        var review_status = "review_status_order_"+orderid;

        document.getElementById("empty_review_list").style.display="none";
        document.getElementById("empty_review").style.display="none";
        document.getElementById("reviewcreateORDER").style.display="none";

        breakme:if(reviewno!=="orderid-undefined"){
          document.getElementById("empty_review_list").style.display="none";
          document.getElementById("tab_reviews").style.display="block";
          document.getElementById(reviewno).style.display="block";
          document.getElementById(name_order).innerHTML = name;
          document.getElementById(date_order).innerHTML = date;
          document.getElementById(code_order).innerHTML = uniquecode;

          if (enreview=="true"){
            document.getElementById(review_status).classList.add("status_button_paid");
            document.getElementById(review_status).innerHTML=" Review Now "

          }
          else {
            document.getElementById(review_status).classList.add("status_button_unpaid");
            document.getElementById(review_status).innerHTML=" Review Unavailable "
          }
        }
        else{
          //document.getElementById("empty_review_list").style.display="block";
          break breakme;
        }
      }
      else {
        //console.log("tes");
        break breakreview;
      }

      });
    });
}
