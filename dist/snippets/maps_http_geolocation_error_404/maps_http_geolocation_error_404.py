# [START maps_http_geolocation_error_404]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload="{\n  \"considerIP\": false\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_error_404]