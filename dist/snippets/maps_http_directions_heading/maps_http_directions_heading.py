# [START maps_http_directions_heading]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=heading=90:37.773279,-122.468780&destination=37.773245,-122.469502&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_heading]