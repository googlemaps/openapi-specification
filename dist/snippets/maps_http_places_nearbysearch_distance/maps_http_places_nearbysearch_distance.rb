# [START maps_http_places_nearbysearch_distance]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&type=restaurant&keyword=cruise&rankby=distance&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_nearbysearch_distance]