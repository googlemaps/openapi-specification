// [START maps_http_directions_plus_codes]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=H8MW%2BWP%20Kolkata%20India&destination=GCG2%2B3M%20Kolkata%20India&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_plus_codes]