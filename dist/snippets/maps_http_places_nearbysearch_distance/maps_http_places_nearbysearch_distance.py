# [START maps_http_places_nearbysearch_distance]
import requests

url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&type=restaurant&keyword=cruise&rankby=distance&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_nearbysearch_distance]