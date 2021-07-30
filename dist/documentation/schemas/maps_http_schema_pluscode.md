<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_pluscode] -->
<h3 class="schema-object" id="PlusCode">Plus Code</h3>

An encoded location reference, derived from latitude and longitude coordinates, that represents an area, 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named).

| Field           | Required     | Type   | Description                                                                                                                                                                                          |
| :-------------- | ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compound_code` | **required** | string | <div class="nonref-property-description"><p>The <code>compound_code</code> is a 6 character or longer local code with an explicit location (<code>CWC8+R9, Mountain View, CA, USA</code>).</p></div> |
| `global_code`   | **required** | string | <div class="nonref-property-description"><p>The <code>global_code</code> is a 4 character area code and 6 character or longer local code (<code>849VCWC8+R9</code>).</p></div>                       |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schema" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schema] Bug - PlusCode" title="File bug for schema on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_pluscode] -->
