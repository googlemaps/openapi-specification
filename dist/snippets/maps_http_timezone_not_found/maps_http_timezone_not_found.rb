# [START maps_http_timezone_not_found]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/timezone/json?location=0%2C0&timestamp=1331161200&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_timezone_not_found]