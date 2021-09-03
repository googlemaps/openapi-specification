// [START maps_http_geocode_reverse_filtering]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224%2C-73.961452&location_type=ROOFTOP&result_type=street_address&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_geocode_reverse_filtering]