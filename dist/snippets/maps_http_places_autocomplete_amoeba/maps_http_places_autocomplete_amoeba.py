# [START maps_http_places_autocomplete_amoeba]
import requests

url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_autocomplete_amoeba]