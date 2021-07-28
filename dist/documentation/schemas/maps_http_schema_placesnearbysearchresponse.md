<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placesnearbysearchresponse] -->
<h3 class="schema-object" id="PlacesNearbySearchResponse">Places Nearby Search Response Body</h3>

type: `object`

| Field               | Required     | Type                                         | Description                                                                                                                                                                              |
| :------------------ | ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html_attributions` | **required** | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution).</p></div> |
| `results`           | **required** | Array&lt;[Place](#Place "Place")&gt;         | <div class="ref-property-description"><p>Contains an array of places.</p><p>See <a href="#Place">Place</a> for more information.</div>                                                   |
| `status`            | **required** | [PlacesStatus](#PlacesStatus "PlacesStatus") | <div class="ref-property-description"><p>Contains metadata on the request.</p><p>See <a href="#PlacesStatus">PlacesStatus</a> for more information.</div>                                |
| `info_messages`     | optional     | Array&lt;string&gt;                          | <div class="nonref-property-description"><p>Contains additional information about the request.</p></div>                                                                                 |

<!--- [END maps_http_schema_placesnearbysearchresponse] -->
