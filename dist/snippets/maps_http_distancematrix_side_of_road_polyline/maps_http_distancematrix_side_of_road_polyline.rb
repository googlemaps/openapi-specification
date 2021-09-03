# [START maps_http_distancematrix_side_of_road_polyline]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco%20City%20hall&destinations=side_of_road%3Aenc%3A%7BoqeF%60fejV%5BnC%3A&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_distancematrix_side_of_road_polyline]