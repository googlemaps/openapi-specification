# [START maps_http_elevation_path_missing_samples]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/elevation/json?path=35%2C-100%7C40%2C-110%7C45%2C-100&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_elevation_path_missing_samples]