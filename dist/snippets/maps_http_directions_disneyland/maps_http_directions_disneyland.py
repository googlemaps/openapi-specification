# [START maps_http_directions_disneyland]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal Studios Hollywood&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_disneyland]