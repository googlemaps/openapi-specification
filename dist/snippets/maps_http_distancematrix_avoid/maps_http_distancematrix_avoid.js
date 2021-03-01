// [START maps_http_distancematrix_avoid]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Victoria BC&avoid=tolls&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_distancematrix_avoid]