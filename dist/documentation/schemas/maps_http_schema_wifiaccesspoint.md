<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_wifiaccesspoint] -->
<h3 class="schema-object" id="WiFiAccessPoint">WiFiAccessPoint</h3>

Attributes used to describe a WiFi access point.

| Field                                                                                                                        | Required     | Type    | Description                                                                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h4 id="WiFiAccessPoint-macAddress" class="add-link schema-object-property-key"><code>macAddress</code></h4>                 | **required** | string  | <div class="nonref-property-description"><p>The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be <code>:</code> (colon).</p></div> |
| <h4 id="WiFiAccessPoint-age" class="add-link schema-object-property-key"><code>age</code></h4>                               | optional     | integer | <div class="nonref-property-description"><p>The number of milliseconds since this access point was detected.</p></div>                                                                |
| <h4 id="WiFiAccessPoint-channel" class="add-link schema-object-property-key"><code>channel</code></h4>                       | optional     | integer | <div class="nonref-property-description"><p>The channel over which the client is communication with the access point.</p></div>                                                       |
| <h4 id="WiFiAccessPoint-signalStrength" class="add-link schema-object-property-key"><code>signalStrength</code></h4>         | optional     | integer | <div class="nonref-property-description"><p>The current signal strength measured in dBm.</p></div>                                                                                    |
| <h4 id="WiFiAccessPoint-signalToNoiseRatio" class="add-link schema-object-property-key"><code>signalToNoiseRatio</code></h4> | optional     | integer | <div class="nonref-property-description"><p>The current signal to noise ratio measured in dB.</p></div>                                                                               |

<h4 class="schema-object-example" id="WiFiAccessPoint-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "84:d4:7e:09:a5:f1",
      "signalStrength": -43,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "44:48:c1:a6:f3:d0",
      "signalStrength": -55,
      "signalToNoiseRatio": 0
    }
  ]
}</pre>

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-wifiaccesspoint" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/WiFiAccessPoint.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-wifiaccesspoint" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - WiFiAccessPoint" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_wifiaccesspoint] -->
