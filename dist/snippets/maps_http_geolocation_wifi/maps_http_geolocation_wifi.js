// [START maps_http_geolocation_wifi]
var axios = require('axios');
var data = JSON.stringify({"considerIp":"false","wifiAccessPoints":[{"macAddress":"84:d4:7e:09:a5:f1","signalStrength":-43,"signalToNoiseRatio":0},{"macAddress":"44:48:c1:a6:f3:d0","signalStrength":-55,"signalToNoiseRatio":0}]});

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

// [END maps_http_geolocation_wifi]