// [START maps_http_geocode_winnetka_bounds]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&bounds=34.172684%2C-118.604794%7C34.236144%2C-118.500938&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_geocode_winnetka_bounds]