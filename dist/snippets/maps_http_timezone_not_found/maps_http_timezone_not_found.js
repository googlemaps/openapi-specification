// [START maps_http_timezone_not_found]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/timezone/json?location=0,0&timestamp=1331161200&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_timezone_not_found]