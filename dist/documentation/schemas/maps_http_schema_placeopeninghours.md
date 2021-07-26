<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placeopeninghours] -->
<h3 class="schema-object" id="PlaceOpeningHours">Place Opening Hours</h3>

type: `object`

| Field          | Required | Type                                                                                       | Description                                                                                                                                                                                            |
| :------------- | -------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `open_now`     | optional | boolean                                                                                    | A boolean value indicating if the place is open at the current time.                                                                                                                                   |
| `periods`      | optional | Array&lt;[PlaceOpeningHoursPeriod](#PlaceOpeningHoursPeriod "PlaceOpeningHoursPeriod")&gt; | An array of opening periods covering seven days, starting from Sunday, in chronological order. See [PlaceOpeningHoursPeriod](#PlaceOpeningHoursPeriod "PlaceOpeningHoursPeriod") for more information. |
| `weekday_text` | optional | Array&lt;string&gt;                                                                        | A boolean value indicating if the place is open at the current time.                                                                                                                                   |

<!--- [END maps_http_schema_placeopeninghours] -->