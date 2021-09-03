# [START maps_http_distancematrix_heading]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading%3D90%3A37.773279%2C-122.468780&destinations=37.773245%2C-122.469502&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_heading]