// [START maps_http_places_findplacefromtext_mca]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum of Contemporary Art Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_findplacefromtext_mca]