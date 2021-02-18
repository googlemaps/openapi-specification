# [START maps_http_geolocation_error_400_invalid_key]
curl -L -X POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "considerIp": "true"
}'
# [END maps_http_geolocation_error_400_invalid_key]