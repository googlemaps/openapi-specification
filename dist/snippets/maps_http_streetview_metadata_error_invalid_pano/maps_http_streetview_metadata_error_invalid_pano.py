# [START maps_http_streetview_metadata_error_invalid_pano]
import requests

url = "https://maps.googleapis.com/maps/api/streetview/metadata?pano=invalid&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_streetview_metadata_error_invalid_pano]