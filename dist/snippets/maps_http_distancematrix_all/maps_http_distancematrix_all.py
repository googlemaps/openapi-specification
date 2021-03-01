# [START maps_http_distancematrix_all]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle, WA&destinations=North Fork, WA&avoid=highways&units=imperial&arrival_time=1614709737&traffic_model=pessimistic&mode=transit&transit_mode=bus&transit_routing_preference=less_walking&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_all]