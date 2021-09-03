// [START maps_http_elevation_locations_encoded]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/elevation/json?locations=enc%3Agfo%7DEtohhU&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_elevation_locations_encoded]