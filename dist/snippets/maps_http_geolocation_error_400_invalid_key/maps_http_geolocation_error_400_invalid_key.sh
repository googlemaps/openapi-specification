# [START maps_http_geolocation_error_400_invalid_key]
curl --location --request POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY' \
--header 'content-type: application/json' \
--data-raw '{
  "considerIp": "true"
}'
# [END maps_http_geolocation_error_400_invalid_key]