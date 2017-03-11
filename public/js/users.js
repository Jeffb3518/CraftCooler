$(document).ready(function() {
  // Getting references to the name inout and user container, as well as the table body
  var firstNameInput = $("#firstName");
  var lastNameInput = $("#lastName");
  var emailInput = $('#email');
  var passInput = $('#password');

  var userContainer = $(".user-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an User
  $(document).on("click", "#btn-signup", handleUserFormSubmit);


  // A function to handle what happens when the form is submitted to create a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!firstNameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertUser function and passing in the value of the name input
    upsertUser({
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passInput.val().trim(),
        
    });
  }

  // A function for creating an user. Calls getUsers upon completion
  function upsertUser(userData) {
  $.ajax({
   type: 'POST',
   url: '/api/users',
   data: JSON.stringify(userData), 
   success: function(data) { alert('data: ' + data); },
   contentType: "application/json",
   dataType: 'json'
});
      
  }

  function getTodos() {
    $.get("/api/users", function(data) {
      console.log("Todos", data);
      todos = data;
      initializeRows();
    });
  }




});

