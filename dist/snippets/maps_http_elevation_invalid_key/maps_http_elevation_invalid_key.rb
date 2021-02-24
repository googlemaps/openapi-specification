# [START maps_http_elevation_invalid_key]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=invalid")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_elevation_invalid_key]