// [START maps_http_directions_heading]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=heading%3D90%3A37.773279%2C-122.468780&destination=37.773245%2C-122.469502&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_heading]