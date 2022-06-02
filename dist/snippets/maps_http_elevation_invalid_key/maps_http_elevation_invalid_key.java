// [START maps_http_elevation_invalid_key]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034&key=invalid")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_elevation_invalid_key]