# [START maps_http_places_findplacefromtext_locationbias]
import requests

url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle:2000@47.6918452,-122.2226413&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_findplacefromtext_locationbias]