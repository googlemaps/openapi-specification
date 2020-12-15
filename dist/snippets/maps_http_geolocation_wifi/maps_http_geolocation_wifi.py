# [START maps_http_geolocation_wifi]
import requests

url = "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"

payload="{\n  \"considerIp\": \"false\",\n  \"wifiAccessPoints\": [\n    {\n      \"macAddress\": \"00:25:9c:cf:1c:ac\",\n      \"signalStrength\": -43,\n      \"signalToNoiseRatio\": 0\n    },\n    {\n      \"macAddress\": \"00:25:9c:cf:1c:ad\",\n      \"signalStrength\": -55,\n      \"signalToNoiseRatio\": 0\n    }\n  ]\n}"
headers = {
    'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geolocation_wifi]