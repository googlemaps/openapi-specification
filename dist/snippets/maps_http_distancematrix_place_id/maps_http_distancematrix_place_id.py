# [START maps_http_distancematrix_place_id]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id%3AChIJ3S-JXmauEmsRUcIaWtf4MzE&destinations=Sydney&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_place_id]