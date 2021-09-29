// [START maps_http_places_queryautocomplete_pizza_sydney]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20Sydney&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_places_queryautocomplete_pizza_sydney]