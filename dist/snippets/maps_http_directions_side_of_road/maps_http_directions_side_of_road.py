# [START maps_http_directions_side_of_road]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=37.7680296,-122.4375126&destination=side_of_road:37.7663444,-122.4412006&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_side_of_road]