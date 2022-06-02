// [START maps_http_distancematrix]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/distancematrix/json?origins=Boston%2CMA%7CCharlestown%2CMA&destinations=Lexington%2CMA%7CConcord%2CMA&departure_time=now&key=YOUR_API_KEY")
  .method("GET", body)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_distancematrix]