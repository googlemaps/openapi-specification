// [START maps_http_streetview_metadata_error_invalid_pano]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/streetview/metadata?pano=invalid&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_streetview_metadata_error_invalid_pano]