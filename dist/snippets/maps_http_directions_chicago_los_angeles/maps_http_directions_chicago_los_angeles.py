# [START maps_http_directions_chicago_los_angeles]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Chicago%2C%20IL&destination=Los%20Angeles%2C%20CA&waypoints=Joplin%2C%20MO%7COklahoma%20City%2C%20OK&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_chicago_los_angeles]