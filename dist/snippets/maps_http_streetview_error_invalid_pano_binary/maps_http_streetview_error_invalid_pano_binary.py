# [START maps_http_streetview_error_invalid_pano_binary]
import requests

url = "https://maps.googleapis.com/maps/api/streetview?pano=invalid&size=600x300&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_streetview_error_invalid_pano_binary]