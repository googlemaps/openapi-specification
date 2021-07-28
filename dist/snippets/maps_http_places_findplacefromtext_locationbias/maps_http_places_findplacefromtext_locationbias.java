// [START maps_http_places_findplacefromtext_locationbias]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle:2000@47.6918452,-122.2226413&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_places_findplacefromtext_locationbias]