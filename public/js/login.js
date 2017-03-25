$(document).ready(function() {

  // When submitted, we validate there's an email and password entered
  $("#btn-login").on("click", function() {

  // Getting references to our inputs
  var emailInput = $("#login-username");
  var passwordInput = $("#login-password");

    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(userData);

/*    if ((!userData.email) || (!userData.password)) {
      console.log("bad");
      return;
    }*/

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userData) {
    console.log("good");
    $.post("/api/login", {
      email: userData.email,
      password: userData.password
    }).then(function(data) {
      console.log(data);
      if (data.status == 'success'){
        alert('Success!');
        // isAuthenticated();
        var url = window.location.origin + '/profile';
        window.location.replace(url);
        // console.log("This is my user object");
      } else if (data.status == 'invalid'){
        alert('Error!');
      }
    //   window.location.replace(data);
      // If there's an error, log the error
    })
  }

  isAuthenticated();

function isAuthenticated(){
    $.ajax({

        method: 'GET',

        url: '/isAuthenticated',

        success: function(response){
            //user is not signed in
              if (response == "invalid"){
                  console.log("not logged in");
                  // var url = window.location.origin + '/login';
                  // window.location.replace(url);
              } else {
                  //redirect to profile
              console.log('we made it')
              $('#name').html(response.email);
            }
        }

    });
}

});