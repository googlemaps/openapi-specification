// [START maps_http_directions_waypoints_optimize]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide, SA&destination=Adelaide, SA&waypoints=optimize:true|Barossa Valley, SA|Clare, SA|Connawarra, SA|McLaren Vale, SA&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_waypoints_optimize]