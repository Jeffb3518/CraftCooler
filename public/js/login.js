$(document).ready(function() {
  // Getting references to our inputs
  var emailInput = $("#login-username");
  var passwordInput = $("#login-password");

  // When submitted, we validate there's an email and password entered
  $("#btn-login").on("click", function() {
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(userData);

    if ((!userData.email) || (!userData.password)) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userData) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
    //   window.location.replace(data);
      // If there's an error, log the error
    }).then(function(err) {
      console.log(err);
    });
  }

});