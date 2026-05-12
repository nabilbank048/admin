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
      
      
    var ke = '';
    
      function validate() {
    
        var bkas  = document.getElementById("bkas").value;
        var nog = document.getElementById("nog").value;
     
        
      
      
        var ref10 = firebase.database().ref().child("admin");
      
        var didConfirm = confirm("Are you sure You want to create??");
        if (didConfirm == true) {
      
          ref10.child('asdmin_user').push().set({
            "username": bkas,
            "password": nog,
  
          
            
      
          });
     // alert('create successfully !!!')
      
          location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      
      
      
      
      
      var alluser = firebase.database().ref().child("admin").child('asdmin_user');

      var admin = '';
      var pass = '';
      
    
      
      
      
      alluser.once("value").then(function (snapshot) {
  
        if (snapshot.exists()) {
      
          var content = '';
      
      
      
      
      
      
          snapshot.forEach(function (data) {
      
      
      
            var val = data.val();
      
    
      
           
      
        //  document.getElementById("aa").style.color = 'rgb(230, 175, 35)'
      
      
      

      
            content += '<tr name="bc">';
      
            // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      
      
            content += '<td >' +'</td>';
            content += '<td >' + val.username + '</td>';
            content += '<td >' + val.password+ '</td>';
            
    

      
            content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: rgb(28, 81, 214);"  onclick=stats("' + data.key + '")><i class="fa fa-edit" aria-hidden="true"></i></a>' +
            '<a href="#" data-tip="delete" style="color: red;" onclick=dtl("' + data.key + '")><i class="fa fa-trash"></i></a>'+
    
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
      
        var arr = document.getElementsByName('x').value;
      
        console.log(arr);
      
      
      
        ke2 = key;
      
        var ref51 = firebase.database().ref().child("admin").child('asdmin_user').child(key);
      
      
        ref51.on("value", function (snapshot4) {
          if (snapshot4.exists()) {
      
            admin = snapshot4.val().username;
            pass = snapshot4.val().password ;
      
      
            
      
            //  sec = snapshot4.val().section;
      
      
      
      
      
          }
      
      
      
      

      
      
          $('#camount2').val(admin);
         
      
          $('#camount3').val(pass);
      
      
      
        });
      
    
      }
      
    
      
    
      function myclose() {
        // get user input
       
      location.reload();
      
      }

      function dtl(key){
 
        var ref5 = firebase.database().ref().child("admin").child('asdmin_user').child(key);
     
      
        
      console.log(ref5);
      
        var didConfirm = confirm("Are you sure You want to delete??");
        if (didConfirm == true) {
      
        //  location.reload();
      
          ref5.remove();

          location.reload();
      
      
        } else {
        }
      }
      


      function validate3() {

        var friendnumber2  = document.getElementById("camount2").value;
        var nomineenumber2 = document.getElementById("camount3").value;
   
      
      
        var ref10 = firebase.database().ref().child("admin");
      
        var didConfirm = confirm("Are you sure You want to submit??");
        if (didConfirm == true) {
      
          ref10.child('asdmin_user').child(ke2).set({
           
              "username": friendnumber2,
              "password": nomineenumber2,
    
            
              
        
            });
            
      

      
      
          location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      