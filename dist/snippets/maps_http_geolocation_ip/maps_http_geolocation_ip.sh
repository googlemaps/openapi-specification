# [START maps_http_geolocation_ip]
curl -L -X POST 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY' \
-H 'content-type: application/json' \
--data-raw '{
  "considerIp": "true"
}'
# [END maps_http_geolocation_ip]