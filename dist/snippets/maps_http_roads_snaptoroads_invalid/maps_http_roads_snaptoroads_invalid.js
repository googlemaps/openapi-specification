// [START maps_http_roads_snaptoroads_invalid]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://roads.googleapis.com/v1/snapToRoads?path=0,0|1,1&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_roads_snaptoroads_invalid]