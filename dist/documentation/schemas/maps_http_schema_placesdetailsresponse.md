<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placesdetailsresponse] -->
<h3 class="schema-object" id="PlacesDetailsResponse">Places Details Response Body</h3>

type: `object`

| Field               | Required     | Type                                         | Description                                                                                                                                                                                                                          |
| :------------------ | ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `html_attributions` | **required** | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>TODO</p></div>                                                                                                                                                                           |
| `result`            | **required** | [Place](#Place "Place")                      | <div class="ref-property-description"><p>Contains an array of routes from the origin to the destination. See Routes below. Routes consist of nested Legs and Steps.</p><p>See <a href="#Place">Place</a> for more information.</div> |
| `status`            | **required** | [PlacesStatus](#PlacesStatus "PlacesStatus") | <div class="ref-property-description"><p>Contains metadata on the request.</p><p>See <a href="#PlacesStatus">PlacesStatus</a> for more information.</div>                                                                            |
| `info_messages`     | optional     | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>Contains additional information about the request.</p></div>                                                                                                                             |

<!--- [END maps_http_schema_placesdetailsresponse] -->
