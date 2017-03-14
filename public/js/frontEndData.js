// on Click asssociated with the serach button
var userData = {
    location: "Florida"
}

$('#runSearch').on('click', function(){

$.post("/beerData", userData, function(data) {

    // $("#breweryName").text(data.brewery.name);

console.log(data);
});
});

$('#runSearch').trigger('click');
    