# [START maps_http_directions_plus_codes]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=JJ88+P9 Millbrae&destination=CWC8+9R Mountain View, CA, USA&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_plus_codes]