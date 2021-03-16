<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_directionsresponse] -->
<h3 class="schema-object" id="DirectionsResponse">Directions Response Body</h3>

type: `object`

| Field                | Required     | Type                                                                                                | Description                                                                                                           |
| :------------------- | ------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `geocoded_waypoints` | **required** | Array&lt;[DirectionsGeocodedWaypoint](#DirectionsGeocodedWaypoint "DirectionsGeocodedWaypoint")&gt; | TODO See [DirectionsGeocodedWaypoint](#DirectionsGeocodedWaypoint "DirectionsGeocodedWaypoint") for more information. |
| `routes`             | **required** | Array&lt;[DirectionsRoute](#DirectionsRoute "DirectionsRoute")&gt;                                  | TODO See [DirectionsRoute](#DirectionsRoute "DirectionsRoute") for more information.                                  |
| `status`             | **required** | [DirectionsStatus](#DirectionsStatus "DirectionsStatus")                                            | Contains metadata on the request. See [DirectionsStatus](#DirectionsStatus "DirectionsStatus") for more information.  |

<!--- [END maps_http_schema_directionsresponse] -->