<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_elevation] -->


<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="locations">locations</h3>

    Positional requests are indicated through use of the locations parameter, indicating elevation requests for the specific locations passed as latitude/longitude values.

    The locations parameter may take the following arguments:

    -   A single coordinate: `locations=40.714728,-73.998672`
    -   An array of coordinates separated using the pipe ('|') character:
        ```
        locations=40.714728,-73.998672|-34.397,150.644
        ```
    -   A set of encoded coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm):
        ```
        locations=enc:gfo}EtohhU
        ```

    Latitude and longitude coordinate strings are defined using numerals within a comma-separated text string. For example, "40.714728,-73.998672" is a valid locations value. Latitude and longitude values must correspond to a valid location on the face of the earth. Latitudes can take any value between -90 and 90 while longitude values can take any value between -180 and 180. If you specify an invalid latitude or longitude value, your request will be rejected as a bad request.

    You may pass any number of multiple coordinates within an array or encoded polyline, while still constructing a valid URL. Note that when passing multiple coordinates, the accuracy of any returned data may be of lower resolution than when requesting data for a single coordinate.

-   <h3 class="parameter-name" id="path">path</h3>

    An array of comma separated `latitude,longitude` strings.

-   <h3 class="parameter-name" id="samples">samples</h3>

    Required if path parameter is set.


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-elevation" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-elevation" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/elevation/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_elevation] -->