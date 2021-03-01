<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_distancematrixresponse] -->
<h3 class="schema-object" id="DistanceMatrixResponse">Distance Matrix Response Body</h3>

type: `object`

| Field                   | Required     | Type                                                                     | Description                                                                                                                                                                             |
| :---------------------- | ------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `destination_addresses` | **required** | Array&lt;string&gt;                                                      | An array of addresses as returned by the API from your original request. As with origin_addresses, these are localized if appropriate.                                                  |
| `origin_addresses`      | **required** | Array&lt;string&gt;                                                      | An array of addresses as returned by the API from your original request. These are formatted by the geocoder and localized according to the language parameter passed with the request. |
| `rows`                  | **required** | Array&lt;[DistanceMatrixRow](#DistanceMatrixRow "DistanceMatrixRow")&gt; | An array of elements, which in turn each contain a `status`, `duration`, and `distance` element. See [DistanceMatrixRow](#DistanceMatrixRow "DistanceMatrixRow") for more information.  |
| `status`                | **required** | [DistanceMatrixStatus](#DistanceMatrixStatus "DistanceMatrixStatus")     | Contains metadata on the request. See [DistanceMatrixStatus](#DistanceMatrixStatus "DistanceMatrixStatus") for more information.                                                        |

<!--- [END maps_http_schema_distancematrixresponse] -->