// [START maps_http_places_queryautocomplete_location_weighted]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=Market%20in%20Barcelona&location=42.3675294%2C-71.186966&radius=10000&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_queryautocomplete_location_weighted]