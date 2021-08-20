// [START maps_http_directions_side_of_road]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=37.7680296,-122.4375126&destination=side_of_road:37.7663444,-122.4412006&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_side_of_road]