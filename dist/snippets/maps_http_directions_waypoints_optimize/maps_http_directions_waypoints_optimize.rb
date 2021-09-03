# [START maps_http_directions_waypoints_optimize]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide%2C%20SA&destination=Adelaide%2C%20SA&waypoints=optimize%3Atrue%7CBarossa%20Valley%2C%20SA%7CClare%2C%20SA%7CConnawarra%2C%20SA%7CMcLaren%20Vale%2C%20SA&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_waypoints_optimize]