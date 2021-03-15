# [START maps_http_geolocation_error_400_invalid_key]
import requests
import json

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY"

payload = json.dumps({
    "considerIp": "true"
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_error_400_invalid_key]