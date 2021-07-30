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

<!--- [END maps_http_schema_errordetail] -->
