# [START maps_http_streetview_metadata_error_invalid_pano]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/streetview/metadata?pano=invalid&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_streetview_metadata_error_invalid_pano]