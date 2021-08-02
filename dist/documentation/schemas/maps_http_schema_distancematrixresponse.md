<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_distancematrixresponse] -->
<h3 class="schema-object" id="DistanceMatrixResponse">Response body</h3>

| Field                   | Required     | Type                                                                     | Description                                                                                                                                                                                                                                                         |
| :---------------------- | ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `destination_addresses` | **required** | Array&lt;string&gt;                                                      | <div class="nonref-property-description"><p>An array of addresses as returned by the API from your original request. As with origin_addresses, these are localized if appropriate.</p></div>                                                                        |
| `origin_addresses`      | **required** | Array&lt;string&gt;                                                      | <div class="nonref-property-description"><p>An array of addresses as returned by the API from your original request. These are formatted by the geocoder and localized according to the language parameter passed with the request.</p></div>                       |
| `rows`                  | **required** | Array&lt;[DistanceMatrixRow](#DistanceMatrixRow "DistanceMatrixRow")&gt; | <div class="ref-property-description"><p>An array of elements, which in turn each contain a <code>status</code>, <code>duration</code>, and <code>distance</code> element.</p><p>See <a href="#DistanceMatrixRow">DistanceMatrixRow</a> for more information.</div> |
| `status`                | **required** | [DistanceMatrixStatus](#DistanceMatrixStatus "DistanceMatrixStatus")     | <div class="ref-property-description"><p>Contains metadata on the request.</p><p>See <a href="#DistanceMatrixStatus">DistanceMatrixStatus</a> for more information.</div>                                                                                           |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schema" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schema] Bug - DistanceMatrixResponse" title="File bug for schema on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_distancematrixresponse] -->