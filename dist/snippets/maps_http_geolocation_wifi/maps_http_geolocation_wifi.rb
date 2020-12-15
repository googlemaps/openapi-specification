# [START maps_http_geolocation_wifi]
require "uri"
require "net/http"

url = URI("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = "{\n  \"considerIp\": \"false\",\n  \"wifiAccessPoints\": [\n    {\n      \"macAddress\": \"00:25:9c:cf:1c:ac\",\n      \"signalStrength\": -43,\n      \"signalToNoiseRatio\": 0\n    },\n    {\n      \"macAddress\": \"00:25:9c:cf:1c:ad\",\n      \"signalStrength\": -55,\n      \"signalToNoiseRatio\": 0\n    }\n  ]\n}"

response = https.request(request)
puts response.read_body

# [END maps_http_geolocation_wifi]