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
  
  var vdate = '';
  var vdate2 = '';
  var vstatus = '';
  var vstatus2 = '';
  var vphone = '';
  var vphone2 = '';
  var notif = '';
  var notif2 = 'No Notification';
  
  var gender = 'd';
  
  
  
  var recharge = firebase.database().ref().child("recharge").orderByChild('serial');;
  
  

  
  
  var sigImage = '';
  
  
  

  
  
  

  
  
  recharge.once("value").then(function (snapshot) {
  
    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();
  
        var tt = val.status;
  
  
  
  
  
        content += '<tr name="bc">';
  
        // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
  
  
        content += '<td >' + val.rdate + '</td>';
        content += '<td >' + val.phone + '</td>';
        content += '<td >' + val.name + '</td>';
        content += '<td >' + val.amount+" tk" + '</td>';
      
        
        content += "<td class= 'td22'> <img   height='50' width='50'  src='" ;
        content += val.image;
        content += "'/> </td>";
        // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';
  
        content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: green;font-size:20px;" onclick=edit("' + data.key + '") ><i class="fa fa-eye" aria-hidden="true"></i></a>' +
       


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
  
  

  function edit(key) {

    //alert(key)
  
   
  
  
    var ref5 = firebase.database().ref().child("recharge").child(key);

  
    ref5.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
        sigImage = snapshot4.val().image;
       
  
  
  
  
      }
  
  console.log(sigImage)
  
      window.open(sigImage, '_blank').focus();
  
  
  
  
    });
  
  
  
 

  
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
        rows.forEach(function(row) {
          table.appendChild(row);
        });
      }