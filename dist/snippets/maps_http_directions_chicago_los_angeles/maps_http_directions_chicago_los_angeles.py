# [START maps_http_directions_chicago_los_angeles]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Chicago, IL&destination=Los Angeles, CA&waypoints=Joplin, MO|Oklahoma City, OK&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_chicago_los_angeles]