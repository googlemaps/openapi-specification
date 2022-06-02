// [START maps_http_distancematrix_place_id]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id%3AChIJ3S-JXmauEmsRUcIaWtf4MzE&destinations=Sydney&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix_place_id]