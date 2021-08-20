# [START maps_http_directions_plus_codes]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=H8MW%2BWP%20Kolkata%20India&destination=GCG2%2B3M%20Kolkata%20India&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_plus_codes]