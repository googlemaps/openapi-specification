// [START maps_http_directions_boston_concord_waypoints_via]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Boston%2C%20MA&destination=Concord%2C%20MA&waypoints=Charlestown%2CMA%7Cvia%3ALexington%2CMA&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_boston_concord_waypoints_via]