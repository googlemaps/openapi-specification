// [START maps_http_directions_plus_codes]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=H8MW%2BWP%20Kolkata%20India&destination=GCG2%2B3M%20Kolkata%20India&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_plus_codes]