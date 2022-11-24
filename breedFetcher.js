const request = require('request');

const breedType = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit;

  }
  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log("Breed not found");
    process.exit;
   
  }
  console.log(data[0].description);

});


