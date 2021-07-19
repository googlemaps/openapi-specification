<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_geocode] -->

<!--- This style allows for <code> styling in <h> -->        
<style>
.param-pre-style {
  width: fit-content;
  padding: var(--devsite-inline-code-padding,4px 4px);
  font: 500 90%/1 var(--devsite-code-font-family);
  box-sizing: border-box;
  background: var(--devsite-code-background);
  color: var(--devsite-code-color);
}
</style>




<h3 id="parameters">Parameters</h3>

-   <h4 id="address" class="param-pre-style">address</h4>

    The street address or plus code that you want to geocode. Specify addresses in accordance with the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. Street address elements should be delimited by spaces (shown here as url-escaped to `%20`):

    `address=24%20Sussex%20Drive%20Ottawa%20ON`

    Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`):

    -   global code is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is `849VCWC8%2BR9`).
    -   compound code is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).

-   <h4 id="bounds" class="param-pre-style">bounds</h4>

    The bounding box of the viewport within which to bias geocode results more prominently. This parameter will only influence, not fully restrict, results from the geocoder.  - name: locations
    in: query

-   <h4 id="components" class="param-pre-style">components</h4>

    A components filter with elements separated by a pipe (|). The components filter is also accepted as an optional parameter if an address is provided. Each element in the components filter consists of a component:value pair, and fully restricts the results from the geocoder.



-   <h4 id="language" class="param-pre-style">language</h4>

    The language in which to return results.

    -   See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
    -   If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header, or the native language of the domain from which the request is sent.
    -   The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
    -   If a name is not available in the preferred language, the API uses the closest match.
    -   The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, *utca* and *tér* are synonyms for street in Hungarian.

-   <h4 id="latlng" class="param-pre-style">latlng</h4>

    The street address that you want to geocode, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided.

-   <h4 id="region" class="param-pre-style">region</h4>

    The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").

<!--- [END maps_http_parameters_geocode] -->