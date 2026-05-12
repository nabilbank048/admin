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
const db = firebase.firestore();



//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

var phone = '';
var chatstatus = '';

var key2 = '';

var customer = firebase.database().ref().child("users");





var sigImage = '';


var username = '';






var gender = 'd';
















customer.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      var coll = '';

      if(val.unread == '0')
      {
        coll = '<td  style="color:green;font-weight:bold">' + val.unread + '</td>';
      }
      else{
         coll = '<td  style="color:red;font-weight:bold">' + val.unread + '</td>';
      }



      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.name + '</td>';
      content += '<td >' + val.phone + '</td>';
      content += '<td >' + val.nid + '</td>';
      content += '<td >' + val.chatstatus + '</td>';
      content += coll;

      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td>" +
        '<a href="#" data-tip="edit" style="color: rgb(28, 214, 93);" onclick=edit2("' + data.key + '") ><i class="fa fa-commenting-o"></i></a>' +
        '<a href="#" data-tip="edit" style="color: rgb(28, 81, 214);" onclick=edit("' + data.key + '") ><i class="fa fa-pencil-square-o"></i></a>' +



        "</td>";


      content += '</tr>';






    });






    $('#atttbl_posts_body').html(content);


  }


});


function edit2(key) {

  firebase.database().ref().child('users').child(key).update({ unread: "0" })


  localStorage.setItem("sharedData", key);
window.location.href = "chat.html";




}




function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}




function edit3(key) {
  var didConfirm = confirm("Are you sure You want to Update ??");


var ref51 = firebase.database().ref().child("users").child(key);


  console.log(key)







  if (didConfirm == true) {



  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      
      chatstatus = snapshot4.val().chatstatus;
    }


    console.log(chatstatus)


    
if(chatstatus == 'Disable'){

firebase.database().ref().child('users').child(key).update({ 'chatstatus': "Active" })
}

else
{
firebase.database().ref().child('users').child(key).update({ 'chatstatus': "Disable" })
}


    });

    

    /*






*/
  


}

  else {
    return false;
  }

}




function edit(key) {

  //alert(key)

  key2 = key;

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  var arr = document.getElementsByName('x').value;



  var ref5 = firebase.database().ref().child("users").child(key);


  console.log(key)



  username = sessionStorage.getItem("username");
  console.log('user name :     ' + username);


  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      phone = snapshot4.val().phone;
      chatstatus = snapshot4.val().chatstatus;





      // 3. Iterate through documents and create list items







    }


    $('#pstatus').html(chatstatus);



    













    // Reference to 'items'
    //            const itemsRef = database.ref('balance_record').child(userid);

    // Fetch data from Firestore and render in the 

    /*
    db.collection('chatroom').doc(username + phone).collection('chats').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        //  renderAccount(doc);
        const list = document.getElementById('data-list');

        console.log(doc.data().message);

        const li = document.createElement('li');

        li.textContent = `${doc.data().message}`; // Replace 'fieldName' with your actual field
    list.appendChild(li);


      });
      //$('#atttbl_posts_body').html(content);
    }).catch(err => {
      console.log('Error getting documents', err);
    });


*/


  })



}






function validate341() {


    if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }



  var didConfirm = confirm("Are you sure You want to submit??");
  






  if (didConfirm == true) {

console.log(chatstatus)




firebase.database().ref().child('users').child(key2).update({ 'chatstatus': gender }).then(() => {

      window.location = "customer.html";
    });






  
  
  } else {
    return false;
  }



}




// Run the function



async function fetchData() {
  //const querySnapshot = collection(db,"chatroom");

  console.log("phone :"+phone);

  

  //querySnapshot.forEach((doc) => {});
}


window.onload = fetchData();

//fetchData();





function validate() {



  console.log(phone);
  console.log(username)


  var today = new Date();



  var chat = document.getElementById("chat").value;




  db.collection('chatroom').doc(username + phone)
    .collection('chats').add({
      "sendby": username,
      "message": chat,
      "type": "text",
      "time": today,

    })




}


function myclose() {
  // get user input
  //document.getElementById("mainp").style.display = "block"
  //document.getElementById("frm").style.display = "block"
  //document.getElementById("user").style.display = "block"
  //document.getElementById("clos").style.display = "none"

  //document.getElementById("det2").style.display = "none"
  //document.getElementById("det3").style.display = "none"
  //document.getElementById("det4").style.display = "none"

  //notif = '';

  location.reload();


}






function validate34() {
  var didConfirm = confirm("Are you sure You want to Update ??");

  if (didConfirm == true) {



    const url2 = document.getElementById('mob').value;





    var database = firebase.database();


    database.ref('customer_care').child(key2).set({


      'service_name': service_name,
      'url': url2,




    }).then(() => {
      window.location.href = "customer.html";
    });


  }

  else {
    return false;
  }

}







