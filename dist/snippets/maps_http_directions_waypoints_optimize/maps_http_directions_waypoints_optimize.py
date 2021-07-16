# [START maps_http_directions_waypoints_optimize]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide, SA&destination=Adelaide, SA&waypoints=optimize:true|Barossa Valley, SA|Clare, SA|Connawarra, SA|McLaren Vale, SA&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_waypoints_optimize]