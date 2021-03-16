# [START maps_http_directions_waypoints_optimize]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide, SA&destination=Adelaide, SA&waypoints=optimize:true|Barossa Valley, SA|Clare, SA|Connawarra, SA|McLaren Vale, SA&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_waypoints_optimize]