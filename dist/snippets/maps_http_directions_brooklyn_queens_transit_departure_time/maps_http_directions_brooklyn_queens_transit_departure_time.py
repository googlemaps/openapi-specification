# [START maps_http_directions_brooklyn_queens_transit_departure_time]
import requests

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Brooklyn&destination=Queens&mode=transit&departure_time=1343641500&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_directions_brooklyn_queens_transit_departure_time]