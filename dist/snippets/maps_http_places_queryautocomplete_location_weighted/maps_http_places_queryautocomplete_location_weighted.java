// [START maps_http_places_queryautocomplete_location_weighted]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Market%20in%20Barcelona&location=42.3675294,-71.186966&radius=10000&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_queryautocomplete_location_weighted]