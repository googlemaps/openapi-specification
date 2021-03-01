// [START maps_http_distancematrix_bicycling]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver BC|Seattle&destinations=San Francisco|Victoria BC&mode=bicycling&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_distancematrix_bicycling]