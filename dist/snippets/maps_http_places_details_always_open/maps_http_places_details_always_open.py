# [START maps_http_places_details_always_open]
import requests

url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmVwCfxJJE4cRr3OoygeU0gc&fields=opening_hours&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_details_always_open]