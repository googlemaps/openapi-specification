<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_directionsleg] -->
<h3 class="schema-object" id="DirectionsLeg">Directions Leg</h3>

type: `object`

| Field                 | Required | Type                                                                    | Description                                                                                                         |
| :-------------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `distance`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | Distance of the leg. See [TextValueObject](#TextValueObject "TextValueObject") for more information.                |
| `duration`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | Duration of the leg. See [TextValueObject](#TextValueObject "TextValueObject") for more information.                |
| `end_address`         | optional | string                                                                  | The end address of the leg.                                                                                         |
| `end_location`        | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | The end location of the leg. See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.              |
| `html_instructions`   | optional | string                                                                  | Formatted instructions for the leg                                                                                  |
| `polyline`            | optional |                                                                         | TODO                                                                                                                |
| `start_address`       | optional | string                                                                  | The start address of the leg.                                                                                       |
| `start_location`      | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | The start location of the leg. See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.            |
| `steps`               | optional | Array&lt;[DirectionsStep](#DirectionsStep "DirectionsStep")&gt;         | Individual steps that make up the leg. See [DirectionsStep](#DirectionsStep "DirectionsStep") for more information. |
| `traffic_speed_entry` | optional |                                                                         | TODO                                                                                                                |
| `travel_mode`         | optional | [TravelMode](#TravelMode "TravelMode")                                  | The mode of travel for the leg. See [TravelMode](#TravelMode "TravelMode") for more information.                    |
| `via_waypoint`        | optional | [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") | See [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") for more information.                   |

<!--- [END maps_http_schema_directionsleg] -->