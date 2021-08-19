# [START maps_http_distancematrix_bicycling]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver BC|Seattle&destinations=San Francisco|Victoria BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_bicycling]