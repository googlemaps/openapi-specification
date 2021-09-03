# [START maps_http_roads_nearest_error_404]
import requests

url = "https://roads.googleapis.com/v1/nearestRoads?points=0%2C0&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_roads_nearest_error_404]