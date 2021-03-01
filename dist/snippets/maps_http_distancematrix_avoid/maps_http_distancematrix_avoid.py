# [START maps_http_distancematrix_avoid]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Victoria BC&avoid=tolls&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_avoid]