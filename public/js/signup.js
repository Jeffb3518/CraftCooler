$(document).ready(function() {
  // Getting references to our input
<<<<<<< HEAD
=======
  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var emailInput = $("#email");
  var passwordInput = $("#password");
>>>>>>> b2bf8e1103991be2b78217f76996014a84b5ac16

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

<<<<<<< HEAD
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
=======
    console.log(userData);

    if ((!userData.first) || (!userData.last) || (!userData.email) || (!userData.password)) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
>>>>>>> b2bf8e1103991be2b78217f76996014a84b5ac16
    firstName.val("");
    lastName.val("");
    emailInput.val("");
    passwordInput.val("");*/
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
<<<<<<< HEAD
/*  function signUpUser(first, last, email, password) {
    $.post("/api/profile", {
      first: first name,
      last: last name,
      email: email,
      password: password
=======
  function signUpUser(userData) {
    $.post("/api/signup", userData, function(data) {
      console.log(data);
>>>>>>> b2bf8e1103991be2b78217f76996014a84b5ac16
    }).then(function(data) {
      // window.location.replace(data);
      console.log("data sent to backend");
    }).then(function(err) {
      console.log(err);
    });
  }*/

});