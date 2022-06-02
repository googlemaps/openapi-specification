// [START maps_http_distancematrix_all]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle%2C%20WA&destinations=North%20Fork%2C%20WA&avoid=highways&units=imperial&arrival_time=1614709737&traffic_model=pessimistic&mode=transit&transit_mode=bus&transit_routing_preference=less_walking&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix_all]