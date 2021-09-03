# [START maps_http_geocode_postcode_localities]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?components=postal_code%3A94608&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_postcode_localities]