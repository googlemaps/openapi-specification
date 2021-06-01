# [START maps_http_geolocation_celltowers]
require "uri"
require "json"
require "net/http"

url = URI("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = "application/json"
request.body = JSON.dump({
  "cellTowers": [
    {
      "cellId": 170402199,
      "locationAreaCode": 35632,
      "mobileCountryCode": 310,
      "mobileNetworkCode": 410,
      "age": 0,
      "signalStrength": -60,
      "timingAdvance": 15
    }
  ]
})

response = https.request(request)
puts response.read_body

# [END maps_http_geolocation_celltowers]