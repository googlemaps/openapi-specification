# [START maps_http_geolocation_error_400]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload="{\n  \"cellTowers\": \"foo\"\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_error_400]