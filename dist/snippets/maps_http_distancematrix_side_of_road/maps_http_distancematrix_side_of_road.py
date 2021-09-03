# [START maps_http_distancematrix_side_of_road]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=37.7680296%2C-122.4375126&destinations=side_of_road%3A37.7663444%2C-122.4412006&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_side_of_road]