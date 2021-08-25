// [START maps_http_places_details_no_plus_compound_code]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=GhIJQWDl0CKxOMARUrgehSvwYEA&fields=plus_code&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_places_details_no_plus_compound_code]