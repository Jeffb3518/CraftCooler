$(document).ready(function() {
  // Getting references to our input

  // When the signup button is clicked, we validate the email and password are not blank
  $("#btn-signup").on("click", function() {


  var firstName = $("#firstName").val().trim();
  var lastName = $("#lastName").val().trim();
  var emailInput = $("#email").val().trim();
  var passwordInput = $("#password").val().trim();


    var userData = {
      first: firstName,
      last: lastName,  
      email: emailInput,
      password: passwordInput
    };

    var userDate = firstname

    localStorage.setItem('userData', firstName);
    console.log("local storage worked!");

    /*window.location = "profile.html";*/
    ///This may not work when you are running node, swtich back to the html
    window.location.replace('profile.html');

    if (!userData.first || !userData.last || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
/*    signUpUser(userData.first, userData.last, userData.email, userData.password);
    firstName.val("");
    lastName.val("");
    emailInput.val("");
    passwordInput.val("");*/
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
/*  function signUpUser(first, last, email, password) {
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
  }*/

});