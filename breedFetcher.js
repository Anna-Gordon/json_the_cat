const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  breedName = breedName.slice(0, 3).toLowerCase();
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, function(error, response, body) {
    let data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null);
    }
    let descData = data[0]["description"];
    return callback(null, descData);
    
  });
};

module.exports = { fetchBreedDescription };

