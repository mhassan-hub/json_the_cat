const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
      const data = JSON.parse(body);
      // console.log(data)
      if (data[0] === undefined) {

        callback('breed not found');
      } else {
        callback(null, data[0].description)
        // console.log(data[0].description);
        // return data;
      }
  });
};

module.exports = fetchBreedDescription;
