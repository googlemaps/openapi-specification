# [START maps_http_timezone_not_found]
import requests

url = "https://maps.googleapis.com/maps/api/timezone/json?location=0%2C0&timestamp=1331161200&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_timezone_not_found]