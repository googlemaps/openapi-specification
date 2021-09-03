// [START maps_http_directions_sydney_perth_waypoints_latlng]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Sydney%2C%20AU&destination=Perth%2C%20AU&waypoints=via%3A-37.81223%2C144.96254%7Cvia%3A-34.92788%2C138.60008&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_sydney_perth_waypoints_latlng]