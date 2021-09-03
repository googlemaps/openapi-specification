# [START maps_http_geocode_components_filtering]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?address=high%20st%20hasting&components=country%3AGB&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_components_filtering]