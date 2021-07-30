<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_celltower] -->
<h3 class="schema-object" id="CellTower">Cell Tower</h3>

Attributes used to describe a cell tower. The following optional fields are not currently used, but may be included if values are available: `age`, `signalStrength`, `timingAdvance`.

| Field               | Required     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------ | ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cellId`            | **required** | integer | <div class="nonref-property-description"><p>Unique identifier of the cell. On GSM, this is the Cell ID (CID); CDMA networks use the Base Station ID (BID). WCDMA networks use the UTRAN/GERAN Cell Identity (UC-Id), which is a 32-bit value concatenating the Radio Network Controller (RNC) and Cell ID. Specifying only the 16-bit Cell ID value in WCDMA networks may return inaccurate results.</p></div> |
| `locationAreaCode`  | **required** | integer | <div class="nonref-property-description"><p>The Location Area Code (LAC) for GSM and WCDMA networks. The Network ID (NID) for CDMA networks.</p></div>                                                                                                                                                                                                                                                         |
| `mobileCountryCode` | **required** | integer | <div class="nonref-property-description"><p>The cell tower's Mobile Country Code (MCC).</p></div>                                                                                                                                                                                                                                                                                                              |
| `mobileNetworkCode` | **required** | integer | <div class="nonref-property-description"><p>The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID).</p></div>                                                                                                                                                                                                                                                  |
| `age`               | optional     | integer | <div class="nonref-property-description"><p>The number of milliseconds since this cell was primary. If age is 0, the cellId represents a current measurement.</p></div>                                                                                                                                                                                                                                        |
| `signalStrength`    | optional     | number  | <div class="nonref-property-description"><p>Radio signal strength measured in dBm.</p></div>                                                                                                                                                                                                                                                                                                                   |
| `timingAdvance`     | optional     | number  | <div class="nonref-property-description"><p>The timing advance value.</p></div>                                                                                                                                                                                                                                                                                                                                |

<h4 class="schema-object-example" id="CellTower-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "cellTowers": [
    {
      "cellId": 170402199,
      "locationAreaCode": 35632,
      "mobileCountryCode": 310,
      "mobileNetworkCode": 410,
      "age": 0,
      "signalStrength": -60,
      "timingAdvance": 15
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schema" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schema] Bug - CellTower" title="File bug for schema on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_celltower] -->
