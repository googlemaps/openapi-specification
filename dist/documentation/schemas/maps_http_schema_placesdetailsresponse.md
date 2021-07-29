<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placesdetailsresponse] -->
<h3 class="schema-object" id="PlacesDetailsResponse">Response body</h3>

type: `object`

| Field               | Required     | Type                                         | Description                                                                                                                                                                                                                        |
| :------------------ | ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html_attributions` | **required** | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution).</p></div>                                           |
| `result`            | **required** | [Place](#Place "Place")                      | <div class="ref-property-description"><p>Contains the detailed information about the place requested.</p><p>See <a href="#Place">Place</a> for more information.</div>                                                             |
| `status`            | **required** | [PlacesStatus](#PlacesStatus "PlacesStatus") | <div class="ref-property-description"><p>Contains metadata on the request.</p><p>See <a href="#PlacesStatus">PlacesStatus</a> for more information.</div>                                                                          |
| `info_messages`     | optional     | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>Contains additional information about the request. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.</p></div> |

<!--- [END maps_http_schema_placesdetailsresponse] -->
