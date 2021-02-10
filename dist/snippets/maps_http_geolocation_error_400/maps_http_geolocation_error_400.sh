# [START maps_http_geolocation_error_400]
curl --location --request POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
--header 'content-type: application/json' \
--data-raw '{
  "cellTowers": "foo"
}'
# [END maps_http_geolocation_error_400]