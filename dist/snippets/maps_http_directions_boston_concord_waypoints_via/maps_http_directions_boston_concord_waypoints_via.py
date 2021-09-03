# [START maps_http_directions_boston_concord_waypoints_via]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Boston%2C%20MA&destination=Concord%2C%20MA&waypoints=Charlestown%2CMA%7Cvia%3ALexington%2CMA&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_boston_concord_waypoints_via]