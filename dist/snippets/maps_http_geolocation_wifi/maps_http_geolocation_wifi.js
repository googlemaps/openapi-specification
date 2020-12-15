// [START maps_http_geolocation_wifi]
var axios = require('axios');
var data = JSON.stringify({"considerIp":"false","wifiAccessPoints":[{"macAddress":"00:25:9c:cf:1c:ac","signalStrength":-43,"signalToNoiseRatio":0},{"macAddress":"00:25:9c:cf:1c:ad","signalStrength":-55,"signalToNoiseRatio":0}]});

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