// [START maps_http_places_queryautocomplete_location_weighted]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Market%20in%20Barcelona&location=42.3675294%2C-71.186966&radius=10000&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_places_queryautocomplete_location_weighted]