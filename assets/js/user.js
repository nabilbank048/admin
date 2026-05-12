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


var totaluser = firebase.database().ref().child("users");
var alluser = firebase.database().ref().child("users").orderByChild('serial');
var pendingLoan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');




var total = '';
var ploan = '';

var stimage = '';
var stimage2 = '';
var stimage3 = '';
var sigImage = '';

var stimage4 = '';
var stimage5 = '';
var stimage6 = '';
var nmane = '';
var nnid = '';

var ke = '';


var phone = '';
var name = '';
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
var nomineenumber = '' ;
var usernumber = '';



var car = '';
var education = '';
var family = '';
var home = '';
var job = '';
var purpose = '';
var income = '';
var w_code = '';
var pass = '';


var ubank = '';
var userial = '';


totaluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    total = snapshot.numChildren();

    snapshot.forEach(function (data) {




      // content11 = snapshot.numChildren();


    });

    console.log('total user ' + total);



    $('#user').html('Total User : ' + total);



  }


});


alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.name + '</td>';
      content += '<td >' + val.phone + '</td>';
      content += '<td >' + val.nid + '</td>';
      content += '<td >' + val.status + '</td>';
      content += '<td >' + val.date + '</td>';
      content += '<td >' + val.password + '</td>';

      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: green;" onclick=edit("' + data.key + '") ><i class="fa fa-eye" aria-hidden="true"></i></a>' +
         '<a href="#" data-tip="delete" style="color: red;" onclick=dtl("' + data.key + '")><i class="fa fa-trash"></i></a>' +


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


function edit(key) {

  //alert(key)

  const userInput = document.getElementById("mainp");

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"
  document.getElementById("rev").style.display = "none"

  ke = key;


  var ref5 = firebase.database().ref().child("users").child(key);
  var ref6 = firebase.database().ref().child("id_verify").child(key);
  var signature = firebase.database().ref().child("signature").child(key);
  var bank = firebase.database().ref().child("bank").child(key);
  var mobile = firebase.database().ref().child("mobile").child(key);
  var eligibility = firebase.database().ref().child("education").child(key);
 // var withdraw = firebase.database().ref().child("widthdraw_code").child(key);
  var nomi = firebase.database().ref().child("nominee").child(key);

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



    }




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




    $('#mob').val(phone);


    $('#name').val(name);
    $('#nid2').val(nid);

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





}

function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  document.getElementById("det").style.display = "none"
document.getElementById("rev").style.display = "block"

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

function myImage4() {
  window.open(sigImage, '_blank')


}


function myImage14() {
  window.open(elec, '_blank')


}





function myImage5() {
  window.open(stimage4, '_blank')


}
function myImage6() {
  window.open(stimage5, '_blank')


}

function myImage7() {
  window.open(stimage6, '_blank')


}



function validate() {



  console.log(ke)



 

  var mob = document.getElementById("mob").value;
  var name = document.getElementById("name").value;
  var nid2 = document.getElementById("nid2").value;



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
       'bank':ubank,
        'id':id,
       'serial':userial
     

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







    location.reload();



  } else {
    return false;
  }





}

function validate2() {

  var accnumber  = document.getElementById("bnumber").value;
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




  



    location.reload();
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

function validate3() {

  var friendnumber2  = document.getElementById("friendnumber").value;
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


    location.reload();
    


  } else {
    return false;
  }





}



function validate4() {

  var car2  = document.getElementById("car").value;
  var education2 = document.getElementById("edu").value;
  var family2 = document.getElementById("family").value;
  var home2  = document.getElementById("home").value;
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


    location.reload();
    


  } else {
    return false;
  }





}





function validate8() {

 
  var name = document.getElementById("nname").value;
  var nid2 = document.getElementById("nnid2").value;



 
  var ref81 = firebase.database().ref().child("nominee");
  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {



    ref81.child(ke).set({
      'name': name,
      'nid': nid2,
    
      'image': stimage4,
      'image2': stimage5,
      'image3': stimage6,

    });







    location.reload();
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


function dtl(key){
 
  var ref5 = firebase.database().ref().child("users").child(key);
  var ref6 = firebase.database().ref().child("id_verify").child(key);
  var signature = firebase.database().ref().child("signature").child(key);
  var bank = firebase.database().ref().child("bank").child(key);
  var mobile = firebase.database().ref().child("mobile").child(key);
  var eligibility = firebase.database().ref().child("education").child(key);

  var nominee = firebase.database().ref().child("nominee").child(key);
  //var userDataRef2 = firebase.database().ref().child("subjectsetting").child(res).child("subtype").child(key);

  


  var didConfirm = confirm("Are you sure You want to delete??");
  if (didConfirm == true) {

    location.reload();

    ref5.remove();
    ref6.remove();
    signature.remove();
    bank.remove();
    mobile.remove();
    eligibility.remove();
  //  withdraw.remove();
  //  nominee.remove();
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
  rows.forEach(function(row) {
    table.appendChild(row);
  });
}