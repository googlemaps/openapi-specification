# [START maps_http_elevation_locations_encoded]
import requests

url = "https://maps.googleapis.com/maps/api/elevation/json?locations=enc%3Agfo%7DEtohhU&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_elevation_locations_encoded]