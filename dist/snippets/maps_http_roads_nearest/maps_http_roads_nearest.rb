# [START maps_http_roads_nearest]
require "uri"
require "net/http"

url = URI("https://roads.googleapis.com/v1/nearestRoads?points=60.170880%2C24.942795%7C60.170879%2C24.942796%7C60.170877%2C24.942796&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_roads_nearest]