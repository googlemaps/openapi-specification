# [START maps_http_geolocation_error_400_invalid_key]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY"

payload="{\n  \"considerIp\": \"true\"\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_error_400_invalid_key]