# [START maps_http_geocode_invalid_place]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?place_id=1234&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_invalid_place]