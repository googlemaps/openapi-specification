<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_distancematrix] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 id="destinations">destinations</h3>

    One or more locations to use as the finishing point for calculating travel distance and time. The options for the destinations parameter are the same as for the origins parameter.

-   <h3 id="origins">origins</h3>

    The starting point for calculating travel distance and time. You can supply one or more locations separated by the pipe character (|), in the form of a place ID, an address, or latitude/longitude coordinates:

    -   **Place ID**: If you supply a place ID, you must prefix it with `place_id:`.
    -   **Address**: If you pass an address, the service geocodes the string and converts it to a latitude/longitude coordinate to calculate distance. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.
        <div class="note">Note: using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.</div>
    -   **Coordinates**: If you pass latitude/longitude coordinates, they they will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.
    -   **Plus codes** must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to %2B and spaces are url-escaped to %20):
        -   **global code** is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is encoded to `849VCWC8%2BR9`).
        -   **compound code** is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is encoded to `CWC8%2BR9%20Mountain%20View%20CA%20USA`).
    -   **Encoded Polyline** Alternatively, you can supply an encoded set of coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). This is particularly useful if you have a large number of origin points, because the URL is significantly shorter when using an encoded polyline.
        -   Encoded polylines must be prefixed with `enc:` and followed by a colon `:`. For example: `origins=enc:gfo}EtohhU:`
        -   You can also include multiple encoded polylines, separated by the pipe character `|`. For example:
            ```
            origins=enc:wc~oAwquwMdlTxiKtqLyiK:|enc:c~vnAamswMvlTor@tjGi}L:|enc:udymA{~bxM:
            ```

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 id="mode">mode</h3>

    For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:

    -   `DRIVING` (default) indicates standard driving directions or distance using the road network.
    -   `WALKING` requests walking directions or distance via pedestrian paths & sidewalks (where available).
    -   `BICYCLING` requests bicycling directions or distance via bicycle paths & preferred streets (where available).
    -   `TRANSIT` requests directions or distance via public transit routes (where available). If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`.

    <div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div>


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/distanceMatrix/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_distancematrix] -->