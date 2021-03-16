// [START maps_http_directions_chicago_los_angeles]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Chicago, IL&destination=Los Angeles, CA&waypoints=Joplin, MO|Oklahoma City, OK&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_chicago_los_angeles]