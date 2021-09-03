// [START maps_http_geocode_winnetka_bounds]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&bounds=34.172684%2C-118.604794%7C34.236144%2C-118.500938&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_geocode_winnetka_bounds]