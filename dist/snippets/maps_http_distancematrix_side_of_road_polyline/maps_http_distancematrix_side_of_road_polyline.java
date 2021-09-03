// [START maps_http_distancematrix_side_of_road_polyline]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco%20City%20hall&destinations=side_of_road%3Aenc%3A%7BoqeF%60fejV%5BnC%3A&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix_side_of_road_polyline]