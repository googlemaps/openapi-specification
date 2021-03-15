# [START maps_http_geolocation_wifi]
import requests
import json

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload = json.dumps({
    "considerIp": "false",
    "wifiAccessPoints": [
        {
            "macAddress": "84:d4:7e:09:a5:f1",
            "signalStrength": -43,
            "signalToNoiseRatio": 0
        },
        {
            "macAddress": "44:48:c1:a6:f3:d0",
            "signalStrength": -55,
            "signalToNoiseRatio": 0
        }
    ]
})
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_wifi]