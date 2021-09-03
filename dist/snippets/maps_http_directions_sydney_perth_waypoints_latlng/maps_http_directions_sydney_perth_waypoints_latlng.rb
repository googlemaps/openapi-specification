# [START maps_http_directions_sydney_perth_waypoints_latlng]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Sydney%2C%20AU&destination=Perth%2C%20AU&waypoints=via%3A-37.81223%2C144.96254%7Cvia%3A-34.92788%2C138.60008&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_sydney_perth_waypoints_latlng]