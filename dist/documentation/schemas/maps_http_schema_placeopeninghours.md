<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placeopeninghours] -->
<h3 class="schema-object" id="PlaceOpeningHours">PlaceOpeningHours</h3>

An object describing the opening hours of a place.

| Field          | Required     | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :------------- | ------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open_now`     | **required** | boolean                                                                                    | <div class="nonref-property-description"><p>A boolean value indicating if the place is open at the current time.</p></div>                                                                                                                   |
| `periods`      | optional     | Array&lt;[PlaceOpeningHoursPeriod](#PlaceOpeningHoursPeriod "PlaceOpeningHoursPeriod")&gt; | <div class="ref-property-description"><p>An array of opening periods covering seven days, starting from Sunday, in chronological order.</p><p>See <a href="#PlaceOpeningHoursPeriod">PlaceOpeningHoursPeriod</a> for more information.</div> |
| `weekday_text` | optional     | Array&lt;string&gt;                                                                        | <div class="nonref-property-description"><p>A boolean value indicating if the place is open at the current time.</p></div>                                                                                                                   |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-placeopeninghours" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/PlaceOpeningHours.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-placeopeninghours" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - PlaceOpeningHours" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_placeopeninghours] -->
