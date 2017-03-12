require('../routes/api-route.js');

// variables will hold the results of the user input

var stateResult = "";
var breweryName = "";
var location = "";
var state = "";
var description = "";
var beerName = "";

// on Click asssociated with the serach button

$('#runSearch').on('click', function(){
    stateResult = 0;

    // set results to zero
    $('#resultSection').empty();

    // serach term
    var searchTerm = $('#searchTerm').val().trim();
    var queryURL = url + searchTerm;

    // brewery resuts
    breweryName = $('#breweryName').val().trim();

    // location result
    location = $('#location').val().trim();

    // state result
    state = $('#state').val().trim();

    // beer description
    description = $('description').val().trim();

    // beer name
    beerName = $('beerName').val().trim();

    // if user provides search term (state) it will be included in the query
    if (stateResult) {
        queryURL + stateResult;
    }

    // results of the query
    runSearch(stateResult, queryURL);

    // hit enter, registers the search
    return false;
});

// This button clears the top articles section
$('#clearAll').on('click', function(){
	stateResult = 0;
	$("#wellSection").empty();
})