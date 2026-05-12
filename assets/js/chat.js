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
var url = '';

var key2 = '';

var customer = firebase.database().ref().child("users");





var sigImage = '';


var username = '';



const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dy3orrck5/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'chat_image';




const receivedValue = localStorage.getItem("sharedData");
console.log(receivedValue); // Outputs: Hello from Page 1


username = sessionStorage.getItem("username");
console.log('user name :     ' + username);










var ref5 = firebase.database().ref().child("users").child(receivedValue);






ref5.on("value", function (snapshot4) {
  if (snapshot4.exists()) {



    phone = snapshot4.val().phone;
    url = snapshot4.val().url;

  }






  //    $('#mob').val(url);

  $('#usrt').html('Phone number : ' + phone);



  const list = document.getElementById("dataList");




  db.collection('chatroom').doc(username + phone).collection('chats').orderBy("time", "asc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      //  renderAccount(doc);
      //const list = document.getElementById('data-list');

      const data = doc.data()



      const li = document.createElement('li');


      var coll = '';
      var dis = '';


      if (data.sendby == phone) {

        coll = 'replies'
        dis = 'assets/img/219988.png'



      }

      else {
        coll = 'sent'
        dis = 'http://emilcarlsson.se/assets/harveyspecter.png'


      }



      if (data.type == 'image') {
        li.innerHTML = `

                        <li class="${coll}">
					<img src="${dis}" alt=""  id="tt" />

          <img src="${data.message}" alt=""  height='150' width='150' style='cursor:pointer' />

				</li>
                              
                                        
                                     

          `;
      }

      else {


        li.innerHTML = `

                        <li class="${coll}">
					<img src="${dis}" alt=""  id="tt" />

          
<p>${data.message}</p>
				</li>
                              
                                        
                                     

          `;

      }




      list.appendChild(li);


    });
    //$('#atttbl_posts_body').html(content);
  }).catch(err => {
    console.log('Error getting documents', err);
  });






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




}







// Run the function



async function fetchData() {
  //const querySnapshot = collection(db,"chatroom");

  console.log("phone :" + phone);



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







const fileId = document.querySelector('#file-upload');




fileId.onchange = function fileChange() {
  const fileInput = document.getElementById('file-upload');
  const file = fileInput.files[0];
  var today = new Date();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',

    },
    data: formData
  }).then(function (res) {
    console.log(res.data.secure_url);


    db.collection('chatroom').doc(username + phone)
      .collection('chats').add({
        "sendby": username,
        "message": res.data.secure_url,
        "type": "image",
        "time": today,

      });





  }).catch(function (err) {
    console.error(err);
  })
}