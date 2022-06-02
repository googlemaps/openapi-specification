// [START maps_http_timezone_request_denied]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/timezone/json?key=")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_timezone_request_denied]