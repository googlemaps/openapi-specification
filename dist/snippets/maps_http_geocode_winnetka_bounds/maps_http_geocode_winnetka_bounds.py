# [START maps_http_geocode_winnetka_bounds]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&bounds=34.172684%2C-118.604794%7C34.236144%2C-118.500938&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_winnetka_bounds]