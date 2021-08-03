<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placeaddresscomponent] -->
<h3 class="schema-object" id="PlaceAddressComponent">Place Address Component</h3>

| Field        | Required     | Type                | Description                                                                                                                                                                                                                                                                            |
| :----------- | ------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `long_name`  | **required** | string              | <div class="nonref-property-description"><p>The full text description or name of the address component as returned by the Geocoder.</p></div>                                                                                                                                          |
| `short_name` | **required** | string              | <div class="nonref-property-description"><p>An abbreviated textual name for the address component, if available. For example, an address component for the state of Alaska may have a long_name of "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation.</p></div> |
| `types`      | **required** | Array&lt;string&gt; | <div class="nonref-property-description"><p>An array indicating the type of the address component. See the list of <a href="https://developers.google.com/maps/documentation/places/web-service/supported_types">supported types</a>.</p></div>                                        |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/PlaceAddressComponent.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - PlaceAddressComponent" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_placeaddresscomponent] -->
