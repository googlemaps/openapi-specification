// [START maps_http_roads_snaptoroads_interpolation]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://roads.googleapis.com/v1/snapToRoads?path=-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836&interpolate=true&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_roads_snaptoroads_interpolation]