// [START maps_http_geocode_components_zero_results_fixed]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/geocode/json?components=components%3Droute%3AAnnankatu%7Cadministrative_area%3AHelsinki%7Ccountry%3AFinland&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_geocode_components_zero_results_fixed]