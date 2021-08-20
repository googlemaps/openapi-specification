// [START maps_http_directions_sydney_perth_waypoints_mixed]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Sydney, AU&destination=Perth, AU&waypoints=side_of_road:via:enc:lexeF{~wsZejrPjtye@:&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_sydney_perth_waypoints_mixed]