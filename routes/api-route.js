function findBeer(){
    var userInput = "florida";
    var url = "https://api.brewerydb.com/v2/locations/?region=";
    var key = "fda76aae9f5c3b395e3b587a4fa4318f&format=json";

        url += userInput
        url += key

request(url, function(error,response, body){
     if (!error && response.statusCode == 200) {
         var beerData = JSON.parse(body)
         var numResults = beerData.totalResults;

 //Dynamically creating brewery objects containing only select information from breweries, in hopes to reduce payload of our API page.
    for (var i = 0; i < numResults; i++) {
        var selectedBreweryData = {
            breweryName: beerData.data[i].brewery.name,
            location: beerData.data[i].locality,
            state: beerData.data[i].region,
            description: beerData.data[i].brewery.description,
            berrName: beerData.data[i].name

        }
    //Pushing above object to our API for use on front-end.
        beerData.push(selectedBreweryData)
        frontEndData.push(selectedBreweryData);
    }
        res.json(frontEndData);
    }
    })
}
})