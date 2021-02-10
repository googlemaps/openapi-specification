<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_geolocationv1geolocatepostrequestbody] -->
<h3 class="schema-object" id="GeolocationV1GeolocatePostRequestBody">Geolocation Request Body</h3>

The request body must be formatted as JSON. The following fields are supported, and all fields are optional.

type: `object`

| Field                   | Required | Type                                                         | Description                                                                                                                                                                    |
| :---------------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `homeMobileCountryCode` | optional | integer                                                      | The cell tower's Mobile Country Code (MCC).                                                                                                                                    |
| `homeMobileNetworkCode` | optional | integer                                                      | The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID).                                                                        |
| `radioType`             | optional | string                                                       | The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results. |
| `carrier`               | optional | string                                                       | The carrier name.                                                                                                                                                              |
| `considerIp`            | optional | string                                                       | Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back.             |
| `cellTowers`            | optional | Array<[CellTower](#CellTower "CellTower")>                   | The request body's cellTowers array contains zero or more cell tower objects. See [CellTower](#CellTower "CellTower") for more information.                                    |
| `wifiAccessPoints`      | optional | Array<[WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint")> | An array of WiFi access point objects. See [WifiAccessPoint](#WifiAccessPoint "WifiAccessPoint") for more information.                                                         |

<!--- [END maps_http_schema_geolocationv1geolocatepostrequestbody] -->