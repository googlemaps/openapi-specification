<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_timezonestatus] -->
<h3 class="schema-object" id="TimeZoneStatus">TimeZoneStatus</h3>

The `status` field within the Time Zone response object contains the status of the request. The `status` field may contain the following values:

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

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-timezonestatus" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/TimeZoneStatus.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-timezonestatus" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - TimeZoneStatus" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_timezonestatus] -->
