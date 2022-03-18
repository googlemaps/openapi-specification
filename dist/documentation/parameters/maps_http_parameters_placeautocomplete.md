<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_placeautocomplete] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 class="parameter-name" id="input">input</h3>

    The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 class="parameter-name" id="components">components</h3>

    A grouping of places to which you would like to restrict your results. Currently, you can use components to filter by up to 5 countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character `|` as a separator. For example: `components=country:us|country:pr|country:vi|country:gu|country:mp` would restrict your results to places within the United States and its unincorporated organized territories.

    <div class="note"><strong>Note:</strong> If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend.  You can find code information at <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="blank" class="external">Wikipedia: List of ISO 3166 country codes</a> or the <a href="https://www.iso.org/obp/ui/#search" target="blank" class="external">ISO Online Browsing Platform</a>.</div>

-   <h3 class="parameter-name" id="language">language</h3>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h3 class="parameter-name" id="location">location</h3>

    The point around which to retrieve place information. This must be specified as `latitude,longitude`.

    <div class="note">When using the Text Search API, the `location` parameter may be overriden if the `query` contains an explicit location such as `Market in Barcelona`.</div>

-   <h3 class="parameter-name" id="offset">offset</h3>

    The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret.

-   <h3 class="parameter-name" id="origin">origin</h3>

    The origin point from which to calculate straight-line distance to the destination (returned as `distance_meters`). If this value is omitted, straight-line distance will not be returned. Must be specified as `latitude,longitude`.

-   <h3 class="parameter-name" id="radius">radius</h3>

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

-   <h3 class="parameter-name" id="region">region</h3>

    The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").

-   <h3 class="parameter-name" id="sessiontoken">sessiontoken</h3>

    A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.

    The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).

    We recommend the following guidelines:

    -   Use session tokens for all autocomplete sessions.
    -   Generate a fresh token for each session. Using a version 4 UUID is recommended.
    -   Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.
    -   Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.

-   <h3 class="parameter-name" id="strictbounds">strictbounds</h3>

    Returns only those places that are strictly within the region defined by `location` and `radius`. This is a restriction, rather than a bias, meaning that results outside this region will not be returned even if they match the user input.

-   <h3 class="parameter-name" id="types">types</h3>

    You may restrict results from a Place Autocomplete request to be of a certain type by passing a types parameter. The parameter specifies a type or a type collection, as listed in the supported types below. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the geocode and establishment types, but note that this will have the same effect as specifying no types. The supported types are:

    -   `geocode` instructs the Place Autocomplete service to return only geocoding results, rather than business results. Generally, you use this request to disambiguate results where the location specified may be indeterminate.
    -   `address` instructs the Place Autocomplete service to return only geocoding results with a precise address. Generally, you use this request when you know the user will be looking for a fully specified address.
    -   `establishment` instructs the Place Autocomplete service to return only business results.
    -   `(regions)` type collection instructs the Places service to return any result matching the following types:
        -   `locality`
        -   `sublocality`
        -   `postal_code`
        -   `country`
        -   `administrative_area_level_1`
        -   `administrative_area_level_2`
    -   `(cities)` type collection instructs the Places service to return results that match `locality` or `administrative_area_level_3`.


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-placeautocomplete" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/tree/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-parameters-placeautocomplete" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/place/autocomplete/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_placeautocomplete] -->