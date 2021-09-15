# [START maps_http_directions_zero_results]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=0%2C0&destination=45%2C45&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_zero_results]