// [START maps_http_streetview_metadata]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/streetview/metadata?heading=151.78&pitch=-0.76&location=46.414382%2C10.013988&size=600x300&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_streetview_metadata]