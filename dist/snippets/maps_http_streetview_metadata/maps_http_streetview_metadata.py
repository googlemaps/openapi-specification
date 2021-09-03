# [START maps_http_streetview_metadata]
import requests

url = "https://maps.googleapis.com/maps/api/streetview/metadata?heading=151.78&pitch=-0.76&location=46.414382%2C10.013988&size=600x300&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_streetview_metadata]