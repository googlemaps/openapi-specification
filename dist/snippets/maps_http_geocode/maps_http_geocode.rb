# [START maps_http_geocode]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_geocode]