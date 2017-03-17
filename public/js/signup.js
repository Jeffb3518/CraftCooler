$(document).ready(function() {
  // Getting references to our input
  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var emailInput = $("email");
  var passwordInput = $("#password");

  // When the signup button is clicked, we validate the email and password are not blank
  $("#btn-signup").on("click", function() {
    var userData = {
      first: firstName.val().trim(),
      last: lastName.val().trim(),  
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.first || !userData.last || !userData.email || !userData.password ||) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first, userData.last, userData.email, userData.password);
    firstName.val("");
    lastName.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first, last, email, password) {
    $.post("/api/profile", {
      first: first name,
      last: last name,
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});