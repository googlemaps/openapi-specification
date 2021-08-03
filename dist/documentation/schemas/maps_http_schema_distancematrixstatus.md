<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_distancematrixstatus] -->
<h3 class="schema-object" id="DistanceMatrixStatus">Status codes</h3>

Status codes returned by service.

- `OK` indicates the response contains a valid result.
- `INVALID_REQUEST` indicates that the provided request was invalid.
- `MAX_ELEMENTS_EXCEEDED` indicates that the product of origins and destinations exceeds the per-query limit.
- `MAX_DIMENSIONS_EXCEEDED` indicates that the number of origins or destinations exceeds the per-query limit.
- `OVER_DAILY_LIMIT` indicates any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application within the allowed time period.
- `REQUEST_DENIED` indicates that the service denied use of the Distance Matrix service by your application.
- `UNKNOWN_ERROR` indicates a Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schema" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schema] Bug - DistanceMatrixStatus" title="File bug for schema on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_distancematrixstatus] -->
