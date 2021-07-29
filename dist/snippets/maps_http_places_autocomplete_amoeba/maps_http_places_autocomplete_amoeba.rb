# [START maps_http_places_autocomplete_amoeba]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_autocomplete_amoeba]