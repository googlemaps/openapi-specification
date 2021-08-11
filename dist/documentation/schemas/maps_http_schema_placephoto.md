<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placephoto] -->
<h3 class="schema-object" id="PlacePhoto">PlacePhoto</h3>

A photo of a Place. The photo can be accesed via the [Place Photo](https://developers.google.com/places/web-service/photos) API using an url in the following pattern:

```
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
```

See [Place Photos](https://developers.google.com/places/web-service/photos) for more information.

| Field               | Required     | Type                | Description                                                                                                                 |
| :------------------ | ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `height`            | **required** | number              | <div class="nonref-property-description"><p>The height of the photo.</p></div>                                              |
| `html_attributions` | **required** | Array&lt;string&gt; | <div class="nonref-property-description"><p>The HTML attributions for the photo.</p></div>                                  |
| `photo_reference`   | **required** | string              | <div class="nonref-property-description"><p>A string used to identify the photo when you perform a Photo request.</p></div> |
| `width`             | **required** | number              | <div class="nonref-property-description"><p>The width of the photo.</p></div>                                               |

<p style="text-align: right; font-size: smaller;">Generated from the <a class="gc-analytics-event" data-category="GMP" data-label="openapi-github" href="https://github.com/googlemaps/openapi-specification" title="Google Maps Platform OpenAPI Specification" class="external">OpenAPI specification</a>.
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-placephoto" data-action="edit" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/blob/main/specification/schemas/PlacePhoto.yml" title="Edit on GitHub"><span class="material-icons">edit</span> Edit</a>
<a class="gc-analytics-event" data-category="GMP" data-label="openapi-github-maps-http-schema-placephoto" data-action="bug" style="margin-left: 5px;" href="https://github.com/googlemaps/openapi-specification/issues/new?assignees=&labels=type%3A+bug%2C+triage+me&template=bug_report.md&title=[schemas] Bug - PlacePhoto" title="File bug for schemas on GitHub"><span class="material-icons">bug_report</span> Report bug</a>
</p>

<!--- [END maps_http_schema_placephoto] -->
