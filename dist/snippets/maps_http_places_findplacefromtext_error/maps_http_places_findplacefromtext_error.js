// [START maps_http_places_findplacefromtext_error]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=textquery&fields=invalid&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_places_findplacefromtext_error]