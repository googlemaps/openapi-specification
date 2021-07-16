// [START maps_http_directions_waypoints_optimize]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide, SA&destination=Adelaide, SA&waypoints=optimize:true|Barossa Valley, SA|Clare, SA|Connawarra, SA|McLaren Vale, SA&key=YOUR_API_KEY',
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