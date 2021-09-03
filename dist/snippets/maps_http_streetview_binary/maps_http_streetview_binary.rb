# [START maps_http_streetview_binary]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/streetview?heading=151.78&pitch=-0.76&location=46.414382%2C10.013988&size=600x300&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_streetview_binary]