const request = require('request');
const arg = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  
  if (error) {
    console.log('error: breed not found', error); 
  }
  
  
  // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
  // console.log(typeof body)
});