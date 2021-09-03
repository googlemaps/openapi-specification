// [START maps_http_elevation_path_missing_samples]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/elevation/json?path=35%2C-100%7C40%2C-110%7C45%2C-100&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_elevation_path_missing_samples]