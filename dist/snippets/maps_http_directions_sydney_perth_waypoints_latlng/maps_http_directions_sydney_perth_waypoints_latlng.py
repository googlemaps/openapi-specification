# [START maps_http_directions_sydney_perth_waypoints_latlng]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Sydney%2C%20AU&destination=Perth%2C%20AU&waypoints=via%3A-37.81223%2C144.96254%7Cvia%3A-34.92788%2C138.60008&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_sydney_perth_waypoints_latlng]