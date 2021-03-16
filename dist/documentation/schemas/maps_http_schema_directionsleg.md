<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_directionsleg] -->
<h3 class="schema-object" id="DirectionsLeg">Directions Leg</h3>

type: `object`

| Field                 | Required | Type                                                                    | Description                                                                                       |
| :-------------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `distance`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | TODO See [TextValueObject](#TextValueObject "TextValueObject") for more information.              |
| `duration`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | TODO See [TextValueObject](#TextValueObject "TextValueObject") for more information.              |
| `end_location`        | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | TODO See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                    |
| `html_instructions`   | optional | string                                                                  | TODO                                                                                              |
| `polyline`            | optional |                                                                         | TODO                                                                                              |
| `start_location`      | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | TODO See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information.                    |
| `steps`               | optional | [DirectionsStep](#DirectionsStep "DirectionsStep")                      | TODO See [DirectionsStep](#DirectionsStep "DirectionsStep") for more information.                 |
| `traffic_speed_entry` | optional |                                                                         | TODO                                                                                              |
| `travel_mode`         | optional | [TravelMode](#TravelMode "TravelMode")                                  | TODO See [TravelMode](#TravelMode "TravelMode") for more information.                             |
| `via_waypoint`        | optional | [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") | See [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") for more information. |

<!--- [END maps_http_schema_directionsleg] -->