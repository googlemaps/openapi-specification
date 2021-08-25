# [START maps_http_places_details_no_plus_compound_code]
import requests

url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=GhIJQWDl0CKxOMARUrgehSvwYEA&fields=plus_code&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_places_details_no_plus_compound_code]