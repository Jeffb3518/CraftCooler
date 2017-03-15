// on Click asssociated with the serach button
var userData = {
    location: "Florida"
}

console.log("working");

$('#runSearch').on('click', function(){

$.post("/beerData", userData, function(data) {

    // $("#breweryName").text(data.brewery.name);

console.log(data);
});
});

$('#runSearch').trigger('click');
    