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



var alluser = firebase.database().ref().child("withdraw2").orderByChild('serial');


var phone = '';

var username = '';



var amount = '';
var amount2 = '';

var total = '';

var amount4 = '';
var amount5 = '';

var vdate = '';
var uid = '';
var ke2 = '';
var vstatus2 = '';

var gender = 'd';


let  aa = 0 ;


var today = new Date();
var today2 = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;


alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      var tt = val.status;


      if (tt == 'Pending') {
        var c = 'orange'

      }
      else if (tt == 'Reject') {
        var c = 'red'

      }
      else {
        var c = 'green'

        // document.getElementById("btn4").style.display = "none"
      }

      var valu22 = parseInt(val.serial);
      var newloan = 10000000000 - valu22;




      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';

      content += '<td >' + newloan + '</td>';
      content += '<td >' + val.uname + '</td>';
      content += '<td >' + val.uphone + '</td>';


      content += '<td id="aa">' + val.rdate + '</td>';
      content += '<td >' + val.withrow + " BDT" + '</td>';

      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += '<td id="aa" style="color:' + c + ';font-weight: 700;text-align: center;">' + val.status + '</td>';

      content += "<td style='text-align:center'>" +


        '<a href="#" data-tip="delete" style="color:rgb(148, 17, 17);" onclick=addam("' + data.key + '")><i class="fa fa-minus-circle" aria-hidden="true"></i></a>' +


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



  ke2 = key;




}







function edit(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"

  ke = key;

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



    }




    $('#cname').html(name4);

    $('#ploan').html(amount);

    $('#camount').val(amount);
    $('#cmonth').val(month);


    console.log('jeeee' + month);


  });
}


function addam(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  ke2 = key;




  var ref51 = firebase.database().ref().child("withdraw2").child(key);

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {






      vstatus2 = snapshot4.val().status;
      uid = snapshot4.val().uid;
      amount5 = snapshot4.val().withrow;




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




    $('#pstatus').html(vstatus2);



    var totaluser = firebase.database().ref().child("balance_status").child(uid);

    totaluser.once("value").then(function (snapshot) {

      if (snapshot.exists()) {

        total = snapshot.numChildren();

        snapshot.forEach(function (data) {




          // content11 = snapshot.numChildren();


        });

        console.log('total user ' + uid);

        console.log('total user ' + total);






      }


    });






        var totaluser3 = firebase.database().ref().child("users").child(uid);

    totaluser3.once("value").then(function (snapshot) {

      if (snapshot.exists()) {

      

       


             amount4 = snapshot.val().balance;

          // content11 = snapshot.numChildren();


          console.log('fff   '+amount4)


    

     






      }


    });



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

  notif = '';


}



function validate() {

  // var mocname = document.getElementById("cname").value;
  var camount = document.getElementById("camount").value;
  var cmonth = document.getElementById("cmonth").value;



  var ref7 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");

  var valu = parseInt(camount);
  var valu2 = parseInt(cmonth);
  var newloan = Math.ceil(valu + (valu * 0.5) / 100);
  var kk = newloan / valu2;
  console.log('jjjjjj' + valu);
  var d = Math.ceil(kk);

  let text = valu.toString();
  let text2 = newloan.toString();
  let text3 = d.toString();


  if (didConfirm == true) {

    ref7.child(ke).set({
      "amount": text,
      "date": vdate,
      'loan': text2,
      'kisti': text3,
      'month': cmonth,
      'status': vstatus,
      'uname': name4,
      'uphone': vphone,

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


function validate34() {


  const now = new Date();
  const timeString = now.toLocaleTimeString();
  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }


  if (gender == 'Approve') {

    var didConfirm = confirm("Are you sure You want to submit??");
    var ref9 = firebase.database().ref().child("withdraw2").child(ke2);


    if (didConfirm == true) {


      ref9.update({
        // "noti": noti,
        'status': gender,
      })






      console.log(gender);

      location.reload();





    } else {
      return false;
    }

  }

  else if (gender == 'Reject'){

    aa = parseInt(amount4+amount5);

    console.log((amount4));

  console.log((aa.toString()));


  


    var didConfirm = confirm("Are you sure You want to submit??");
    var ref91 = firebase.database().ref().child("withdraw2").child(ke2);
    var ref101 = firebase.database().ref().child("balance_status");
    var ref102 = firebase.database().ref().child("users");

    if (didConfirm == true) {


      ref91.update({
        // "noti": noti,
        'status': gender,
      });

      ref102.child(uid).update({
        // "noti": noti,
        'balance': aa.toString(),
      });



      ref101.child(uid).child(100000 - parseInt(total + 1)).set({
        "status": gender,
        "date": today + " " + timeString,
        'amount': amount5,
        'serial': 100000 - parseInt(total + 1),
        'id': parseInt(total + 1)





      });




      console.log(gender);

      location.reload();





    } else {
      return false;
    }

   

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



  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;




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

    win.document.write('<h2 style="text-align: center;font-weight: bold;margin-left:44%;">চুক্তিপত্র</h2>');


    win.document.write('</div>');
    // win.document.write('<div id="photo" style="text-align: center"><img style="vertical-align:middle" src="img/logo-removebg-preview.png" height="50" width= "50" alt="" ><p style="vertical-align:middle">Dream Stair School</p> </div>');

    // win.document.write(message);              // THE TABLE CONTENTS INSIDE THE BODY TAG.


    //  console.log(message);

    win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + 'গ্রাহকের নাম' + '</td><td style="padding-left:10px;">' + name5 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'আবেদনের তারিখ' + '</td><td style="padding-left:10px;">' + vdate2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'গ্রাহকের ফোন নম্বর' + '</td><td style="padding-left:10px;">' + vphone2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'ঋণের পরিমাণ' + '</td><td style="padding-left:10px;">' + amount2 + " tk" + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'ঋণের কিস্তি' + '</td><td style="padding-left:10px;">' + kisti2 + " tk" + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'মোট কিস্তি' + '</td><td style="padding-left:10px;">' + month2 + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'মাসিক সুদের হার' + '</td><td style="padding-left:10px;">' + '০.৫%' + '</td>' + '<tr>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'ঋণের কিস্তি' + '</td><td style="padding-left:10px;">' + 'Actual Amount' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'মোট কিস্তি' + '</td><td style="padding-left:10px;">' + 'Actual Amount' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'পেমেন্টের তারিখ' + '</td><td style="padding-left:10px;">' + 'প্রতি মাসের ৫-১৫ তারিখের মধ্যে' + '</td>' + '<tr>' + '</table>');
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



    win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;margin-top:20px">' + 'আমার স্বাক্ষর এবং অফিস সীল দ্বারা সাক্ষ্য' + '</p>');

    win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + 'ঋণগ্রহীতার স্বাক্ষর' + '</td><td style="padding-left:10px;">' + '<img src="' + sigImage + '" class="nidimg" alt="Paris" id="fron4" height="120" width="120" style="padding:20px">' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + 'ঋণদাতার স্বাক্ষর' + '</td><td style="padding-left:10px;">' + '<img src="assets/img/deed.jpeg" class="nidimg" alt="Paris" id="fron4" height="100" width="120" style="padding:20px">' + '</td>' + '<tr>' + '<tr><td style="padding-left:10px;">' + '</td>' + '</table>');




    win.document.write('</div>');
    win.document.write('</body></html>');

    // CLOSE THE CURRENT WINDOW.

    // win.print();

    win.document.close();




  });





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