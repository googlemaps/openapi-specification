<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_placeopeninghours] -->
<h3 class="schema-object" id="PlaceOpeningHours">Place Opening Hours</h3>

| Field          | Required | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :------------- | -------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open_now`     | optional | boolean                                                                                    | <div class="nonref-property-description"><p>A boolean value indicating if the place is open at the current time.</p></div>                                                                                                                   |
| `periods`      | optional | Array&lt;[PlaceOpeningHoursPeriod](#PlaceOpeningHoursPeriod "PlaceOpeningHoursPeriod")&gt; | <div class="ref-property-description"><p>An array of opening periods covering seven days, starting from Sunday, in chronological order.</p><p>See <a href="#PlaceOpeningHoursPeriod">PlaceOpeningHoursPeriod</a> for more information.</div> |
| `weekday_text` | optional | Array&lt;string&gt;                                                                        | <div class="nonref-property-description"><p>A boolean value indicating if the place is open at the current time.</p></div>                                                                                                                   |

<!--- [END maps_http_schema_placeopeninghours] -->
