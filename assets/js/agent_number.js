const firebaseConfig = {
 apiKey: "AIzaSyD1PsXLqv4uWMHhFdUBJgHCKw3kIbFMro4",
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
  
  
  
  var alluser = firebase.database().ref().child("agent_number").child('10');
  
  
  
  
  var total = '';
  var ploan = '';
  

var nogod = '';
var bkash = '';
var rocket = '';


alluser.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      bkash = snapshot4.val().bkash;
       nogod = snapshot4.val().nogod ;
       rocket = snapshot4.val().rocket;




    }



    console.log("bkash"+bkash);
    console.log("nogod"+nogod);

    $('#bkas').val(bkash);
    $('#nog').val(nogod);
    $('#roc').val(rocket);


  });


  function validate() {

    var bkas  = document.getElementById("bkas").value;
    var nog = document.getElementById("nog").value;
    var roc = document.getElementById("roc").value;
    
  
  
    var ref10 = firebase.database().ref().child("agent_number");
  
    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {
  
      ref10.child('10').set({
        "bkash": bkas,
        "nogod": nog,
        'rocket': roc,
      
        
  
      });
  
  
      location.reload();
      
  
  
    } else {
      return false;
    }
  
  
  
  
  
  }
  
  
  
  
  


  
  
  
  


  
  

  

  

