# [START maps_http_directions_place_id]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJ685WIFYViEgRHlHvBbiD5nE&destination=place_id%3AChIJA01I-8YVhkgRGJb0fW4UX7Y&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_place_id]