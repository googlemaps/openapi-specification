# [START maps_http_places_queryautocomplete_pizza_fr]
import requests

url = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&language=fr&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_queryautocomplete_pizza_fr]