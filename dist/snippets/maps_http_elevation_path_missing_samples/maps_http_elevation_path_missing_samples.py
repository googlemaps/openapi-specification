# [START maps_http_elevation_path_missing_samples]
import requests

url = "https://maps.googleapis.com/maps/api/elevation/json?path=35,-100|40,-110|45,-100&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_elevation_path_missing_samples]