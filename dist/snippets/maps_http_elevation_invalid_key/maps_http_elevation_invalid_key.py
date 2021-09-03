# [START maps_http_elevation_invalid_key]
import requests

url = "https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034&key=invalid"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_elevation_invalid_key]