# [START maps_http_places_textsearch_weighted]
import requests

url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Market%20in%20Barcelona&location=42.3675294%2C-71.186966&radius=10000&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_textsearch_weighted]