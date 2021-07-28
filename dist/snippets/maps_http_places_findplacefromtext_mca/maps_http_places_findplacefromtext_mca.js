// [START maps_http_places_findplacefromtext_mca]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum of Contemporary Art Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_places_findplacefromtext_mca]