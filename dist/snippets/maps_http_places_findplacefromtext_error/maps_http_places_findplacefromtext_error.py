# [START maps_http_places_findplacefromtext_error]
import requests

url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=textquery&fields=invalid&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_findplacefromtext_error]