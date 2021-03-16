// [START maps_http_directions_plus_codes]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=JJ88+QC Millbrae&destination=CWC8+R9 Mountain View&mode=transit&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_plus_codes]