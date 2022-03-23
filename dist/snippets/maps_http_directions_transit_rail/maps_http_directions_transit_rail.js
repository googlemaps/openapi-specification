// [START maps_http_directions_transit_rail]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJO_mLi3UmwkcRqh4KYzJsypE&destination=place_id%3AChIJiQ-s2miw6kcR5dHaFfFdV9A&transit_mode=rail&alternatives=true&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_transit_rail]