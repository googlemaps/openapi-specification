# [START maps_http_geolocation_ip]
require "uri"
require "json"
require "net/http"

url = URI("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "considerIp": "true"
})

response = https.request(request)
puts response.read_body

# [END maps_http_geolocation_ip]