 module.exports = function(app) {

var request = require('request');
 app.post("/beerData", function(req, res) {
    
    var userData = req.body
    var userInput = userData.location;
    var url = "https://api.brewerydb.com/v2/locations/?region=";
    var key = "&key=fda76aae9f5c3b395e3b587a4fa4318f&format=json";
    var frontEndData = [];

        url += userInput
        url += key

        // console.log(url);

request(url, function(error,response, body){
    // console.log("test")
     if (error && response.statusCode == 200) {
        //  console.log('error');
     } else {
         var beerData = JSON.parse(body)
         var numResults = beerData.totalResults;

         console.log
 //Dynamically creating brewery objects containing only select information from breweries, in hopes to reduce payload of our API page.
    for (var i = 0; i < numResults; i++) {
        
        if (beerData.data[i] !== undefined) {


        var selectedBreweryData = {
            breweryName: "",
            location: "",
            state: "",
            description: "",
            beerName:""

         }

        if (beerData.data[i].brewery !== undefined) {
            selectedBreweryData.breweryName = beerData.data[i].brewery.name;
        }

        if (beerData.data[i].locality !== undefined){
            selectedBreweryData.location = beerData.data[i].locality;
        }

        if (beerData.data[i].region !== undefined) {
            selectedBreweryData.state = beerData.data[i].region;
        }

        if (beerData.data[i].brewery !== undefined) {
            selectedBreweryData.description = beerData.data[i].brewery.description;
        }

        if (beerData.data[i].name !== undefined) {
            selectedBreweryData = beerData.data[i].name;
        }


    //Pushing above object to our API for use on front-end.
        frontEndData.push(selectedBreweryData);

        }

    }

        res.json(frontEndData);
    }
})
 })
 };
   
