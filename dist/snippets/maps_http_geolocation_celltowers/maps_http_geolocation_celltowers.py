# [START maps_http_geolocation_celltowers]
import requests
import json

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload = json.dumps({
    "cellTowers": [
        {
            "cellId": 170402199,
            "locationAreaCode": 35632,
            "mobileCountryCode": 310,
            "mobileNetworkCode": 410,
            "age": 0,
            "signalStrength": -60,
            "timingAdvance": 15
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_celltowers]