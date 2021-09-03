// [START maps_http_roads_nearest_error_404]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://roads.googleapis.com/v1/nearestRoads?points=0%2C0&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_roads_nearest_error_404]