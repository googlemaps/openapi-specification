# [START maps_http_timezone_invalid]
import requests

url = "https://maps.googleapis.com/maps/api/timezone/json?location=&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_timezone_invalid]