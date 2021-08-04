<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_geolocationresponse] -->
<h3 class="schema-object" id="GeolocationResponse">GeolocationResponse</h3>

A successful geolocation request will return a JSON-formatted response defining a location and radius.

| Field      | Required     | Type                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------- | ------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accuracy` | **required** | number                                          | <div class="nonref-property-description"><p>The accuracy of the estimated location, in meters. This represents the radius of a circle around the given <code>location</code>. If your Geolocation response shows a very high value in the <code>accuracy</code> field, the service may be geolocating based on the request IP, instead of WiFi points or cell towers. This can happen if no cell towers or access points are valid or recognized. To confirm that this is the issue, set <code>considerIp</code> to <code>false</code> in your request. If the response is a <code>404</code>, you've confirmed that your <code>wifiAccessPoints</code> and <code>cellTowers</code> objects could not be geolocated.</p></div> |
| `location` | **required** | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | <div class="ref-property-description"><p>The user’s estimated latitude and longitude, in degrees.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

<h4 class="schema-object-example" id="GeolocationResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "location": {
    "lat": 37.421925,
    "lng": -122.0841293
  },
  "accuracy": 30
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/GeolocationResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - GeolocationResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_geolocationresponse] -->
