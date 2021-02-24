<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_elevationresponse] -->
<h3 class="schema-object" id="ElevationResponse">Elevation Response</h3>

type: `object`

| Field           | Required     | Type                                                               | Description                                                                     |
| :-------------- | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `results`       | **required** | Array&lt;[ElevationResult](#ElevationResult "ElevationResult")&gt; | See [ElevationResult](#ElevationResult "ElevationResult") for more information. |
| `status`        | **required** | [ElevationStatus](#ElevationStatus "ElevationStatus")              | See [ElevationStatus](#ElevationStatus "ElevationStatus") for more information. |
| `error_message` | optional     | string                                                             | Detailed information about the reasons behind the given status code.            |

<!--- [END maps_http_schema_elevationresponse] -->