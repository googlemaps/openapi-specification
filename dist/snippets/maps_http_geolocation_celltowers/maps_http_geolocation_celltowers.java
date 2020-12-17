// [START maps_http_geolocation_celltowers]
OkHttpClient client = new OkHttpClient().newBuilder()
    .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"cellTowers\": [\n    {\n      \"cellId\": 170402199,\n      \"locationAreaCode\": 35632,\n      \"mobileCountryCode\": 310,\n      \"mobileNetworkCode\": 410,\n      \"age\": 0,\n      \"signalStrength\": -60,\n      \"timingAdvance\": 15\n    }\n  ]\n}");
Request request = new Request.Builder()
    .url("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")
    .method("POST", body)
    .addHeader("content-type", "application/json")
    .build();
Response response = client.newCall(request).execute();
// [END maps_http_geolocation_celltowers]