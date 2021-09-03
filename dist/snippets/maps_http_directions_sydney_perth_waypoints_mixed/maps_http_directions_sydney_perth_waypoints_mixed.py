# [START maps_http_directions_sydney_perth_waypoints_mixed]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Sydney%2C%20AU&destination=Perth%2C%20AU&waypoints=side_of_road%3Avia%3Aenc%3AlexeF%7B~wsZejrPjtye%40%3A&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_sydney_perth_waypoints_mixed]