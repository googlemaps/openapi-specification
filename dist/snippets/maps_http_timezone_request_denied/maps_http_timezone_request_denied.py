# [START maps_http_timezone_request_denied]
import requests

url = "https://maps.googleapis.com/maps/api/timezone/json?key="

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_timezone_request_denied]