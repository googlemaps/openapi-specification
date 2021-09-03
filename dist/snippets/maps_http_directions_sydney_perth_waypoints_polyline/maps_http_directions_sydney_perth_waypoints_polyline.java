// [START maps_http_directions_sydney_perth_waypoints_polyline]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Sydney%2C%20AU&destination=Perth%2C%20AU&waypoints=via%3Aenc%3AlexeF%7B~wsZejrPjtye%40%3A&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_sydney_perth_waypoints_polyline]