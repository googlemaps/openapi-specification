# [START maps_http_distancematrix_side_of_road]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=37.7680296%2C-122.4375126&destinations=side_of_road%3A37.7663444%2C-122.4412006&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_distancematrix_side_of_road]