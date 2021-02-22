// [START maps_http_geocode_components_zero_results_fixed]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/geocode/json?components=components=route:Annankatu|administrative_area:Helsinki|country:Finland&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_geocode_components_zero_results_fixed]