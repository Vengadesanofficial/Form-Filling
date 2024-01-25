function submitForm() {
      var form = document.getElementById("myForm");
      var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

      var row = table.insertRow(table.rows.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);

      cell1.innerHTML = form.elements["firstName"].value;
      cell2.innerHTML = form.elements["lastName"].value;
      cell3.innerHTML = form.elements["address"].value;
      cell4.innerHTML = form.elements["pincode"].value;
      cell5.innerHTML = form.elements["gender"].value;
      cell6.innerHTML = Array.from(form.elements["food"].selectedOptions).map(option => option.value).join(', ');
      cell7.innerHTML = form.elements["state"].value;
      cell8.innerHTML = form.elements["country"].value;

      // Clear form fields
      form.reset();
    }

    // Simple test suite
    function runTests() {
      var form = document.getElementById("myForm");
      var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

      // Test 1: Form submission
      form.elements["firstName"].value = "Vengadesan";
      form.elements["lastName"].value = "ram";
      form.elements["address"].value = "123 ";
      form.elements["pincode"].value = "12345";
      form.elements["gender"].value = "male";
      form.elements["food"].value = ["pizza", "burger"];
      form.elements["state"].value = "pudukkottai";
      form.elements["country"].value = "india";

      submitForm();

      // Check if the table has one row
      console.assert(table.rows.length === 1, "Test 1 failed");

      // Additional tests can be added as needed

      console.log("Tests completed");
    }

    // Run tests on page load (comment out for production)
    runTests();