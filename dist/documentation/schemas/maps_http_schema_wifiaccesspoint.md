<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_wifiaccesspoint] -->
<h3 class="schema-object" id="WifiAccessPoint">WiFi Access Point</h3>

Attributes used to describe a WiFi access point.

type: `object`

| Field                | Required     | Type    | Description                                                                                                          |
| :------------------- | ------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `macAddress`         | **required** | string  | The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be `:` (colon). |
| `age`                | optional     | integer | The number of milliseconds since this access point was detected.                                                     |
| `channel`            | optional     | integer | The channel over which the client is communication with the access point.                                            |
| `signalStrength`     | optional     | integer | The current signal strength measured in dBm.                                                                         |
| `signalToNoiseRatio` | optional     | integer | The current signal to noise ratio measured in dB.                                                                    |

<!--- [END maps_http_schema_wifiaccesspoint] -->