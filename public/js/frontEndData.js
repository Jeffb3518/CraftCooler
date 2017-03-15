// on Click asssociated with the serach button
var userData = {
    location: "Florida"
}

console.log("working");

$('#runSearch').on('click', function(){

$.post("/beerData", userData, function(data) {

   for(var i = 0; i < data.length; i++) {
       var beerDiv = $("<div class=\"beer-item\">");

       var name = data[i].brewery.name
       var location = data[i].locality
       var state = data[i].region
       var description = data[i].brewery.description
       var beerName = data[i].name

       var nameResult = $("<p>").text("Brewery Name: " + brewery.name);
       var locationResult = $("<p>").text("City: " + locality);
       var stateResult = $("<p>").text("State: " + region);
       var descriptionResult = $("<p>").text("Description: " + brewery.description);
       var beerNameResult = $("<p>").text("Name: " + name);
   }

console.log(data);
});
});

$('#runSearch').trigger('click');
    