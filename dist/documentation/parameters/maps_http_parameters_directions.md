<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_directions] -->
<h3 id="required-parameters">Required Parameters</h3>

-   <h4 id="destination"><code>destination</code></h4>

    The place ID, address, or textual latitude/longitude value to which you wish to calculate directions. The options for the destination parameter are the same as for the origin parameter.

-   <h4 id="origin"><code>origin</code></h4>

    The place ID, address, or textual latitude/longitude value from which you wish to calculate directions/

    -   Place IDs must be prefixed with place_id:. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
        `origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE` For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.
    -   If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.
        `origin=24+Sussex+Drive+Ottawa+ON`
        Using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.
    -   If you pass coordinates, the point will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.
        `origin=41.43206,-81.38992`
    -   Plus codes must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to %2B and spaces are url-escaped to %20). Global code is a 4 character area code and 6 character or longer local code (849VCWC8+R9 is 849VCWC8%2BR9). Compound code is a 6 character or longer local code with an explicit location (CWC8+R9 Mountain View, CA, USA is CWC8%2BR9%20Mountain%20View%20CA%20USA).

<h3 id="optional-parameters">Optional Parameters</h3>

-   <h4 id="alternatives"><code>alternatives</code></h4>

    If set to true, specifies that the Directions service may provide more than one route alternative in the response. Note that providing route alternatives may increase the response time from the server. This is only available for requests without intermediate waypoints.

-   <h4 id="arrival_time"><code>arrival_time</code></h4>

    Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer.

-   <h4 id="avoid"><code>avoid</code></h4>

    Indicates that the calculated route(s) should avoid the indicated features. This parameter supports the following arguments:

    -   `tolls` indicates that the calculated route should avoid toll roads/bridges.
    -   `highways` indicates that the calculated route should avoid highways.
    -   `ferries` indicates that the calculated route should avoid ferries.
    -   `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.

-   <h4 id="departure_time"><code>departure_time</code></h4>

    Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a departure_time later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the departure_time to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:

    -   For requests where the travel mode is transit: You can optionally specify one of departure_time or arrival_time. If neither time is specified, the departure_time defaults to now (that is, the departure time defaults to the current time).
    -   For requests where the travel mode is driving: You can specify the departure_time to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The departure_time must be set to the current time or some time in the future. It cannot be in the past.

    Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.

-   <h4 id="language"><code>language</code></h4>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header, or the native language of the domain from which the request is sent.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h4 id="mode"><code>mode</code></h4>

    For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used.

-   <h4 id="region"><code>region</code></h4>

    The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").

-   <h4 id="traffic_model"><code>traffic_model</code></h4>

    Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The traffic_model parameter may only be specified for driving directions where the request includes a departure_time. The available values for this parameter are:

    -   `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the departure_time is to now.
    -   `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.
    -   `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.

    The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information.

-   <h4 id="transit_mode"><code>transit_mode</code></h4>

    Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:

    -   `bus` indicates that the calculated route should prefer travel by bus.
    -   `subway` indicates that the calculated route should prefer travel by subway.
    -   `train` indicates that the calculated route should prefer travel by train.
    -   `tram` indicates that the calculated route should prefer travel by tram and light rail.
    -   `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train|tram|subway`.

-   <h4 id="transit_routing_preference"><code>transit_routing_preference</code></h4>

    Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:

    -   `less_walking` indicates that the calculated route should prefer limited amounts of walking.
    -   `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers.

-   <h4 id="units"><code>units</code></h4>

    Specifies the unit system to use when displaying results.

    Directions results contain text within distance fields that may be displayed to the user to indicate the distance of a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.

    For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while the reverse route will display results in kilometers. You may override this unit system by setting one explicitly within the request's units parameter, passing one of the following values:

    -   `metric` specifies usage of the metric system. Textual distances are returned using kilometers and meters.
    -   `imperial` specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet.

    Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.

-   <h4 id="waypoints"><code>waypoints</code></h4>

    Specifies an array of intermediate locations to include along the route between the origin and destination points as pass through or stopover locations. Waypoints alter a route by directing it through the specified location(s). The API supports waypoints for these travel modes: driving, walking and bicycling; not transit. You can specify waypoints using the following values:

    -   Place ID: The unique value specific to a location (ChIJGwVKWe5w44kRcr4b9E25-Go).
    -   Address string (Charlestown, Boston,MA)
    -   Latitude/longitude coordinates (lat/lng): an explicit value pair. (-34.92788%2C138.60008 comma, no space)
    -   Encoded polyline that can be specified by a set of any of the above. (enc:lexeF{\~wsZejrPjtye@:)

<!--- [END maps_http_parameters_directions] -->