// [START maps_http_directions_waypoints_optimize]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide%2C%20SA&destination=Adelaide%2C%20SA&waypoints=optimize%3Atrue%7CBarossa%20Valley%2C%20SA%7CClare%2C%20SA%7CConnawarra%2C%20SA%7CMcLaren%20Vale%2C%20SA&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_waypoints_optimize]