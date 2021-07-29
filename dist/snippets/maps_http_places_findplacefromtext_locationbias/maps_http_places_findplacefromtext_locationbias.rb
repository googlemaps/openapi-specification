# [START maps_http_places_findplacefromtext_locationbias]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle:2000@47.6918452,-122.2226413&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_findplacefromtext_locationbias]