// [START maps_http_timezone_not_found]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/timezone/json?location=0,0&timestamp=1331161200&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_timezone_not_found]