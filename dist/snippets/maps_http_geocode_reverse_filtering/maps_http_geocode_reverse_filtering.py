# [START maps_http_geocode_reverse_filtering]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224%2C-73.961452&location_type=ROOFTOP&result_type=street_address&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_reverse_filtering]