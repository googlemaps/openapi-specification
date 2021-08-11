<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_elevationstatus] -->
<h3 class="schema-object" id="ElevationStatus">ElevationStatus</h3>

Status codes returned by service.

- `OK` indicating the API request was successful.
- `DATA_NOT_AVAILABLE` indicating that there's no available data for the input locations.
- `INVALID_REQUEST` indicating the API request was malformed.
- `OVER_DAILY_LIMIT` indicating any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicating the requestor has exceeded quota.
- `REQUEST_DENIED` indicating the API did not complete the request.
- `UNKNOWN_ERROR` indicating an unknown error.

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-elevationstatus" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/ElevationStatus.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-elevationstatus" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - ElevationStatus" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_elevationstatus] -->
