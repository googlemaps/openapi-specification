// [START maps_http_directions_waypoints_optimize]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide%2C%20SA&destination=Adelaide%2C%20SA&waypoints=optimize%3Atrue%7CBarossa%20Valley%2C%20SA%7CClare%2C%20SA%7CConnawarra%2C%20SA%7CMcLaren%20Vale%2C%20SA&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_waypoints_optimize]