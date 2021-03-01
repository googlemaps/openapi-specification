// [START maps_http_distancematrix_place_id]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE&destinations=Sydney&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix_place_id]