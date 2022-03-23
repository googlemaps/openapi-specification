// [START maps_http_directions_transit_rail]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJO_mLi3UmwkcRqh4KYzJsypE&destination=place_id%3AChIJiQ-s2miw6kcR5dHaFfFdV9A&transit_mode=rail&alternatives=true&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_transit_rail]