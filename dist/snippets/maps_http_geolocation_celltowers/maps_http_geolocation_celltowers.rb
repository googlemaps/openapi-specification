# [START maps_http_geolocation_celltowers]
require "uri"
require "net/http"

url = URI("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = "{\n  \"cellTowers\": [\n    {\n      \"cellId\": 42,\n      \"locationAreaCode\": 415,\n      \"mobileCountryCode\": 310,\n      \"mobileNetworkCode\": 410,\n      \"age\": 0,\n      \"signalStrength\": -60,\n      \"timingAdvance\": 15\n    }\n  ]\n}"

response = https.request(request)
puts response.read_body

# [END maps_http_geolocation_celltowers]