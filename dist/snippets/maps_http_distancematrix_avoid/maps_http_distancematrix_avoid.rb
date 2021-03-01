# [START maps_http_distancematrix_avoid]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Victoria BC&avoid=tolls&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_distancematrix_avoid]