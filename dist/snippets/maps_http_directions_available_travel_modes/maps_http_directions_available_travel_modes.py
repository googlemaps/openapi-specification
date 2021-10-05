# [START maps_http_directions_available_travel_modes]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=frontera%20el%20hierro&destination=la%20restinga%20el%20hierro&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_available_travel_modes]