// [START maps_http_geolocation_ip]
var axios = require('axios');
var data = JSON.stringify({"considerIp":"true"});

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

// [END maps_http_geolocation_ip]