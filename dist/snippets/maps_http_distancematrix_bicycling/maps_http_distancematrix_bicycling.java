// [START maps_http_distancematrix_bicycling]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver BC|Seattle&destinations=San Francisco|Victoria BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix_bicycling]