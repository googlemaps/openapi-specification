# [START maps_http_geocode_toledo]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_toledo]