<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placesdetailsresponse] -->
<h3 class="schema-object" id="PlacesDetailsResponse">Places Details Response Body</h3>

type: `object`

| Field               | Required     | Type                                         | Description                                                                                                                                                                  |
| :------------------ | ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html_attributions` | **required** | Array&lt;string&gt;                          | TODO                                                                                                                                                                         |
| `result`            | **required** | [Place](#Place "Place")                      | Contains an array of routes from the origin to the destination. See Routes below. Routes consist of nested Legs and Steps. See [Place](#Place "Place") for more information. |
| `status`            | **required** | [PlacesStatus](#PlacesStatus "PlacesStatus") | Contains metadata on the request. See [PlacesStatus](#PlacesStatus "PlacesStatus") for more information.                                                                     |
| `info_messages`     | optional     | Array&lt;string&gt;                          | Contains additional information about the request.                                                                                                                           |

<!--- [END maps_http_schema_placesdetailsresponse] -->