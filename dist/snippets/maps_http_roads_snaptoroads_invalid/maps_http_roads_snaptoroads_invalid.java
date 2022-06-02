// [START maps_http_roads_snaptoroads_invalid]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://roads.googleapis.com/v1/snapToRoads?path=0%2C0%7C1%2C1&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_roads_snaptoroads_invalid]