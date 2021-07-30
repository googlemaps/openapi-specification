<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_wifiaccesspoint] -->
<h3 class="schema-object" id="WifiAccessPoint">WiFi Access Point</h3>

Attributes used to describe a WiFi access point.

| Field                | Required     | Type    | Description                                                                                                                                                                           |
| :------------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `macAddress`         | **required** | string  | <div class="nonref-property-description"><p>The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be <code>:</code> (colon).</p></div> |
| `age`                | optional     | integer | <div class="nonref-property-description"><p>The number of milliseconds since this access point was detected.</p></div>                                                                |
| `channel`            | optional     | integer | <div class="nonref-property-description"><p>The channel over which the client is communication with the access point.</p></div>                                                       |
| `signalStrength`     | optional     | integer | <div class="nonref-property-description"><p>The current signal strength measured in dBm.</p></div>                                                                                    |
| `signalToNoiseRatio` | optional     | integer | <div class="nonref-property-description"><p>The current signal to noise ratio measured in dB.</p></div>                                                                               |

<h4 class="schema-object-example" id="WifiAccessPoint-example">Example</h4>

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

<!--- [END maps_http_schema_wifiaccesspoint] -->
