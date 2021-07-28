# [START maps_http_places_findplacefromtext_mca]
import requests

url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum of Contemporary Art Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_findplacefromtext_mca]