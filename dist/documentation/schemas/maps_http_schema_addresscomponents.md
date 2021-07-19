<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_addresscomponents] -->
<h3 class="schema-object" id="AddressComponents">Address Components</h3>

type: `object`

| Field        | Required | Type                | Description                                                                                                                                                                                                                          |
| :----------- | -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `long_name`  | optional | string              | The full text description or name of the address component as returned by the Geocoding.                                                                                                                                             |
| `short_name` | optional | string              | An abbreviated textual name for the address component, if available. For example, an address component for the state of Alaska may have a `long_name` of `Alaska` and a `short_name` of `AK` using the 2-letter postal abbreviation. |
| `types`      | optional | Array&lt;string&gt; | An array indicating the type of the address component. See the list of [supported types](https://developers.google.com/places/web-service/supported_types).                                                                          |

<!--- [END maps_http_schema_addresscomponents] -->