<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_directions] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="destination">destination</h3>

    The place ID, address, or textual latitude/longitude value to which you wish to calculate directions. The options for the destination parameter are the same as for the origin parameter.

-   <h3 class="parameter-name" id="origin">origin</h3>

    The place ID, address, or textual latitude/longitude value from which you wish to calculate directions.

    -   Place IDs must be prefixed with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).

        ```
        origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
        ```

    -   If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.

        ```
        origin=24+Sussex+Drive+Ottawa+ON
        ```

        Using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.

    -   If you pass coordinates, the point will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.

        ```
        origin=41.43206,-81.38992
        ```

    -   Plus codes must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`).

        -   **Global code** is a 4 character area code and 6 character or longer local code (849VCWC8+R9 is `849VCWC8%2BR9`).
        -   **Compound code** is a 6 character or longer local code with an explicit location (CWC8+R9 Mountain View, CA, USA is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).

    <div class="note">Note: For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div>

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="alternatives">alternatives</h3>

    If set to `true`, specifies that the Directions service may provide more than one route alternative in the response. Note that providing route alternatives may increase the response time from the server. This is only available for requests without intermediate waypoints. For more information, see the [guide to waypoints](https://developers.google.com/maps/documentation/directions/get-directions#Waypoints).

-   <h3 class="parameter-name" id="arrival_time">arrival_time</h3>

    Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer.

-   <h3 class="parameter-name" id="avoid">avoid</h3>

    Indicates that the calculated route(s) should avoid the indicated features. This parameter supports the following arguments:

    -   `tolls` indicates that the calculated route should avoid toll roads/bridges.
    -   `highways` indicates that the calculated route should avoid highways.
    -   `ferries` indicates that the calculated route should avoid ferries.
    -   `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.

    It's possible to request a route that avoids any combination of tolls, highways and ferries by passing multiple restrictions to the avoid parameter. For example:

    ```
    avoid=tolls|highways|ferries.
    ```

-   <h3 class="parameter-name" id="departure_time">departure_time</h3>

    Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:

    -   For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).
    -   For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.

    <div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div>
    <div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div>

-   <h3 class="parameter-name" id="language">language</h3>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h3 class="parameter-name" id="mode">mode</h3>

    For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:

    -   `driving` (default) indicates standard driving directions or distance using the road network.
    -   `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).
    -   `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).
    -   `transit` requests directions or distance via public transit routes (where available). If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`.

    <div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div>

-   <h3 class="parameter-name" id="region">region</h3>

    The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").

-   <h3 class="parameter-name" id="traffic_model">traffic_model</h3>

    Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:

    -   `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.
    -   `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.
    -   `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.

    The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information.

-   <h3 class="parameter-name" id="transit_mode">transit_mode</h3>

    Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:

    -   `bus` indicates that the calculated route should prefer travel by bus.
    -   `subway` indicates that the calculated route should prefer travel by subway.
    -   `train` indicates that the calculated route should prefer travel by train.
    -   `tram` indicates that the calculated route should prefer travel by tram and light rail.
    -   `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train|tram|subway`.

-   <h3 class="parameter-name" id="transit_routing_preference">transit_routing_preference</h3>

    Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:

    -   `less_walking` indicates that the calculated route should prefer limited amounts of walking.
    -   `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers.

-   <h3 class="parameter-name" id="units">units</h3>

    Specifies the unit system to use when displaying results.

    Directions results contain text within distance fields that may be displayed to the user to indicate the distance of a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.

    For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while the reverse route will display results in kilometers. You may override this unit system by setting one explicitly within the request's units parameter, passing one of the following values:

    -   `metric` specifies usage of the metric system. Textual distances are returned using kilometers and meters.
    -   `imperial` specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet.

    <div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div>

-   <h3 class="parameter-name" id="waypoints">waypoints</h3>

    <div class="caution">Caution: Requests using more than 10 waypoints (between 11 and 25), or waypoint optimization, are billed at a higher rate. <a href="https://developers.google.com/maps/billing/gmp-billing#directions-advanced">Learn more about billing</a> for Google Maps Platform products.</div>

    Specifies an array of intermediate locations to include along the route between the origin and destination points as pass through or stopover locations. Waypoints alter a route by directing it through the specified location(s). The API supports waypoints for these travel modes: driving, walking and bicycling; not transit.   You can supply one or more locations separated by the pipe character (`|` or `%7C`), in the form of a place ID, an address, or latitude/longitude coordinates. By default, the Directions service calculates a route using the waypoints in the order they are given. The precedence for parsing the value of the waypoint is place ID, latitude/longitude coordinates, then address.

    -   If you pass a place ID, you must prefix it with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](/maps/documentation/places/web-service/place-id).
        <div class="note">For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div>
    -   If you pass latitude/longitude coordinates, the values go directly to the front-end server to calculate directions without geocoding. The points are snapped to roads and might not provide the accuracy your app needs. Use coordinates when you are confident the values truly specify the points your app needs for routing without regard to possible access points or additional geocoding details. Ensure that a comma (`%2C`) and not a space (`%20`) separates the latitude and longitude values.
    -   If you pass an address, the Directions service will geocode the string and convert it into latitude/longitude coordinates to calculate directions. If the address value is ambiguous, the value might evoke a search to disambiguate from similar addresses. For example, "1st Street" could be a complete value or a partial value for "1st street NE" or "1st St SE". This result may be different from that returned by the Geocoding API. You can avoid possible misinterpretations using place IDs.
    -   Alternatively, you can supply an encoded set of points using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). You will find an encoded set is useful for a large number of waypoints, because the URL is significantly shorter. All web services have a URL limit of 8192 characters.
        -   Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). For example: `waypoints=enc:gfo}EtohhU:`.
        -   You can also include multiple encoded polylines, separated by the pipe character (`|`). For example, `waypoints=via:enc:wc~oAwquwMdlTxiKtqLyiK:|enc:c~vnAamswMvlTor@tjGi}L:| via:enc:udymA{~bxM:`

    ##### Influence routes with stopover and pass through points

    For each waypoint in the request, the directions response appends an entry to the `legs` array to provide the details for stopovers on that leg of the journey.

    If you'd like to influence the route using waypoints without adding a stopover, add the prefix `via:` to the waypoint. Waypoints prefixed with `via:` will not add an entry to the `legs` array, but will route the journey through the waypoint.

    The following URL modifies the previous request such that the journey is routed through Lexington without stopping:

    ```
    https://maps.googleapis.com/maps/api/directions/json?
    origin=Boston,MA&destination=Concord,MA
    &waypoints=Charlestown,MA|via:Lexington,MA  
    ```

    The `via:` prefix is most effective when creating routes in response to the user dragging the waypoints on the map. Doing so allows the user to see how the final route may look in real-time and helps ensure that waypoints are placed in locations that are accessible to the Directions API.

    <div class="caution">Caution: Using the `via:` prefix to avoid stopovers results in directions that are strict in their interpretation of the waypoint. This interpretation may result in severe detours on the route or `ZERO_RESULTS` in the response status code if the Directions API is unable to create directions through that point.</div>

    ##### Optimize your waypoints

    By default, the Directions service calculates a route through the provided waypoints in their given order. Optionally, you may pass `optimize:true` as the first argument within the waypoints parameter to allow the Directions service to optimize the provided route by rearranging the waypoints in a more efficient order. (This optimization is an application of the traveling salesperson problem.) Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account when deciding which route is the most efficient. All waypoints must be stopovers for the Directions service to optimize their route.

    If you instruct the Directions service to optimize the order of its waypoints, their order will be returned in the `waypoint_order` field within the routes object. The `waypoint_order` field returns values which are zero-based.

    The following example calculates a road journey from Adelaide, South Australia to each of South Australia's main wine regions using route optimization.

    ```
    https://maps.googleapis.com/maps/api/directions/json?
    origin=Adelaide,SA&destination=Adelaide,SA
    &waypoints=optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA
    ```

    Inspection of the calculated route will indicate that calculation uses waypoints in the following waypoint order:

    ```
    "waypoint_order": [ 3, 2, 0, 1 ]
    ```

    <div class="caution">Caution: Requests using waypoint optimization are billed at a higher rate. <a href="https://developers.devsite.corp.google.com/maps/billing/gmp-billing#directions-advanced">Learn more about how Google Maps Platform products are billed.</a></div>


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-directions" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-directions" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/directions/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_directions] -->