// [START maps_http_places_queryautocomplete_pizza_fr]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=pizza%20near%20par&language=fr&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_queryautocomplete_pizza_fr]