// [START maps_http_directions_boston_concord_waypoints_now]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Boston%2C%20MA&destination=Concord%2C%20MA&waypoints=via%3ACharlestown%2CMA%7Cvia%3ALexington%2CMA&departure_time=now&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_boston_concord_waypoints_now]