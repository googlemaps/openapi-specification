# [START maps_http_geocode_reverse]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224%2C-73.961452&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_reverse]