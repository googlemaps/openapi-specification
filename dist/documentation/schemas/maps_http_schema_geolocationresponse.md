<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_geolocationresponse] -->
<h3 class="schema-object" id="GeolocationResponse">Geolocation Response Body</h3>

A successful geolocation request will return a JSON-formatted response defining a location and radius.

type: `object`

| Field      | Required     | Type                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------- | ------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accuracy` | **required** | number                                          | The accuracy of the estimated location, in meters. This represents the radius of a circle around the given `location`. If your Geolocation response shows a very high value in the `accuracy` field, the service may be geolocating based on the  request IP, instead of WiFi points or cell towers. This can happen if no cell towers or access points are valid or recognized. To confirm that this is the issue, set `considerIp` to `false` in your request. If the response is a `404`, you've confirmed that your `wifiAccessPoints` and `cellTowers` objects could not be geolocated. |
| `location` | **required** | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | The user’s estimated latitude and longitude, in degrees. See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

<h4 class="schema-object-example" id="GeolocationResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "location": {
    "lat": 37.421925,
    "lng": -122.0841293
  },
  "accuracy": 30
}</pre>

<!--- [END maps_http_schema_geolocationresponse] -->