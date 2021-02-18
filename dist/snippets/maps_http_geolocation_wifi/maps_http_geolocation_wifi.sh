# [START maps_http_geolocation_wifi]
curl -L -X POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "84:d4:7e:09:a5:f1",
      "signalStrength": -43,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "44:48:c1:a6:f3:d0",
      "signalStrength": -55,
      "signalToNoiseRatio": 0
    }
  ]
}'
# [END maps_http_geolocation_wifi]