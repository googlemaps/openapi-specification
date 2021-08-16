<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_streetviewresponse] -->
<h3 class="schema-object" id="StreetViewResponse">StreetViewResponse</h3>

| Field       | Required     | Type                                                     | Description                                                                                                                                                                 |
| :---------- | ------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`    | **required** | [StreetViewStatus](#StreetViewStatus "StreetViewStatus") | <div class="ref-property-description"><p>The status of the request.</p><p>See <a href="#StreetViewStatus">StreetViewStatus</a> for more information.</div>                  |
| `copyright` | optional     | string                                                   | <div class="nonref-property-description"><p>An array of snapped points.</p></div>                                                                                           |
| `date`      | optional     | string                                                   | <div class="nonref-property-description"><p>A string indicating year and month that the panorama was captured.</p></div>                                                    |
| `location`  | optional     | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")          | <div class="ref-property-description"><p>The location of the panorama.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div>                     |
| `pano_id`   | optional     | string                                                   | <div class="nonref-property-description"><p>A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed.</p></div> |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-streetviewresponse" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/StreetViewResponse.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-streetviewresponse" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - StreetViewResponse" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_streetviewresponse] -->
