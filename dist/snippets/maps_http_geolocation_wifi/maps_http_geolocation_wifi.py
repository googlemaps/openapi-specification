# [START maps_http_geolocation_wifi]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload="{\n  \"considerIp\": \"false\",\n  \"wifiAccessPoints\": [\n    {\n      \"macAddress\": \"84:d4:7e:09:a5:f1\",\n      \"signalStrength\": -43,\n      \"signalToNoiseRatio\": 0\n    },\n    {\n      \"macAddress\": \"44:48:c1:a6:f3:d0\",\n      \"signalStrength\": -55,\n      \"signalToNoiseRatio\": 0\n    }\n  ]\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_wifi]