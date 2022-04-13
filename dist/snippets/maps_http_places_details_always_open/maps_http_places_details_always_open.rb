# [START maps_http_places_details_always_open]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmVwCfxJJE4cRr3OoygeU0gc&fields=opening_hours&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_details_always_open]