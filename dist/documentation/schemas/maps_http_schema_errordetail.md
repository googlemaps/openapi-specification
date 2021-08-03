<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errordetail] -->
<h3 class="schema-object" id="ErrorDetail">Error Detail</h3>

| Field     | Required     | Type   | Description                                                                                                                                                                                                                                                |
| :-------- | ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message` | **required** | string | <div class="nonref-property-description"><p>A short description of the error.</p></div>                                                                                                                                                                    |
| `reason`  | **required** | string | <div class="nonref-property-description"><p>A reason for the error.</p><div class="notranslate">The allowed values include: `badRequest`, `dailyLimitExceeded`, `invalid`, `keyInvalid`, `notFound`, `parseError`, and `userRateLimitExceeded`</div></div> |
| `domain`  | optional     | string | <div class="nonref-property-description"><p>The domain in which the error occurred.</p><div class="notranslate">The allowed values include: `global`, `geolocation`, and `usageLimits`</div></div>                                                         |

<h4 class="schema-object-example" id="ErrorDetail-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "message": "API key not valid. Please pass a valid API key.",
  "domain": "global",
  "reason": "badRequest"
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/ErrorDetail.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - ErrorDetail" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_errordetail] -->
