# [START maps_http_directions_disneyland]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal%20Studios%20Hollywood&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_disneyland]