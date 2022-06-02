// [START maps_http_roads_nearest]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://roads.googleapis.com/v1/nearestRoads?points=60.170880%2C24.942795%7C60.170879%2C24.942796%7C60.170877%2C24.942796&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_roads_nearest]