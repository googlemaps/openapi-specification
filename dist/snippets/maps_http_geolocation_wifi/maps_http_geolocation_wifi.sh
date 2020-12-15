# [START maps_http_geolocation_wifi]
curl --location --request POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
--header 'content-type: application/json' \
--data-raw '{
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "00:25:9c:cf:1c:ac",
      "signalStrength": -43,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "00:25:9c:cf:1c:ad",
      "signalStrength": -55,
      "signalToNoiseRatio": 0
    }
  ]
}'
# [END maps_http_geolocation_wifi]