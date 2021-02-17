// [START maps_http_geocode_invalid_place]
OkHttpClient client = new OkHttpClient().newBuilder()
    .build();
Request request = new Request.Builder()
    .url("https://maps.googleapis.com/maps/api/geocode/json?place_id=1234&key=YOUR_API_KEY")
    .method("GET", null)
    .build();
Response response = client.newCall(request).execute();
// [END maps_http_geocode_invalid_place]