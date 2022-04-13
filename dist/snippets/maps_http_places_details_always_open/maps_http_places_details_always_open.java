// [START maps_http_places_details_always_open]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmVwCfxJJE4cRr3OoygeU0gc&fields=opening_hours&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_details_always_open]