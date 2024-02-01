var email = document.getElementById("username").value;
var pass = document.getElementById("password").value;


function isValidUsername(username) {
    // Regular expression to match only alphanumeric characters
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
    // Test if the username matches the regular expression
    return alphanumericRegex.test(username);
  }

  if (isValidUsername(username)) {
    console.log("Username is valid");
  } else {
    console.log("Invalid username. Only alphanumeric characters are allowed.");
  }