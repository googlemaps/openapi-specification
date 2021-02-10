# [START maps_http_geolocation_celltowers]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload="{\n  \"cellTowers\": [\n    {\n      \"cellId\": 170402199,\n      \"locationAreaCode\": 35632,\n      \"mobileCountryCode\": 310,\n      \"mobileNetworkCode\": 410,\n      \"age\": 0,\n      \"signalStrength\": -60,\n      \"timingAdvance\": 15\n    }\n  ]\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_celltowers]