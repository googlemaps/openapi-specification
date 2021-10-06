<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_fare] -->
<h3 class="schema-object" id="Fare">Fare</h3>

The total fare for the route.

```
{
  "currency" : "USD",
  "value" : 6,
  "text" : "$6.00"
}
```

| Field                                                                                         | Required     | Type   | Description                                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------- | ------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="Fare-currency" class="add-link schema-object-property-key"><code>currency</code></h4> | **required** | string | <div class="nonref-property-description"><p>An <a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency code</a> indicating the currency that the amount is expressed in.</p></div> |
| <h4 id="Fare-text" class="add-link schema-object-property-key"><code>text</code></h4>         | **required** | string | <div class="nonref-property-description"><p>The total fare amount, formatted in the requested language.</p></div>                                                                             |
| <h4 id="Fare-value" class="add-link schema-object-property-key"><code>value</code></h4>       | **required** | number | <div class="nonref-property-description"><p>The total fare amount, in the currency specified.</p></div>                                                                                       |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-fare" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/Fare.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-fare" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - Fare" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_fare] -->
