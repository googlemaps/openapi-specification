# [START maps_http_directions_sydney_perth_waypoints_latlng]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Sydney, AU&destination=Perth, AU&waypoints=via:-37.81223,144.96254|via:-34.92788,138.60008&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_sydney_perth_waypoints_latlng]