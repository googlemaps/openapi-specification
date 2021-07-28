# [START maps_http_places_findplacefromtext_mca]
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY'
# [END maps_http_places_findplacefromtext_mca]