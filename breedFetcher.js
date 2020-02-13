const request = require('request');
const userInput = process.argv.slice(2).toString();
const query = userInput.slice(0, 3).toLowerCase();
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + query;

request(url, function(error, response, body) {
  if (body.length === 2) {
    console.log("Breed Not Found");
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }

  if (!error) {
  } else {
    console.log(error);
  }

});
