# [START maps_http_geolocation_error_404]
curl --location --request POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
--header 'content-type: application/json' \
--data-raw '{
  "considerIP": false
}'
# [END maps_http_geolocation_error_404]