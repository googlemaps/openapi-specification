// [START maps_http_geolocation_wifi]
OkHttpClient client = new OkHttpClient().newBuilder()
    .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"considerIp\": \"false\",\n  \"wifiAccessPoints\": [\n    {\n      \"macAddress\": \"84:d4:7e:09:a5:f1\",\n      \"signalStrength\": -43,\n      \"signalToNoiseRatio\": 0\n    },\n    {\n      \"macAddress\": \"44:48:c1:a6:f3:d0\",\n      \"signalStrength\": -55,\n      \"signalToNoiseRatio\": 0\n    }\n  ]\n}");
Request request = new Request.Builder()
    .url("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY")
    .method("POST", body)
    .addHeader("content-type", "application/json")
    .build();
Response response = client.newCall(request).execute();
// [END maps_http_geolocation_wifi]