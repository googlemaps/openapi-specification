// [START maps_http_directions_chicago_los_angeles]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Chicago%2C%20IL&destination=Los%20Angeles%2C%20CA&waypoints=Joplin%2C%20MO%7COklahoma%20City%2C%20OK&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_chicago_los_angeles]