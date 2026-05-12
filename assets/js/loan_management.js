const firebaseConfig = {
  apiKey: "AIzaSyCakrnLLh6LgHBN_1JI-X2v1cuOX9GV7rc",
  authDomain: "nabil2-e5018.firebaseapp.com",
  databaseURL: "https://nabil2-e5018-default-rtdb.firebaseio.com",
  projectId: "nabil2-e5018",
  storageBucket: "nabil2-e5018.firebasestorage.app",
  messagingSenderId: "96260557088",
  appId: "1:96260557088:web:c8e886de2f4b419fa6af45",
  measurementId: "G-E3HEHZNH9L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var alluser = firebase.database().ref().child("loan").orderByChild('serial');;

var totaluser = firebase.database().ref().child("loan");


var total = '';
var ploan = '';

var stimage = '';
var stimage2 = '';
var stimage3 = '';
var sigImage = '';

var ke = '';
var ke2 = '';

var phone = '';
var name4 = '';
var name5 = '';
var nid = '';
var content15 = '';

var balance = '';
var date = '';
var status = '';
var status2 = '';
var id = '';
var rdate = '';

var accnumber = '';
var bankname = '';
var branchname = '';
var username = '';




var friendnumber = '';
var nomineenumber = '';
var usernumber = '';



var car = '';
var education = '';
var family = '';
var home = '';
var job = '';
var purpose = '';
var income = '';
var w_code = '';


var amount = '';
var amount2 = '';
var month = '';
var month2 = '';
var kisti = '';
var kisti2 = '';
var loan = '';
var loan2 = '';


var vdate = '';
var vdate2 = '';
var vstatus = '';
var vstatus2 = '';
var vphone = '';
var vphone2 = '';
var notif = '';
var notif2 = '';

var gender = 'd';
var gender2 = 'd';



var title = '';
var withdra = '';
var g_name = '';
var a_date = '';
var g_phone = '';
var l_amount = '';
var m_kisti = '';
var t_kisti = '';
var m_interest = '';
var m_interest2 = '';
var p_date = '';
var p_date2 = '';
var my_signature = '';
var loan_signature = '';
var loan_signature2 = '';



var aggrement2 = firebase.database().ref().child("aggrement").child('1');
var loan_table = firebase.database().ref().child("loan_table").child('rr');



var hone2 = '';
var oneoptiona2 = '';
var oneoptionb2 = '';
var oneoptionc2 = '';
var htwo2 = '';
var twooptiona2 = '';
var twooptionb2 = '';
var hthree2 = '';
var hthreecom2 = '';
var hfour2 = '';
var hfourcom2 = '';
var hfive2 = '';
var hfivecom2 = '';
var hsix2 = '';
var hsixcom2 = '';
var hseven2 = '';
var hsevencom2 = '';
var height = '';
var heightcom2 = '';
var hnine2 = '';
var hninecom2 = '';



var hten2 = '';
var htencom2 = '';
var heleven2 = '';
var helevencom2 = '';
var htwelve2 = '';
var htwelvecom2 = '';
var hthirteen2 = '';
var hthirteencom2 = '';


var sigImage = '';
var elec = '';

var wcode = '';

var uid = '';



var act_loan = '';
var code = '';
var rate = '';

var heading = '';



var ubank = '';
var userial = '';

var lserial = '';


var total_num = '';



var today = new Date();
 var today2 = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;




loan_table.on("value", function (snapshot4) {
  if (snapshot4.exists()) {



    title = snapshot4.val().title;
    g_name = snapshot4.val().g_name;
    a_date = snapshot4.val().a_date;
    g_phone = snapshot4.val().g_phone;
    l_amount = snapshot4.val().l_amount;
    m_kisti = snapshot4.val().m_kisti;
    t_kisti = snapshot4.val().t_kisti;
    m_interest = snapshot4.val().m_interest;
    m_interest2 = snapshot4.val().m_interest2;
    p_date = snapshot4.val().p_date;
    p_date2 = snapshot4.val().p_date2;
    my_signature = snapshot4.val().my_signature;
    loan_signature = snapshot4.val().loan_signature;
    loan_signature2 = snapshot4.val().loan_signature2;


  }






});











aggrement2.on("value", function (snapshot4) {
  if (snapshot4.exists()) {






    hone2 = snapshot4.val().headone;
    oneoptiona2 = snapshot4.val().headoneoptionA;
    oneoptionb2 = snapshot4.val().headoneoptionB;
    oneoptionc2 = snapshot4.val().headoneoptionC;
    htwo2 = snapshot4.val().headtwo;
    twooptiona2 = snapshot4.val().headtwooptionA;
    twooptionb2 = snapshot4.val().headtwooptionB;
    hthree2 = snapshot4.val().headthree;
    hthreecom2 = snapshot4.val().hthreecom;
    hfour2 = snapshot4.val().headfour;
    hfourcom2 = snapshot4.val().hfourcom;
    hfive2 = snapshot4.val().headfive;
    hfivecom2 = snapshot4.val().hfivecom;
    hsix2 = snapshot4.val().headsix;
    hsixcom2 = snapshot4.val().hsixcom;
    hseven2 = snapshot4.val().headseven;
    hsevencom2 = snapshot4.val().hsevencom;
    height2 = snapshot4.val().headeight;
    heightcom2 = snapshot4.val().heightcom;
    hnine2 = snapshot4.val().headnine;
    hninecom2 = snapshot4.val().hninecom;



    hten2 = snapshot4.val().headten;
    htencom2 = snapshot4.val().htencom;
    heleven2 = snapshot4.val().headeleven;
    helevencom2 = snapshot4.val().helevencom;
    htwelve2 = snapshot4.val().headtwelve;
    htwelvecom2 = snapshot4.val().htwelvecom;
    hthirteen2 = snapshot4.val().headthirteen;
    hthirteencom2 = snapshot4.val().hthirteencom;




  }






});






totaluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    total = snapshot.numChildren();

    snapshot.forEach(function (data) {




      // content11 = snapshot.numChildren();


    });

    console.log('total user ' + total);



    $('#user').html('Total Loan : ' + total);



  }


});




alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      var tt = val.status;
      var tt2 = val.withdraw;

      if (tt == 'Pending') {
        var c = 'orange'
        var d = 'block'
      }
      else if (tt == 'Reject') {
        var c = 'red'
        var d = 'block'
      }
      else {
        var c = 'green'
        var d = 'none'
        // document.getElementById("btn4").style.display = "none"
      }


      if (tt2 == 'Disable') {
        var c2 = 'red'

      }
      else {
        var c2 = 'green'

        // document.getElementById("btn4").style.display = "none"
      }




      //  document.getElementById("aa").style.color = 'rgb(230, 175, 35)'



      console.log(tt);

      content += '<tr name="bc">';

      var rr = val.serial + 10;
      var valu22 = parseInt(val.serial);
      var newloan = 10000000000 - valu22;

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';

      content += '<td >' + newloan + '</td>';
      content += '<td >' + val.uname + '</td>';
      content += '<td >' + val.uphone + '</td>';
      content += '<td >' + val.amount + '</td>';
      content += '<td >' + val.act_loan + '</td>';
      content += '<td >' + val.month + '</td>';
      content += '<td >' + val.date + '</td>';
      content += '<td id="aa" style="color:' + c2 + ';font-weight: 700;text-align: center;">' + val.withdraw + '<br>' + '<p type="button" id="btn4"  class="btn4" onclick=stats22("' + data.key + '")><span class="layer"></span>Update</p>' + '</td>';
      content += '<td id="aa" style="color:' + c + ';font-weight: 700;text-align: center;">' + val.status + '<br>' + '<p type="button" id="btn4"  class="btn4" onclick=stats("' + data.key + '")><span class="layer"></span>Update</p>' + '</td>';
      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" +
        '<a href="#" data-tip="delete" style="color: rgb(28, 214, 177);"  onclick=stats3("' + data.key + '")><i class="fa fa-plus" aria-hidden="true"></i></a>' +

        '<a href="#" data-tip="delete" style="color:rgb(35, 144, 42);" onclick=addam("' + data.key + '")><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>' + '<a href="#" data-tip="delete" style="color: #db8412;" onclick=dtl("' + data.key + '")><i class="fa fa-print" aria-hidden="true"></i></a>' +

        '<a href="#" data-tip="delete" style="color: red;" onclick=dtl2("' + data.key + '")><i class="fa fa-trash"></i></a>' +
        "</td>";


      content += '</tr>';


    });







    $('#atttbl_posts_body').html(content);


    let currentPage = 1;
    let rowsPerPage = 10;
    let totalPages;
    const pageNumbers = document.getElementById("pageNumbers");

    function paginateTable() {
      let table = document.getElementById("myTable");
      let rows = Array.from(table.rows).slice(1);
      totalPages = Math.ceil(rows.length / rowsPerPage);

      rows.forEach(row => row.style.display = "none");

      let start = (currentPage - 1) * rowsPerPage;
      let end = start + rowsPerPage;
      rows.slice(start, end).forEach(row => row.style.display = "");
      pageNumbers.innerHTML = "";
      createPageLink("<<", 1);
      createPageLink("<", currentPage - 1);

      let startPageNumber = currentPage < 5 ? 1 : (currentPage > totalPages - 2 ? totalPages - 4 : currentPage - 2);
      let endPageNumber = totalPages < 5 ? totalPages : (currentPage <= totalPages - 2 ? startPageNumber + 4 : totalPages);
      for (let i = startPageNumber; i <= endPageNumber; i++) {
        createPageLink(i, i);
      }
      createPageLink(">", currentPage + 1);
      createPageLink(">>", totalPages);

      setActivePageNumber();
      from.innerHTML = (currentPage - 1) * rowsPerPage + 1;
      to.innerHTML = currentPage === totalPages ? rows.length : (currentPage) * rowsPerPage;
      totalTableEntries.innerHTML = rows.length;

    }

    paginateTable();

    function changePage(e, pageNumber) {
      if ((pageNumber == 0) || (pageNumber == totalPages + 1)) return;
      e.preventDefault();
      currentPage = pageNumber;
      pageNumberInput.value = "";
      paginateTable();
    }

    function setActivePageNumber() {
      document.querySelectorAll("#pageNumbers a").forEach(a => {
        if (a.innerText == currentPage) {
          a.classList.add("active");
        }
      });
    }

    function createPageLink(linkText, pageNumber) {
      let pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.innerHTML = linkText;
      pageLink.addEventListener("click", function (e) {
        changePage(e, pageNumber);
      });
      pageNumbers.appendChild(pageLink);
    }

    goToPageButton.addEventListener("click", (e) => {
      changePage(e, pageNumberInput.value);
    });
  }


});


function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);

  document.getElementById("rev").style.display = "none"

  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);

  var ref513 = firebase.database().ref().child("balance_status").child(key);



  
            ref513.once("value").then(function (snapshot) {



                total_num = snapshot.numChildren();
                 


                console.log('total user ' + parseInt(total_num + 1));
              //   console.log('total user3333 ' + parseInt(total2));
                total2 = total+1;
      



            });

  

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;
      act_loan = snapshot4.val().act_loan;
      lserial = snapshot4.val().serial;

      rate = snapshot4.val().rate;

      notif = snapshot4.val().noti;


      //  sec = snapshot4.val().section;





    }


    if (vstatus2 == "Approve") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }
    else if (vstatus2 == "Reject") {
      document.getElementById("pstatus").style.color = 'red'
    }


    else {

      document.getElementById("pstatus").style.color = 'rgb(230, 175, 35)'
    }


    console.log(vstatus2)


    $('#pstatus').html(vstatus2);

    $('#noti').val(notif);




  });


}







function stats22(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det7").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);

  document.getElementById("rev").style.display = "none"

  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);

  var ref513 = firebase.database().ref().child("balance_status").child(key);



 

  

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;
      act_loan = snapshot4.val().act_loan;
      lserial = snapshot4.val().serial;

      rate = snapshot4.val().rate;

      notif = snapshot4.val().noti;
      withdra = snapshot4.val().withdraw;


      //  sec = snapshot4.val().section;





    }


    if (withdra == "Enable") {
      document.getElementById("wstatus").style.color = 'rgb(12, 182, 6)'
    }
    else if (withdra == "Disable") {
      document.getElementById("wstatus").style.color = 'red'
    }


    else {

      document.getElementById("wstatus").style.color = 'rgb(230, 175, 35)'
    }


    console.log(vstatus2)


    $('#wstatus').html(withdra);

   // $('#noti5').val(notif);




  });


}




function stats2(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"

  var arr = document.getElementsByName('x').value;
  document.getElementById("rev").style.display = "none"

  ke = key;

  console.log(ke)

  var ref5 = firebase.database().ref().child("loan").child(key);

  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      name4 = snapshot4.val().uname;


      amount = snapshot4.val().amount;
      loan = snapshot4.val().loan;
      month = snapshot4.val().month;
      kisti = snapshot4.val().kisti;
      vdate = snapshot4.val().date;
      vstatus = snapshot4.val().status;
      vphone = snapshot4.val().uphone;
      act_loan = snapshot4.val().act_loan;
      code = snapshot4.val().code;
      id = snapshot4.val().id;
      rate = snapshot4.val().rate;
      lserial = snapshot4.val().serial;







    }




    $('#cname').html(name4);

    $('#ploan').html(act_loan);

    $('#camount').val(act_loan);
    $('#cmonth').val(month);


    console.log('jeeee' + month);


  });
}




function edit(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"
  document.getElementById("rev").style.display = "none"
  ke = key;

  var ref5 = firebase.database().ref().child("loan").child(key);

  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      name4 = snapshot4.val().uname;
      lserial = snapshot4.val().serial;

      amount = snapshot4.val().amount;
      loan = snapshot4.val().loan;
      month = snapshot4.val().month;
      kisti = snapshot4.val().kisti;
      vdate = snapshot4.val().date;
      vstatus = snapshot4.val().status;
      vphone = snapshot4.val().uphone;

      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;


    }




    $('#cname').html(name4);

    $('#ploan').html(amount);

    $('#camount').val(amount);
    $('#cmonth').val(month);


    console.log('jeeee' + month);


  });
}




function addam(key) {

  //alert(key)

  const userInput = document.getElementById("mainp");

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det5").style.display = "block"
  document.getElementById("rev").style.display = "none"

  ke = key;


  var ref5 = firebase.database().ref().child("users").child(key);
  var ref6 = firebase.database().ref().child("id_verify").child(key);
  var signature = firebase.database().ref().child("signature").child(key);
  var bank = firebase.database().ref().child("bank").child(key);
  var mobile = firebase.database().ref().child("mobile").child(key);
  var eligibility = firebase.database().ref().child("education").child(key);
  var withdraw = firebase.database().ref().child("loan").child(key);


  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      balance = snapshot4.val().balance;
      date = snapshot4.val().date;
      id = snapshot4.val().id;
      phone = snapshot4.val().phone;
      name = snapshot4.val().name;
      ubank = snapshot4.val().bank;
      nid = snapshot4.val().nid;
      status = snapshot4.val().status;
      pass = snapshot4.val().password;
      userial = snapshot4.val().serial;

      lserial = snapshot4.val().serial;


    }

    console.log(w_code)


    $('#mob').val(phone);



    $('#name').val(name);
    $('#nid2').val(nid);





  });


  ref6.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      stimage = snapshot4.val().image;
      stimage2 = snapshot4.val().image2;
      stimage3 = snapshot4.val().image3;
      status2 = snapshot4.val().status;

      rdate = snapshot4.val().rdate;







    }

    else {
      stimage = 'assets/img/no-image-available.jpg';
      stimage2 = 'assets/img/no-image-available.jpg';
      stimage3 = 'assets/img/no-image-available.jpg';
    }




    $('#mob44').val(phone);


    $('#name44').val(name);
    $('#nid44').val(nid);

    document.getElementById("fron").src = stimage;
    document.getElementById("fron2").src = stimage2;
    document.getElementById("fron3").src = stimage3;



  });

  signature.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      sigImage = snapshot4.val().image;

    }

    else {
      sigImage = 'assets/img/no-image-available.jpg';

    }


    document.getElementById("fron4").src = sigImage;



  });

  
   var electr = firebase.database().ref().child("electric_bill").child(key);

  electr.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      elec = snapshot4.val().image;

    }

    else {
      elec = 'assets/img/no-image-available.jpg';

    }


      document.getElementById("fron14").src = elec;



  });




  bank.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      accnumber = snapshot4.val().accnumber;
      bankname = snapshot4.val().bankname;
      branchname = snapshot4.val().branchname;
      username = snapshot4.val().username;





    }




    $('#buname').val(username);



    $('#bname').val(bankname);
    $('#bnumber').val(accnumber);
    $('#bbranch').val(branchname);

    console.log(username);


  });

  mobile.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      friendnumber = snapshot4.val().friendnumber;
      nomineenumber = snapshot4.val().nomineenumber;
      usernumber = snapshot4.val().usernumber;

    }




    $('#friendnumber').val(friendnumber);



    $('#nomineenumber').val(nomineenumber);
    $('#usernumber').val(usernumber);


    console.log(username);


  });


  eligibility.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      car = snapshot4.val().car;
      education = snapshot4.val().education;
      family = snapshot4.val().family;
      home = snapshot4.val().home;
      job = snapshot4.val().job;
      income = snapshot4.val().income;
      //  sec = snapshot4.val().section;
      purpose = snapshot4.val().purpose;





    }




    $('#edu').val(education);



    $('#occo').val(job);
    $('#income').val(income);
    $('#family').val(family);
    $('#home').val(home);
    $('#car').val(car);
    $('#purpose').val(purpose);




  });

  withdraw.on("value", function (snapshot4) {
    if (snapshot4.exists()) {

      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;
      act_loan = snapshot4.val().act_loan;
      lserial = snapshot4.val().serial;

      rate = snapshot4.val().rate;

      //w_code = snapshot4.val().code;

    }




    $('#code').val(w_code);







  });



}





function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  document.getElementById("det").style.display = "none"
  document.getElementById("det2").style.display = "none"
  document.getElementById("det3").style.display = "none"
  document.getElementById("det4").style.display = "none"
  document.getElementById("det5").style.display = "none"
  document.getElementById("rev").style.display = "block"

  notif = '';
  location.reload();

}



function validate() {

  // var mocname = document.getElementById("cname").value;
  var camount = document.getElementById("camount").value;
  var cmonth = document.getElementById("cmonth").value;



  var ref7 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");

  var valu = parseInt(camount);
  var valu2 = parseInt(cmonth);
  var newloan = Math.ceil(valu + ((valu * rate) / 100) * valu2);
  var kk = newloan / valu2;
  console.log('jjjjjj' + valu);
  var d = Math.ceil(kk);


  let text = valu.toString();
  let text2 = newloan.toString();
  let text3 = d.toString();


  if (didConfirm == true) {

    ref7.child(ke).set({
      "amount": camount.toString(),
      "date": vdate,
      'loan': newloan.toString(),
      'kisti': text3,
      'month': cmonth,
      'status': vstatus,
      'uname': name4,
      'uphone': vphone,
      'act_loan': camount.toString(),
      'rate': rate,
      'code': code,
      'id': id,
      'serial': lserial

    });



    location.reload();





  } else {
    return false;
  }





}


function validate3() {

  // var mocname = document.getElementById("cname").value;
  var camount2 = document.getElementById("total").value;




  var ref8 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");

  var valu = parseInt(camount2);
  var valu2 = parseInt(month2);

  var nloan = Math.ceil(valu + (valu * 0.5) / 100);

  var kk = nloan / valu2;
  console.log('jjjjjj' + valu);
  console.log('jeeee' + month2);
  var d = Math.ceil(kk);

  let text = valu.toString();
  let text2 = nloan.toString();
  let text3 = d.toString();

  console.log(d);


  if (didConfirm == true) {

    ref8.child(ke2).set({
      "amount": camount2,
      "date": vdate2,
      'kisti': text3,
      'month': month2,
      'status': vstatus2,
      'uname': name5,
      'uphone': vphone2,
      'loan': text2,
      'serial': lserial

    });



    location.reload();





  } else {
    return false;
  }





}


function findTotal() {
  var arr = document.getElementsByName('qty');

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value))
      tot += parseInt(arr[i].value);
  }
  document.getElementById('total').value = tot;
};
document.addEventListener("DOMContentLoaded", function (event) {
  findTotal();
});



function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}


function validate1333() {
  gender2 = document.querySelector('input[name = optionsRadios]:checked').value;

}



function validate34() {

 //var noti = document.getElementById("noti").value;

 
const now = new Date();
const timeString = now.toLocaleTimeString(); 




  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan").child(ke2);
  var ref10 = firebase.database().ref().child("balance_status");


  if (didConfirm == true) {

  console.log(now);


    ref9.update({
     // "noti": noti,
      'status': gender,
    })


    ref10.child(ke2).child(100000-parseInt(total_num + 1)).set({
      "status": gender,
      "date": today+" "+timeString,
      'amount': amount2,
      'serial':100000-parseInt(total_num + 1),
      'id':parseInt(total_num + 1)
    




    });





   location.reload();





  } else {
    return false;
  }

}





function validate234() {

 

 
const now = new Date();
const timeString = now.toLocaleTimeString(); 



  if (gender2 == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan").child(ke2);



  if (didConfirm == true) {

  console.log(now);


    ref9.update({
     // "noti": noti5,
      'withdraw': gender2,
    })







   location.reload();





  } else {
    return false;
  }

}



function myFunction() {
  // get user input
  const userInput = document.getElementById("myInput").value.trim().toUpperCase();

  document.querySelectorAll('tr[name="bc"]').forEach((item) => {
    const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');

    if (tdTxt.indexOf(userInput) === -1) {
      item.style.display = "none"
    } else {
      item.style.display = "";
    }

  })
}





function myFunction2() {
  // get user input
  const userInput = document.getElementById("myInput").value.trim().toUpperCase();

  document.querySelectorAll('tr[name="bc"]').forEach((item) => {
    const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');

    if (tdTxt.indexOf(userInput) === -1) {
      item.style.display = "none"
    } else {
      item.style.display = "";
    }

  })
}


var loan_table = firebase.database().ref().child("loan_table").child('rr');



var title = '';
var g_name = '';
var a_date = '';
var g_phone = '';
var l_amount = '';
var m_kisti = '';
var t_kisti = '';
var m_interest = '';
var m_interest2 = '';
var p_date = '';
var p_date2 = '';
var my_signature = '';
var loan_signature = '';
var loan_signature2 = '';


loan_table.on("value", function (snapshot4) {
  if (snapshot4.exists()) {



    title = snapshot4.val().title;
    g_name = snapshot4.val().g_name;
    a_date = snapshot4.val().a_date;
    g_phone = snapshot4.val().g_phone;
    l_amount = snapshot4.val().l_amount;
    m_kisti = snapshot4.val().m_kisti;
    t_kisti = snapshot4.val().t_kisti;
    m_interest = snapshot4.val().m_interest;
    // m_interest2 = snapshot4.val().m_interest2;
    p_date = snapshot4.val().p_date;
    p_date2 = snapshot4.val().p_date2;
    my_signature = snapshot4.val().my_signature;
    loan_signature = snapshot4.val().loan_signature;
    loan_signature2 = snapshot4.val().loan_signature2;


  }






});



function dtl(key) {


  // document.getElementById("mainp").style.display = "none"
  // document.getElementById("frm").style.display = "none"
  // document.getElementById("user").style.display = "none"
  //  document.getElementById("clos").style.display = "block"
  //  document.getElementById("det4").style.display = "block"

  ke = key;


  var ref51 = firebase.database().ref().child("loan").child(key);
  var signature = firebase.database().ref().child("signature").child(key);

  signature.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      sigImage = snapshot4.val().image;

    }

    else {
      sigImage = 'assets/img/no-image-available.jpg';

    }


    //  document.getElementById("fron4").src = sigImage;



  });




   var electr = firebase.database().ref().child("electric_bill").child(key);

  electr.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      elec = snapshot4.val().image;

    }

    else {
      elec = 'assets/img/no-image-available.jpg';

    }


      document.getElementById("fron14").src = elec;



  });



  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().act_loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      rate = snapshot4.val().rate;




      //  sec = snapshot4.val().section;





    }

    var style = "<style>";
    style = style + "table {width: 98%;font: 17px Calibri;margin-bottom: 10px;margin-left:10px;margin-right:10px;}";
    style = style + "table, th, td {border: solid 1px #302e2e; border-collapse: collapse;margin-left:10px;";
    style = style + "padding: 2px 3px;}";
    style = style + "h2 {padding-left:10px;}";
    style = style + "h3 {margin-top:20px;padding-left:10px;}";
    style = style + '.content { display: flex;margin-top:10px;margin-bottom:10px;}';
    style = style + '.content img {margin-right: 10px; display: block;}';
    style = style + '.content h3,.content p {margin: 0;}';
    style = style + '';
    style = style + "</style>";


    var win = window.open('height=700,width=700');

    win.document.write('<html><head>');
    //  win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write('<div style="border-style: dashed;">');
    win.document.write('<div class="content">');

    // win.document.write('<p id="h"  class="h4">' + cls + '</p>');

    win.document.write('<h2 style="text-align: center;font-weight: bold;margin-left:44%;" id="title">' + title + '</h2>');


    win.document.write('</div>');
    // win.document.write('<div id="photo" style="text-align: center"><img style="vertical-align:middle" src="img/logo-removebg-preview.png" height="50" width= "50" alt="" ><p style="vertical-align:middle">Dream Stair School</p> </div>');

    // win.document.write(message);              // THE TABLE CONTENTS INSIDE THE BODY TAG.


    //  console.log(message);

    win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + g_name + '</td><td style="padding-left:10px;">' + name5 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + a_date + '</td><td style="padding-left:10px;">' + vdate2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + g_phone + '</td><td style="padding-left:10px;">' + vphone2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + l_amount + '</td><td style="padding-left:10px;">' + amount2 + " tk" + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + m_kisti + '</td><td style="padding-left:10px;">' + kisti2 + " tk" + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + t_kisti + '</td><td style="padding-left:10px;">' + month2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + m_interest + '</td><td style="padding-left:10px;">' + rate + '</td>' + '<tr>' + '<tr>' + '<tr><td style="padding-left:10px;">' + p_date + '</td><td style="padding-left:10px;">' + p_date2 + '</td>' + '<tr>' + '</table>');
    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hone2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">' + oneoptiona2 + '</p>');
    win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">' + oneoptionb2 + '</p>');
    win.document.write(' <p style="text-align:left;padding-left:10px;">' + oneoptionc2 + '</p>');




    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + htwo2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">' + twooptiona2 + '</p>');
    win.document.write(' <p style="text-align:left;padding-left:10px;">' + twooptionb2 + '</p>');



    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hthree2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hthreecom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hfour2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hfourcom2 + '</p>');



    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hfive2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hfivecom2 + '</p>');



    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hsix2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hsixcom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hseven2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hsevencom2 + '</p>');



    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + height2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + heightcom2 + '</p>');



    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hnine2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hninecom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hten2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + htencom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + heleven2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + helevencom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + htwelve2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + htwelvecom2 + '</p>');


    win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">' + hthirteen2 + '</h4>');
    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">' + hthirteencom2 + '</p>');



    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;margin-top:20px">' + my_signature + '</p>');

    win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + loan_signature + '</td><td style="padding-left:10px;">' + '<img src="' + sigImage + '" class="nidimg" alt="Paris" id="fron4" height="100" width="120" style="padding:20px">' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + loan_signature2 + '</td><td style="padding-left:10px;">' + '<img src="assets/img/WhatsApp Image 2025-06-18 at 1.40.00 AM.jpeg" class="nidimg" alt="Paris" id="fron4" height="120" width="120" style="padding:20px">' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + '</td>' + '</table>');




    win.document.write('</div>');
    win.document.write('</body></html>');

    // CLOSE THE CURRENT WINDOW.f

    // win.print();

    win.document.close();




  });





}




function dtl2(key) {

  var ref5 = firebase.database().ref().child("loan").child(key);
  var ref6 = firebase.database().ref().child("notification").child(key);





  var didConfirm = confirm("Are you sure You want to delete??");
  if (didConfirm == true) {

    location.reload();

    ref5.remove();
    ref6.remove();

    //  userDataRef2.remove();




  } else {
  }
}



function reverseTable() {
  var table = document.getElementById("atttbl_posts_body");
  var rows = Array.from(table.rows).slice(1); // Get all rows except the header row

  // Reverse the rows array
  rows.reverse();

  // Re-add the rows in reverse order
  rows.forEach(function (row) {
    table.appendChild(row);
  });
}



function myImage() {
  window.open(stimage, '_blank')


}
function myImage2() {
  window.open(stimage2, '_blank')


}
function myImage3() {
  window.open(stimage3, '_blank')


}

function myImage14() {
  window.open(elec, '_blank')


}

function validate51() {



  console.log(ke)





  var mob = document.getElementById("mob44").value;
  var name = document.getElementById("name44").value;
  var nid2 = document.getElementById("nid44").value;



  var ref7 = firebase.database().ref().child("users");
  var ref8 = firebase.database().ref().child("id_verify");


  console.log(mob)
  console.log(name)
  console.log(nid2)

  console.log(pass)


  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref7.child(ke).set({
      "phone": mob,
      "balance": balance,
      'date': date,
      'status': status,
      'nid': nid2,
      'name': name,
      'password': pass,
      'bank': ubank,
      'id': id,
      'serial': userial




    });


    ref8.child(ke).set({
      'name': name,
      'nid': nid2,
      'status': status2,
      'rdate': rdate,
      'image': stimage,
      'image2': stimage2,
      'image3': stimage3,

    });







    //  location.reload();



  } else {
    return false;
  }





}


function validate52() {

  var accnumber = document.getElementById("bnumber").value;
  var bankname = document.getElementById("bname").value;
  var branchname = document.getElementById("bbranch").value;
  var username = document.getElementById("buname").value;


  var ref9 = firebase.database().ref().child("bank");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref9.child(ke).set({
      "accnumber": accnumber,
      "bankname": bankname,
      'branchname': branchname,
      'username': username,


    });








    //  location.reload();
    /*
    
      ref6.child(k).set({
        'name': itemName,
        'nid': itemQuantity,
        'status': 'active',
        'rdate': dat,
        'image': urlDownload,
        'image2': urlDownload2,
        'image3': urlDownload3,
    
      });
    
    
      addCategory.child(incomeDeta).push().set({
        "phone": phone,
        "balance": balance,
        'date': date,
        'status': status,
        'nid': itemQuantity,
        'name': itemName,
        'id': id,
    
      });
    
    
      */


  } else {
    return false;
  }





}


function validate53() {

  var friendnumber2 = document.getElementById("friendnumber").value;
  var nomineenumber2 = document.getElementById("nomineenumber").value;
  var usernumber2 = document.getElementById("usernumber").value;



  var ref10 = firebase.database().ref().child("mobile");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref10.child(ke).set({
      "friendnumber": friendnumber2,
      "nomineenumber": nomineenumber2,
      'usernumber': usernumber2,



    });


    //  location.reload();



  } else {
    return false;
  }





}

function validate54() {

  var car2 = document.getElementById("car").value;
  var education2 = document.getElementById("edu").value;
  var family2 = document.getElementById("family").value;
  var home2 = document.getElementById("home").value;
  var job2 = document.getElementById("occo").value;
  var purpose2 = document.getElementById("purpose").value;
  var income2 = document.getElementById("income").value






  var ref101 = firebase.database().ref().child("education");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref101.child(ke).set({
      "car": car2,
      "education": education2,
      'family': family2,
      "home": home2,
      "income": income2,
      'job': job2,
      'purpose': purpose2,


    });


    //  location.reload();



  } else {
    return false;
  }





}



function validate55() {

  var w_code2 = document.getElementById("code").value;







  var ref102 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref102.child(ke).set({

      "amount": amount2,
      "date": vdate2,
      'kisti': kisti2,
      'month': month2,
      'status': vstatus2,
      'uname': name5,
      'uphone': vphone2,
      'loan': loan2,
      'code': w_code2,
      'id': uid,
      'act_loan': act_loan,
      'rate': rate,
      'serial': lserial



    });





    // location.reload();



  } else {
    return false;
  }





}


function stats3(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det6").style.display = "block"
  document.getElementById("rev").style.display = "none"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);


  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {

      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;
      act_loan = snapshot4.val().act_loan;
      lserial = snapshot4.val().serial;

      rate = snapshot4.val().rate;
      //  sec = snapshot4.val().section;





    }







    console.log(vstatus2)


    $('#camount21').val(amount2);
    $('#total3').val(amount2);







  });


}


function findTotal() {
  var arr = document.getElementsByName('qty');

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value))
      tot += parseInt(arr[i].value);
  }
  document.getElementById('total3').value = tot - 4;

  console.log(tot);
};



function validate556() {

  // var mocname = document.getElementById("cname").value;
  var camount2 = document.getElementById("total3").value;




  var ref8 = firebase.database().ref().child("loan");


  var didConfirm = confirm("Are you sure You want to submit??");



  if (didConfirm == true) {

    ref8.child(ke2).set({
      "amount": camount2.toString(),
      "date": vdate2,
      'kisti': kisti2,
      'month': month2,
      'status': vstatus2,
      'uname': name5,
      'uphone': vphone2,
      'loan': loan2,
      'code': w_code,
      'id': uid,
      'act_loan': act_loan,
      'rate': rate,
      'serial': lserial



    });




    location.reload();





  } else {
    return false;
  }





}