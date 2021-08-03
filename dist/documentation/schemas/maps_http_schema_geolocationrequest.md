<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_geolocationrequest] -->
<h3 class="schema-object" id="GeolocationRequest">Request body</h3>

The request body must be formatted as JSON. The following fields are supported, and all fields are optional.

| Field                   | Required | Type                                                               | Description                                                                                                                                                                                                                          |
| :---------------------- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrier`               | optional | string                                                             | <div class="nonref-property-description"><p>The carrier name.</p></div>                                                                                                                                                              |
| `cellTowers`            | optional | Array&lt;[CellTower](#CellTower "CellTower")&gt;                   | <div class="ref-property-description"><p>The request body's cellTowers array contains zero or more cell tower objects.</p><p>See <a href="#CellTower">CellTower</a> for more information.</div>                                      |
| `considerIp`            | optional | string                                                             | <div class="nonref-property-description"><p>Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back.</p></div>             |
| `homeMobileCountryCode` | optional | integer                                                            | <div class="nonref-property-description"><p>The cell tower's Mobile Country Code (MCC).</p></div>                                                                                                                                    |
| `homeMobileNetworkCode` | optional | integer                                                            | <div class="nonref-property-description"><p>The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID).</p></div>                                                                        |
| `radioType`             | optional | string                                                             | <div class="nonref-property-description"><p>The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results.</p></div> |
| `wifiAccessPoints`      | optional | Array&lt;[WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint")&gt; | <div class="ref-property-description"><p>An array of two or more WiFi access point objects.</p><p>See <a href="#WifiAccessPoint">WifiAccessPoint</a> for more information.</div>                                                     |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/GeolocationRequest.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - GeolocationRequest" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_geolocationrequest] -->
