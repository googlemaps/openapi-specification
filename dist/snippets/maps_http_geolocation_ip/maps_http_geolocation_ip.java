// [START maps_http_geolocation_ip]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"considerIp\": \"true\"\n}");
Request request = new Request.Builder()
  .url("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")
  .method("POST", body)
  .addHeader("content-type", "application/json")
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_geolocation_ip]