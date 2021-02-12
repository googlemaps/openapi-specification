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

<h4 class="schema-object-example" id="WifiAccessPoint-example">Example</h4>

```js
{
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
}
```

<!--- [END maps_http_schema_wifiaccesspoint] -->