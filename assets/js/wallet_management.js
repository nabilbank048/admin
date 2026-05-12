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



var alluser = firebase.database().ref().child("loan");

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
var notif2 = 'No Notification';

var gender = 'd';



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



var aggrement2 = firebase.database().ref().child("aggrement").child('1');
var loan_table = firebase.database().ref().child("loan_table").child('rr');

var wallet = firebase.database().ref().child("wallet").orderByChild('serial');

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

var wcode = '';

var uid = '';



var act_loan = '';

var rate = '';



var process = '';




var act_loan5 = '';
var amount5 = '';
var code5 = '';
var date5 = '';
var id5 = '';
var kisti5 = '';
var loan5 = '';
var month5 = '';
var rate5 = '';
var status5 = '';
var uname5 = '';
var uphone5 = '';

var lserial = '';
var wserial = '';







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




wallet.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      var tt = val.status;

      if (tt == 'Pending') {
        var c = 'orange'
        var amn = 0;
        var amn2 = val.amount;
      }
      else if (tt == 'Reject') {
        var c = 'red'
        var amn = 0;
        var amn2 = 0;
        var d = 'block'
      }
      else {
        var c = 'green'
        var amn = val.amount;
        var amn2 = 0;
        var d = 'none'
      }



      //  document.getElementById("aa").style.color = 'rgb(230, 175, 35)'

      
      console.log(tt);

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.uphone + '</td>';
      content += '<td >' + val.uname + '</td>';

      content += '<td >' + val.amount + '</td>';

      content += '<td >' + val.process + '</td>';
      content += '<td >' + val.date + '</td>';
      content += '<td id="aa" style="color:' + c + ';font-weight: 700;text-align: center;">' + val.status + '<br>' + '<p type="button" id="btn4" style="display:' + d + ';" class="btn4" onclick=stats5("' + data.key + '")><span class="layer"></span>Approve</p>' + '</td>';


      content += '<td >' + val.code + '</td>';
      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: rgb(28, 81, 214);"  onclick=stats("' + data.key + '")><i class="fa fa-edit" aria-hidden="true"></i></a>' +
        '<a href="#" data-tip="delete" style="color: rgb(28, 214, 177);"  onclick=stats2("' + data.key + '")><i class="fa fa-plus" aria-hidden="true"></i></a>' +

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
  document.getElementById("det2").style.display = "block"
  document.getElementById("rev").style.display = "none"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;

  var ref51 = firebase.database().ref().child("wallet").child(key);




  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      amount2 = snapshot4.val().amount;
      w_code = snapshot4.val().code;
      vdate2 = snapshot4.val().date;
      id = snapshot4.val().id;
      process = snapshot4.val().process;
      vstatus2 = snapshot4.val().status;
      uid = snapshot4.val().uid;
      name5 = snapshot4.val().uname;
      vphone2 = snapshot4.val().uphone;
      wserial = snapshot4.val().serial;




      //  rate = snapshot4.val().rate;



      //  sec = snapshot4.val().section;





    }



    var ref54 = firebase.database().ref().child("loan").child(uid);

    ref54.on("value", function (snapshot4) {
      if (snapshot4.exists()) {

        name5 = snapshot4.val().uname;


        amount5 = snapshot4.val().amount;
        loan5 = snapshot4.val().loan;
        month5 = snapshot4.val().month;
        kisti5 = snapshot4.val().kisti;
        vdate5 = snapshot4.val().date;
        vstatus5 = snapshot4.val().status;
        vphone5 = snapshot4.val().uphone;
        id5 = snapshot4.val().id;
        uid5 = snapshot4.val().uid;
        code5 = snapshot4.val().code;
        act_loan5 = snapshot4.val().act_loan;

        rate5 = snapshot4.val().rate;
        lserial = snapshot4.val().serial;



        //  sec = snapshot4.val().section;

      }


      console.log(rate5)
    });




    $('#camount2').val(w_code);






  });


}


function stats2(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"
  document.getElementById("rev").style.display = "none"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;

  var ref51 = firebase.database().ref().child("wallet").child(key);


  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {

      amount2 = snapshot4.val().amount;
      w_code = snapshot4.val().code;
      vdate2 = snapshot4.val().date;
      id = snapshot4.val().id;
      process = snapshot4.val().process;
      vstatus2 = snapshot4.val().status;
      uid = snapshot4.val().uid;
      name5 = snapshot4.val().uname;
      vphone2 = snapshot4.val().uphone;
      wserial = snapshot4.val().serial;

      //  sec = snapshot4.val().section;





    }


    var ref541 = firebase.database().ref().child("loan").child(uid);

    ref541.on("value", function (snapshot4) {
      if (snapshot4.exists()) {

        name5 = snapshot4.val().uname;


        amount5 = snapshot4.val().amount;
        loan5 = snapshot4.val().loan;
        month5 = snapshot4.val().month;
        kisti5 = snapshot4.val().kisti;
        vdate5 = snapshot4.val().date;
        vstatus5 = snapshot4.val().status;
        vphone5 = snapshot4.val().uphone;
        id5 = snapshot4.val().id;
        uid5 = snapshot4.val().uid;
        code5 = snapshot4.val().code;
        act_loan5 = snapshot4.val().act_loan;

        rate5 = snapshot4.val().rate;

        lserial = snapshot4.val().serial;




        //  sec = snapshot4.val().section;

      }


      console.log(rate5)
    });





    console.log(vstatus2)


    $('#camount21').val(amount2);
    $('#total3').val(amount2);







  });


}



function validate3() {




  console.log(uid)
  console.log(ke2)



  var noti = document.getElementById("camount2").value;

  if (noti == "") {
    alert("Code must be filled out");
    return false;
  }



  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan");

  var ref10 = firebase.database().ref().child("wallet");


  if (didConfirm == true) {

    ref9.child(uid).set({
      "amount": amount5,
      "date": vdate5,
      'kisti': kisti5,
      'month': month5,
      'status': vstatus5,
      'uname': name5,
      'uphone': vphone5,
      'loan': loan5,
      'code': noti,
      'id': id5,
      'act_loan': act_loan5,
      'rate': rate5,
      'serial': lserial

    });


    ref10.child(ke2).set({

      "amount": amount2,

      'code': noti,
      "date": vdate2,
      'id': id,
      'process': process,

      'status': vstatus2,
      'serial': wserial,
      'uid': uid,
'serial': wserial,
      'uname': name5,
      'uphone': vphone2,

    });



    console.log(gender);

    location.reload();





  } else {
    return false;
  }



}

function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  // document.getElementById("det").style.display = "none"
  document.getElementById("det4").style.display = "none"
  document.getElementById("det2").style.display = "none"
  document.getElementById("det3").style.display = "none"
  document.getElementById("rev").style.display = "block"

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



function validate36() {

  // var mocname = document.getElementById("cname").value;
  var camount2 = document.getElementById("total3").value;




  var ref8 = firebase.database().ref().child("loan");
  var ref10 = firebase.database().ref().child("wallet");

  var didConfirm = confirm("Are you sure You want to submit??");



  if (didConfirm == true) {

    ref8.child(uid).set({
      "amount": camount2.toString(),
      "date": vdate5,
      'kisti': kisti5,
      'month': month5,
      'status': vstatus5,
      'uname': name5,
      'uphone': vphone5,
      'loan': loan5,
      'code': code5,
      'id': id5,
      'act_loan': act_loan5,
      'rate': rate5,
      'serial': lserial

    });


    ref10.child(ke2).set({

      "amount": camount2.toString(),

      'code': w_code,
      "date": vdate2,
      'id': id,
      'process': process,
'serial': wserial,
      'status': vstatus2,

      'uid': uid,

      'uname': name5,
      'uphone': vphone2,

    });
















    location.reload();





  } else {
    return false;
  }





}

function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}

function stats5(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det4").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;


  var ref511 = firebase.database().ref().child("wallet").child(key);




  ref511.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      amount2 = snapshot4.val().amount;
      w_code = snapshot4.val().code;
      vdate2 = snapshot4.val().date;
      id = snapshot4.val().id;
      process = snapshot4.val().process;
      vstatus2 = snapshot4.val().status;
      uid = snapshot4.val().uid;
      name5 = snapshot4.val().uname;
      vphone2 = snapshot4.val().uphone;




      //  rate = snapshot4.val().rate;



      //  sec = snapshot4.val().section;





    }



    var ref541 = firebase.database().ref().child("loan").child(uid);

    ref541.on("value", function (snapshot4) {
      if (snapshot4.exists()) {

        name5 = snapshot4.val().uname;


        amount5 = snapshot4.val().amount;
        loan5 = snapshot4.val().loan;
        month5 = snapshot4.val().month;
        kisti5 = snapshot4.val().kisti;
        vdate5 = snapshot4.val().date;
        vstatus5 = snapshot4.val().status;
        vphone5 = snapshot4.val().uphone;
        id5 = snapshot4.val().id;
        uid5 = snapshot4.val().uid;
        code5 = snapshot4.val().code;
        act_loan5 = snapshot4.val().act_loan;

        rate5 = snapshot4.val().rate;
        lserial = snapshot4.val().serial;



        //  sec = snapshot4.val().section;

      }


      console.log(rate5)
    });
    if (vstatus2 == "Approve") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }
    else if (vstatus2 == "Reject") {
      document.getElementById("pstatus").style.color = 'red'
    }


    else {

      document.getElementById("pstatus").style.color = 'rgb(230, 175, 35)'
    }



    $('#pstatus').html(vstatus2);






  });

}



function validate341() {

  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan");
  var ref10 = firebase.database().ref().child("wallet");
  var ref11 = firebase.database().ref().child("withdraw2");

  var valu22 = parseInt(amount2);
  var valu23 = parseInt(process);

  var nloan = valu22 - valu23;


  if (didConfirm == true) {


    if (gender == 'Approve') {
      ref9.child(uid).set({
        "amount": nloan.toString(),
        "date": vdate5,
        'kisti': kisti5,
        'month': month5,
        'status': vstatus5,
        'uname': name5,
        'uphone': vphone5,
        'loan': loan5,
        'code': code5,
        'id': id5,
        'act_loan': act_loan5,
        'rate': rate5,
        'serial': lserial

      });


      ref10.child(ke2).set({

        "amount": nloan.toString(),

        'code': w_code,
        "date": vdate2,
        'id': id,
        'process': '0',

        'status': gender,
'serial': wserial,
        'uid': uid,

        'uname': name5,
        'uphone': vphone2,

      });


      ref11.push().set({

        "withrow": process,


        "rdate": vdate2,


        'status': gender,

        'uid': uid,

        'uname': name5,
        'uphone': vphone2,





      });

    }
    else {



      ref10.child(ke2).set({

        "amount": amount2,

        'code': w_code,
        "date": vdate2,
        'id': id,
        'process': process,

        'status': gender,

        'uid': uid,

        'uname': name5,
        'uphone': vphone2,

      });
    }










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