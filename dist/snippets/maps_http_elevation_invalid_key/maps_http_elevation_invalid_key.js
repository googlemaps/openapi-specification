// [START maps_http_elevation_invalid_key]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034&key=invalid',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_elevation_invalid_key]