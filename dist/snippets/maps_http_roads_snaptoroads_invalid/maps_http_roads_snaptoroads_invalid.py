# [START maps_http_roads_snaptoroads_invalid]
import requests

url = "https://roads.googleapis.com/v1/snapToRoads?path=0%2C0%7C1%2C1&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_roads_snaptoroads_invalid]