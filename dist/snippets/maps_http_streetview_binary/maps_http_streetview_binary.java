// [START maps_http_streetview_binary]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/streetview?heading=151.78&pitch=-0.76&location=46.414382,10.013988&size=600x300&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_streetview_binary]