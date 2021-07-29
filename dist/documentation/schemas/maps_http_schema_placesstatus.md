<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placesstatus] -->
<h3 class="schema-object" id="PlacesStatus">Status codes</h3>

Status codes returned by service.

- `OK` indicating the API request was successful.
- `ZERO_RESULTS` indicating that the referenced location, `place_id`, was valid but no longer refers to a valid result. This may occur if the establishment is no longer in business.
- `NOT_FOUND` indicating that that the referenced location, `place_id`, was not found in the Places database.
- `INVALID_REQUEST` indicating the API request was malformed.
- `OVER_QUERY_LIMIT` indicating any of the following:
  - You have exceeded the QPS limits.
  - Billing has not been enabled on your account.
  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
    See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
- `REQUEST_DENIED` indicating that your request was denied, generally because:
  - The request is missing an API key.
  - The `key` parameter is invalid.
- `UNKNOWN_ERROR` indicating an unknown error.

type: `string`

<!--- [END maps_http_schema_placesstatus] -->
