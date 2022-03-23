# [START maps_http_directions_transit_rail]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJO_mLi3UmwkcRqh4KYzJsypE&destination=place_id%3AChIJiQ-s2miw6kcR5dHaFfFdV9A&transit_mode=rail&alternatives=true&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_directions_transit_rail]