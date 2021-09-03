# [START maps_http_roads_nearest_error_404]
require "uri"
require "net/http"

url = URI("https://roads.googleapis.com/v1/nearestRoads?points=0%2C0&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_roads_nearest_error_404]