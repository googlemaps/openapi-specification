// [START maps_http_roads_nearest_error_404]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://roads.googleapis.com/v1/nearestRoads?points=0%2C0&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_roads_nearest_error_404]