// on Click asssociated with the serach button
var userData = {
    location: "Florida"
}

console.log("working");

$('#runSearch').on('click', function(){

$.post("/beerData", userData, function(data) {

   for(var i = 0; i < data.length; i++) {
       $("div").append(data[i].brewery.name)
   }

console.log(data);
});
});

$('#runSearch').trigger('click');
    