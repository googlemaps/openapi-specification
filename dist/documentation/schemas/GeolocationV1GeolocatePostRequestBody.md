<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_GeolocationV1GeolocatePostRequestBody] -->
<h3 class="schema-object" id="GeolocationV1GeolocatePostRequestBody">Geolocation Request Body</h3>

The request body must be formatted as JSON. The following fields are supported, and all fields are optional.

type: `object`

| Field                   | Type                                                         | Description                                                                                                                                                                    |
| :---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `homeMobileCountryCode` | integer                                                      | The cell tower's Mobile Country Code (MCC).                                                                                                                                    |
| `homeMobileNetworkCode` | integer                                                      | The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID).                                                                        |
| `radioType`             | string                                                       | The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results. |
| `carrier`               | string                                                       | The carrier name.                                                                                                                                                              |
| `considerIp`            | string                                                       | Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back.             |
| `cellTowers`            | Array<[CellTower](#CellTower "CellTower")>                   | See [CellTower](#CellTower "CellTower") for more information.                                                                                                                  |
| `wifiAccessPoints`      | Array<[WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint")> | See [WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint") for more information.                                                                                                |

<!--- [END maps_http_schema_GeolocationV1GeolocatePostRequestBody] -->