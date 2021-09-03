# [START maps_http_distancematrix_side_of_road_polyline]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco%20City%20hall&destinations=side_of_road%3Aenc%3A%7BoqeF%60fejV%5BnC%3A&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_side_of_road_polyline]