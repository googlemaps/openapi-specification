# [START maps_http_directions_transit_rail]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJO_mLi3UmwkcRqh4KYzJsypE&destination=place_id%3AChIJiQ-s2miw6kcR5dHaFfFdV9A&transit_mode=rail&alternatives=true&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_transit_rail]