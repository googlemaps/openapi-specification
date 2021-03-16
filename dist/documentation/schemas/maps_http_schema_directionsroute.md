<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_directionsroute] -->
<h3 class="schema-object" id="DirectionsRoute">Directions Route</h3>

type: `object`

| Field               | Required     | Type                                                               | Description                                                                          |
| :------------------ | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `bounds`            | **required** | [Bounds](#Bounds "Bounds")                                         | TODO See [Bounds](#Bounds "Bounds") for more information.                            |
| `copyrights`        | **required** | string                                                             | TODO                                                                                 |
| `legs`              | **required** | Array&lt;[DirectionsRoute](#DirectionsRoute "DirectionsRoute")&gt; | TODO See [DirectionsRoute](#DirectionsRoute "DirectionsRoute") for more information. |
| `overview_polyline` | **required** |                                                                    | TODO                                                                                 |
| `summary`           | **required** | string                                                             | TODO                                                                                 |
| `warnings`          | **required** | Array&lt;string&gt;                                                | TODO                                                                                 |
| `waypoint_order`    | **required** | Array&lt;integer&gt;                                               | TODO                                                                                 |

<!--- [END maps_http_schema_directionsroute] -->