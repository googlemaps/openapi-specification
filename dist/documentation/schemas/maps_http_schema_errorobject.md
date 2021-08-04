<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errorobject] -->
<h3 class="schema-object" id="ErrorObject">ErrorObject</h3>

| Field     | Required     | Type                                                   | Description                                                                                                                                                                                                                             |
| :-------- | ------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`    | **required** | number                                                 | <div class="nonref-property-description"><p>This is the same as the HTTP status of the response.</p></div>                                                                                                                              |
| `errors`  | **required** | Array&lt;[ErrorDetail](#ErrorDetail "ErrorDetail")&gt; | <div class="ref-property-description"><p>A list of errors which occurred. Each error contains an identifier for the type of error and a short description.</p><p>See <a href="#ErrorDetail">ErrorDetail</a> for more information.</div> |
| `message` | **required** | string                                                 | <div class="nonref-property-description"><p>A short description of the error.</p></div>                                                                                                                                                 |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/ErrorObject.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - ErrorObject" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_errorobject] -->
