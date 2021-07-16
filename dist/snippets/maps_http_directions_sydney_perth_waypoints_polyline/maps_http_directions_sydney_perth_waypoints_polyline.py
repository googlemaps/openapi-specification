# [START maps_http_directions_sydney_perth_waypoints_polyline]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Sydney, AU&destination=Perth, AU&waypoints=via:enc:lexeF{~wsZejrPjtye@:&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_sydney_perth_waypoints_polyline]