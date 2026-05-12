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
    
    
    
    var alluser = firebase.database().ref().child("loan_settings").child('two');
    
    var loan_amount = firebase.database().ref().child("loan_settings").child('one');

    var loan_cycle = firebase.database().ref().child("cycle");
    
    
    var max_loan = '';
    var cycle = '';
    
  
  var rate = '';
  var bkash = '';
  var rocket = '';


  var loan_one = '';
  var loan_two = '';
  var loan_three = '';
  var loan_four = '';
  var loan_five = '';
  var loan_six = '';




  var cycle_one = '';
  var cycle_two = '';
  var cycle_three = '';
  var cycle_four = '';
  var cycle_five = '';
  var cycle_six = '';


  


		console.log(localStorage.getItem("storageName"));



  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        max_loan = snapshot4.val().max_loan;
        cycle = snapshot4.val().cycle ;
        rate = snapshot4.val().rate;
  
  
  
  
      }
  
  
    
      console.log("bkash"+max_loan);
      console.log("nogod"+cycle);
  
      $('#max_loan').val(max_loan);
      $('#cycle').val(cycle);
      $('#rate').val(rate);
  
  
    });
  
  
    function validate() {
  
      var max_loan  = document.getElementById("max_loan").value;
      var cycle = document.getElementById("cycle").value;
      var rate = document.getElementById("rate").value;
      
    
    
      var ref10 = firebase.database().ref().child("loan_settings");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('two').set({
          "max_loan": max_loan,
          "cycle": cycle,
          'rate': rate,
        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    



    loan_amount.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        loan_one = snapshot4.val().one;
        loan_two = snapshot4.val().two ;
        loan_three = snapshot4.val().three;
  
        loan_four = snapshot4.val().four;
        loan_five = snapshot4.val().five ;
        loan_six = snapshot4.val().six;
  
  
      }
  
  
  

  
      $('#loan_one').val(loan_one);
      $('#loan_two').val(loan_two);
      $('#loan_three').val(loan_three);

      $('#loan_four').val(loan_four);
      $('#loan_five').val(loan_five);
      $('#loan_six').val(loan_six);
  
  
    });
    
    
    
    
  
  
    function validate2() {
  
      var loan_one  = document.getElementById("loan_one").value;
      var loan_two = document.getElementById("loan_two").value;
      var loan_three = document.getElementById("loan_three").value;

      var loan_five  = document.getElementById("loan_five").value;
      var loan_four = document.getElementById("loan_four").value;
      var loan_six = document.getElementById("loan_six").value;
      
    
    
      var ref10 = firebase.database().ref().child("loan_settings");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('one').set({
          "one": loan_one,
          "two": loan_two,
          'three': loan_three,
        
          "five": loan_five,
          "four": loan_four,
          'six': loan_six,
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
  
  
    
    loan_cycle.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        cycle_one = snapshot4.val().one;
        cycle_two = snapshot4.val().two ;
        cycle_three = snapshot4.val().three;
  
        cycle_four = snapshot4.val().four;
        cycle_five = snapshot4.val().five ;
        cycle_six = snapshot4.val().six;
  
  
      }
  
  
  

  
      $('#cycle_one').val(cycle_one);
      $('#cycle_two').val(cycle_two);
      $('#cycle_three').val(cycle_three);

      $('#cycle_four').val(cycle_four);
      $('#cycle_five').val(cycle_five);
      $('#cycle_six').val(cycle_six);
  
  
    });
  
    
  
    
    function validate3() {
  
      var cycle_one  = document.getElementById("cycle_one").value;
      var cycle_two = document.getElementById("cycle_two").value;
      var cycle_three = document.getElementById("cycle_three").value;

      var cycle_five  = document.getElementById("cycle_five").value;
      var cycle_four = document.getElementById("cycle_four").value;
      var cycle_six = document.getElementById("cycle_six").value;
      
    
    
      var ref10 = firebase.database().ref().child("cycle");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.set({
          "one": cycle_one,
          "two": cycle_two,
          'three': cycle_three,
        
          "five": cycle_five,
          "four": cycle_four,
          'six': cycle_six,
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
  