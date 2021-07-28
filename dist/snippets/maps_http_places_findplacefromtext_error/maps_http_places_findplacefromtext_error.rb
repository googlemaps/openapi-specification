# [START maps_http_places_findplacefromtext_error]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=textquery&fields=invalid&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_findplacefromtext_error]