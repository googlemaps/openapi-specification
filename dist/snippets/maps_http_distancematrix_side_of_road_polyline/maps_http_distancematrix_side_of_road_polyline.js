// [START maps_http_distancematrix_side_of_road_polyline]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco%20City%20hall&destinations=side_of_road%3Aenc%3A%7BoqeF%60fejV%5BnC%3A&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_distancematrix_side_of_road_polyline]