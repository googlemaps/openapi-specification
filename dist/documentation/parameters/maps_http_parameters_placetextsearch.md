<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_placetextsearch] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 id="query">query</h3>

    The text string on which to search, for example: "restaurant" or "123 Main Street". This must a place name, address, or category of establishments. Any other types
    of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches based on this string and order
    the results based on their perceived relevance.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 id="language">language</h3>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h3 id="location">location</h3>

    The point around which to retrieve place information. This must be specified as `latitude,longitude`.

    <div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div>

-   <h3 id="maxprice">maxprice</h3>

    Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region.

-   <h3 id="minprice">minprice</h3>

    Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region.

-   <h3 id="opennow">opennow</h3>

    Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query.

-   <h3 id="pagetoken">pagetoken</h3>

    Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored.

-   <h3 id="radius">radius</h3>

    Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to *prefer* showing results within that circle; results outside of the defined area may still be displayed.

    The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.

    -   Autocomplete: 50,000 meters
    -   Nearby Search:
        -   with `keyword` or `name`: 50,000 meters
        -   without `keyword` or `name`
            -   Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.
            -   When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.
    -   Query Autocomplete: 50,000 meters
    -   Text Search: 50,000 meters

-   <h3 id="region">region</h3>

    The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").

-   <h3 id="type">type</h3>

    Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.

    -   `type=hospital|pharmacy|doctor` becomes `type=hospital`
    -   `type=hospital,pharmacy,doctor` is ignored entirely

    See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).

    <div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div>


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-placetextsearch" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-placetextsearch" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/place/textsearch/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_placetextsearch] -->