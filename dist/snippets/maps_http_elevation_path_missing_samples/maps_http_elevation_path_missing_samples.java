// [START maps_http_elevation_path_missing_samples]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/elevation/json?path=35,-100|40,-110|45,-100&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_elevation_path_missing_samples]