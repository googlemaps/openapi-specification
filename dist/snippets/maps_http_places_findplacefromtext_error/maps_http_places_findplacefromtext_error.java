// [START maps_http_places_findplacefromtext_error]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=textquery&fields=invalid&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_findplacefromtext_error]