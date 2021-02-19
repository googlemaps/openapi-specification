// [START maps_http_geolocation_celltowers]
var axios = require('axios');
var data = JSON.stringify({"cellTowers":[{"cellId":170402199,"locationAreaCode":35632,"mobileCountryCode":310,"mobileNetworkCode":410,"age":0,"signalStrength":-60,"timingAdvance":15}]});

var config = {
  method: 'post',
  url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY',
  headers: { 
    'content-type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_geolocation_celltowers]