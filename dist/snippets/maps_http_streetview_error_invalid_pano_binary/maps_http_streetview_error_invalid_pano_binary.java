// [START maps_http_streetview_error_invalid_pano_binary]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/streetview?pano=invalid&size=600x300&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_streetview_error_invalid_pano_binary]