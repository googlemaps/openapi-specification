<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_streetviewstatus] -->
<h3 class="schema-object" id="StreetViewStatus">StreetViewStatus</h3>

The `status` field within the Streetview Metadata response object contains the status of the request. The `status` field may contain the following values:

- `OK` indicates that no errors occurred; a panorama is found and metadata is returned.
- `INVALID_REQUEST` indicates that the request was malformed.
- `NOT_FOUND` indicates that the address string provided in the `location` parameter could not be found. This may occur if a non-existent address is given.
- `ZERO_RESULTS` indicates that no panorama could be found near the provided location. This may occur if a non-existent or invalid `pano` id is given.
- `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
- `REQUEST_DENIED` indicates that your request was denied. This may occur if you did not [authorize](https://developers.google.com/maps/documentation/streetview/get-api-key) your request, or if the Street View Static API is not activated in the Google Cloud Console project containing your API key.
- `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. This is often a temporary status. The request may succeed if you try again

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-streetviewstatus" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/StreetViewStatus.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-streetviewstatus" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - StreetViewStatus" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_streetviewstatus] -->
