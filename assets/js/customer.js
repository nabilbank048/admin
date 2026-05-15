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
