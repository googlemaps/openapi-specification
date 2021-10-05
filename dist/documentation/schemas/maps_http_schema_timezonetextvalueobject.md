<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_timezonetextvalueobject] -->
<h3 class="schema-object" id="TimeZoneTextValueObject">TimeZoneTextValueObject</h3>

An object containing Unix time, a time zone, and its formatted text representation.

| Field       | Required     | Type   | Description                                                                                                                                                                                                                           |
| :---------- | ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`      | **required** | string | <div class="nonref-property-description"><p>The time specified as a string in the time zone.</p></div>                                                                                                                                |
| `time_zone` | **required** | string | <div class="nonref-property-description"><p>Contains the time zone. The value is the name of the time zone as defined in the <a href="http://www.iana.org/time-zones">IANA Time Zone Database</a>, e.g. "America/New_York".</p></div> |
| `value`     | **required** | number | <div class="nonref-property-description"><p>The time specified as Unix time, or seconds since midnight, January 1, 1970 UTC.</p></div>                                                                                                |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-timezonetextvalueobject" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/TimeZoneTextValueObject.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-timezonetextvalueobject" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TimeZoneTextValueObject" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_timezonetextvalueobject] -->
