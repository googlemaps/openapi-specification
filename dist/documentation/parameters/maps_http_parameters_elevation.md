<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_parameters_elevation] -->

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

-   <h4 id="locations" class="param-pre-style">locations</h4>

    Positional requests are indicated through use of the locations parameter, indicating elevation requests for the specific locations passed as latitude/longitude values.

    The locations parameter may take the following arguments:

    -   A single coordinate: `locations=40.714728,-73.998672`
    -   An array of coordinates separated using the pipe ('|') character: `locations=40.714728,-73.998672|-34.397,150.644`
    -   A set of encoded coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm): `locations=enc:gfo}EtohhU`

    Latitude and longitude coordinate strings are defined using numerals within a comma-separated text string. For example, "40.714728,-73.998672" is a valid locations value. Latitude and longitude values must correspond to a valid location on the face of the earth. Latitudes can take any value between -90 and 90 while longitude values can take any value between -180 and 180. If you specify an invalid latitude or longitude value, your request will be rejected as a bad request.

    You may pass any number of multiple coordinates within an array or encoded polyline, while still constructing a valid URL. Note that when passing multiple coordinates, the accuracy of any returned data may be of lower resolution than when requesting data for a single coordinate.

-   <h4 id="path" class="param-pre-style">path</h4>

    An array of comma separated {latitude,longitude} strings.

-   <h4 id="samples" class="param-pre-style">samples</h4>

    Required if path parameter is set.

<!--- [END maps_http_parameters_elevation] -->