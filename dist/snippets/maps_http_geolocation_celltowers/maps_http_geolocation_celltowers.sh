# [START maps_http_geolocation_celltowers]
curl -L -X POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "cellTowers": [
    {
      "cellId": 170402199,
      "locationAreaCode": 35632,
      "mobileCountryCode": 310,
      "mobileNetworkCode": 410,
      "age": 0,
      "signalStrength": -60,
      "timingAdvance": 15
    }
  ]
}'
# [END maps_http_geolocation_celltowers]