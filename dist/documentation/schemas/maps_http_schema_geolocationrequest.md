<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_geolocationrequest] -->
<h3 class="schema-object" id="GeolocationRequest">Geolocation Request Body</h3>

The request body must be formatted as JSON. The following fields are supported, and all fields are optional.

type: `object`

| Field                   | Required | Type                                                               | Description                                                                                                                                                                    |
| :---------------------- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrier`               | optional | string                                                             | The carrier name.                                                                                                                                                              |
| `cellTowers`            | optional | Array&lt;[CellTower](#CellTower "CellTower")&gt;                   | The request body's cellTowers array contains zero or more cell tower objects. See [CellTower](#CellTower "CellTower") for more information.                                    |
| `considerIp`            | optional | string                                                             | Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back.             |
| `homeMobileCountryCode` | optional | integer                                                            | The cell tower's Mobile Country Code (MCC).                                                                                                                                    |
| `homeMobileNetworkCode` | optional | integer                                                            | The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID).                                                                        |
| `radioType`             | optional | string                                                             | The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results. |
| `wifiAccessPoints`      | optional | Array&lt;[WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint")&gt; | An array of two or more WiFi access point objects. See [WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint") for more information.                                             |

<!--- [END maps_http_schema_geolocationrequest] -->