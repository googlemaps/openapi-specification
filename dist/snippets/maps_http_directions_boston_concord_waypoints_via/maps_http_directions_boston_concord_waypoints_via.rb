# [START maps_http_directions_boston_concord_waypoints_via]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Boston%2C%20MA&destination=Concord%2C%20MA&waypoints=Charlestown%2CMA%7Cvia%3ALexington%2CMA&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_boston_concord_waypoints_via]