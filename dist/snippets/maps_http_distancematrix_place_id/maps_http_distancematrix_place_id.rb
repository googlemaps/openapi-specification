# [START maps_http_distancematrix_place_id]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE&destinations=Sydney&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_distancematrix_place_id]