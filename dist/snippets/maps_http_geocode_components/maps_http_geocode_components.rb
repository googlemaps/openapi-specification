# [START maps_http_geocode_components]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/geocode/json?components=locality%3Asanta%2Bcruz%7Ccountry%3AES&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_geocode_components]