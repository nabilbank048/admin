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


var aggrement = firebase.database().ref().child("aggrement");
var aggrement2 = firebase.database().ref().child("aggrement").child('1');


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

var payment_date = '';





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
        payment_date = snapshot4.val().payment_date;


        hten2 = snapshot4.val().headten;
        htencom2 = snapshot4.val().htencom;
        heleven2 = snapshot4.val().headeleven;
        helevencom2 = snapshot4.val().helevencom;
        htwelve2 = snapshot4.val().headtwelve;
        htwelvecom2 = snapshot4.val().htwelvecom;
        hthirteen2 = snapshot4.val().headthirteen;
        hthirteencom2 = snapshot4.val().hthirteencom;




    }



    $('#pay_date').val(payment_date);

    $('#hone').val(hone2);
    $('#oneoptiona').val(oneoptiona2);
    $('#oneoptionb').val(oneoptionb2);
    $('#oneoptionc').val(oneoptionc2);
    $('#htwo').val(htwo2);
    $('#twooptiona').val(twooptiona2);
    $('#twooptionb').val(twooptionb2);
    $('#hthree').val(hthree2);
    $('#hthreecom').val(hthreecom2);
    $('#hfour').val(hfour2);
    $('#hfourcom').val(hfourcom2);
    $('#hfive').val(hfive2);
    $('#hfivecom').val(hfivecom2);
    $('#hsix').val(hsix2);
    $('#hsixcom').val(hsixcom2);
    $('#hseven').val(hseven2);
    $('#hsevencom').val(hsevencom2);
    $('#height').val(height2);
    $('#heightcom').val(heightcom2);
    $('#hnine').val(hnine2);
    $('#hninecom').val(hninecom2);
    $('#hten').val(hten2);
    $('#htencom').val(htencom2);
    $('#heleven').val(heleven2);
    $('#helevencom').val(helevencom2);
    $('#htwelve').val(htwelve2);
    $('#htwelvecom').val(htwelvecom2);
    $('#hthirteen').val(hthirteen2);
    $('#hthirteencom').val(hthirteencom2);
   


});








var total = '';
var ploan = '';


function validate() {

    var hone = document.getElementById("hone").value;
    var oneoptiona = document.getElementById("oneoptiona").value;
    var oneoptionb = document.getElementById("oneoptionb").value;
    var oneoptionc = document.getElementById("oneoptionc").value;
    var htwo = document.getElementById("htwo").value;
    var twooptiona = document.getElementById("twooptiona").value;
    var twooptionb = document.getElementById("twooptionb").value;
    var hthree = document.getElementById("hthree").value;
    var hthreecom = document.getElementById("hthreecom").value;
    var hfour = document.getElementById("hfour").value;
    var hfourcom = document.getElementById("hfourcom").value;
    var hfive = document.getElementById("hfive").value;
    var hfivecom = document.getElementById("hfivecom").value;
    var hsix = document.getElementById("hsix").value;
    var hsixcom = document.getElementById("hsixcom").value;
    var hseven = document.getElementById("hseven").value;
    var hsevencom = document.getElementById("hsevencom").value;
    var height = document.getElementById("height").value;
    var heightcom = document.getElementById("heightcom").value;
    var hnine = document.getElementById("hnine").value;
    var hninecom = document.getElementById("hninecom").value;



    var hten = document.getElementById("hten").value;
    var htencom = document.getElementById("htencom").value;
    var heleven = document.getElementById("heleven").value;
    var helevencom = document.getElementById("helevencom").value;
    var htwelve = document.getElementById("htwelve").value;
    var htwelvecom = document.getElementById("htwelvecom").value;
    var hthirteen = document.getElementById("hthirteen").value;
    var hthirteencom = document.getElementById("hthirteencom").value;
    var payment_date2 = document.getElementById("pay_date").value;


    var didConfirm = confirm("Are you sure You want to submit??");

    if (didConfirm == true) {
    aggrement.child('1').set({
        "payment_date":payment_date2,
        "headone": hone,
        "headoneoptionA": oneoptiona,
        'headoneoptionB': oneoptionb,
        "headoneoptionC": oneoptionc,
        "headtwo": htwo,
        'headtwooptionA': twooptiona,

        "headtwooptionB": twooptionb,

        "headthree": hthree,
        'hthreecom': hthreecom,

        "headfour": hfour,
        "hfourcom": hfourcom,


        'headfive': hfive,
        "hfivecom": hfivecom,


        "headsix": hsix,
        'hsixcom': hsixcom,



        "headseven": hseven,
        "hsevencom": hsevencom,


        'headeight': height,
        "heightcom": heightcom,


        "headnine": hnine,
        'hninecom': hninecom,


        "headten": hten,
        "htencom": htencom,



        'headeleven': heleven,
        "helevencom": helevencom,


        "headtwelve": htwelve,
        'htwelvecom': htwelvecom,


        "headthirteen": hthirteen,
        "hthirteencom": hthirteencom,




    });
} else {
    return false;
  }



}