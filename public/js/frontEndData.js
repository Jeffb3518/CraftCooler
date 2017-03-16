// on Click asssociated with the serach button
var userData = {
    location: "Alabama"
}

console.log("working");

$('#runSearch').on('click', function(){

$.post("/beerData", userData, function(data) {

   for(var i = 0; i < data.length; i++) {
       var beerDiv = $("<tr/>");

   if ((data[i].breweryName !== undefined) || (data[i].location !== undefined) || (data[i].state !== undefined) || (data[i].description !== undefined)){

       var name = data[i].breweryName
       var location = data[i].location
       var state = data[i].state
       var description = data[i].description

       var nameResult = $("<td>").text("Brewery Name: " + data[i].breweryName);
       var locationResult = $("<td>").text("City: " + data[i].location);
       var stateResult = $("<td>").text("State: " + data[i].state);
       var descriptionResult = $("<td>").text("Description: " + data[i].description);

       beerDiv.append(nameResult);
       beerDiv.append(locationResult);
       beerDiv.append(stateResult);
       beerDiv.append(descriptionResult);

       
       $(".beer").append(beerDiv);
   }
}


console.log(data);
});
});

$('#runSearch').trigger('click');
    