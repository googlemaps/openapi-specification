<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_placequeryautocomplete] -->
<h2 id="required-parameters">Required parameters</h2>

-   <h3 id="input">input</h3>

    The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance.

<h2 id="optional-parameters">Optional parameters</h2>

-   <h3 id="language">language</h3>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header, or the native language of the domain from which the request is sent.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h3 id="location">location</h3>

    The point around which to retrieve place information. This must be specified as `latitude,longitude`.

-   <h3 id="offset">offset</h3>

    The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret.

-   <h3 id="radius">radius</h3>

    Defines the distance (in meters) within which to return place results.


<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/parameters" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
 <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[parameters] Bug - /maps/api/place/queryautocomplete/json" title="File bug for parameters on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_parameters_placequeryautocomplete] -->