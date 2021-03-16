# [START maps_http_directions_region_toledo_default]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Toledo&destination=Madrid&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_region_toledo_default]