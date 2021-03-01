// [START maps_http_distancematrix]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Boston,MA|Charlestown,MA&destinations=Lexington,MA|Concord,MA&departure_time=now&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix]