<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_timezonestatus] -->
<h3 class="schema-object" id="TimeZoneStatus">Time Zone Status</h3>

The `status` field within the Time Zone response object contains the status of the request. The "status" field may contain the following values:

- `OK` indicates that the request was successful.

- `INVALID_REQUEST` indicates that the request was malformed.

- `OVER_DAILY_LIMIT` indicates any of the following:

  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).

- `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.

- `REQUEST_DENIED` indicates that the API did not complete the request. Confirm that the request was sent over HTTPS instead of HTTP.

- `UNKNOWN_ERROR` indicates an unknown error.

- `ZERO_RESULTS` indicates that no time zone data could be found for the specified position or time. Confirm that the request is for a location on land, and not over water.

type: `string`

<!--- [END maps_http_schema_timezonestatus] -->
