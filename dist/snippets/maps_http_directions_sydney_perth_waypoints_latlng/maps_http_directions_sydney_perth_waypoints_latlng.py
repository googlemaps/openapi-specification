# [START maps_http_directions_sydney_perth_waypoints_latlng]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Sydney, AU&destination=Perth, AU&waypoints=via:-37.81223,144.96254|via:-34.92788,138.60008&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_sydney_perth_waypoints_latlng]