 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBtOX1p4cQqnhO40jE_Rptnja0xRisRZ8c",
    authDomain: "ecommerce-9502d.firebaseapp.com",
    projectId: "ecommerce-9502d",
    storageBucket: "ecommerce-9502d.appspot.com",
    messagingSenderId: "443307242634",
    appId: "1:443307242634:web:6e374c7c64a9e2329d6973",
    measurementId: "G-ETYPXCM2E5"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    var uploader = document.getElementById('progress');

    var fileInput = document.getElementById('fileInput');

    var file;
    var files;
    var t;


    let x = Math.floor((Math.random() * 1869966665999) + 1);

    let fileList = [];
    var data;
    let fileList2 = [];

    var imageFile;


    fileInput.addEventListener('change', function (e) {

        fileList = [];
        const files = fileInput.files;
        //Get files
        for (var i = 0; i < files.length; i++) {
            //  imageFile = e.target.files[i];

            // uploadImageAsPromise(imageFile);
            fileList.push(files[i]);
        }
    });

    

    let len = 0

    db.collection("ItemList").get().then(function(querySnapshot) { 
       len = querySnapshot.size;
    });
    //Handle waiting to upload each file using promise


    var validate = function () {

     
        var itemName = document.getElementById('item-name').value;
    var attributes = document.getElementById('attributes').value;
    var price = document.getElementById('price').value;
    var discount = document.getElementById('discount').value;
    var sel1 = document.querySelector('#sel1');
    var sel2 = document.querySelector('#sel2');
    var description = document.getElementById('description').value;

      
        var today = new Date();
        var date = today.getSeconds() + "1" + today.getTime() + "2" + today.getMilliseconds();
        var size = len.toString();
        //  e.preventDefault(); //Block the form from reloading the page
        console.log(fileList);
        const files = fileInput.files.list;
        for (var i = 0; i < fileList.length; i++) {
             imageFile = fileList[i];

            var storageRef = firebase.storage().ref('items/'+sel1.value+"/" + sel2.value+"/"+ imageFile.name);

            //Upload file
            var task = storageRef.put(imageFile);


            console.log(imageFile);
            //uploadImageAsPromise(imageFile);

            task.on('state_changed',
                function progress(snapshot) {
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    uploader.value = percentage;
                },
                function error(err) {

                },
                function complete() {
                    var downloadURL = task.snapshot.downloadURL;
                    var all = [];
                    for (i = 0; i < 3; i++) {
                        let element = task.snapshot.downloadURL;
                        all.push(element);
                    }

                    //  var downloadURL = task.snapshot.downloadURL;

                    

                    db.collection("ItemList").doc(size).set({
                        Image: all,
                        ItemName: itemName,
                        Attributes: attributes,
                        price: price,
                        Category:sel1.value,
                        SubCategory:sel2.value,
                        Discount:discount,
                        Description:description

                    })
                        .then(function () {
                            console.log("Doc successful");
                          //  alert("Item Insert Success!");
                     //  window.location.reload();
                        })
                        .catch(function (error) {
                            console.error("Error writing doc", error);
                        });
                }
            );


        }




    }


