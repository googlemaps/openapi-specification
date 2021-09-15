// [START maps_http_directions_invalid]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_invalid]