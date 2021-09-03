// [START maps_http_elevation_locations_multiple]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034%7C36.455556%2C-116.866667&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_elevation_locations_multiple]