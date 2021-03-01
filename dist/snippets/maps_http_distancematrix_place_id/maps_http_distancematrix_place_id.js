// [START maps_http_distancematrix_place_id]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE&destinations=Sydney&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_distancematrix_place_id]