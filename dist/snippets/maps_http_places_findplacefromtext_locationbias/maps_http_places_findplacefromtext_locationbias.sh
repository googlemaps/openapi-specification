# [START maps_http_places_findplacefromtext_locationbias]
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=YOUR_API_KEY'
# [END maps_http_places_findplacefromtext_locationbias]