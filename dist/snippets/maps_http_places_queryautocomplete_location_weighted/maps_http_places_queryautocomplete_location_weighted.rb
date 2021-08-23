# [START maps_http_places_queryautocomplete_location_weighted]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Market%20in%20Barcelona&location=42.3675294,-71.186966&radius=10000&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_queryautocomplete_location_weighted]