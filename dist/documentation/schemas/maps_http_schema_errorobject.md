<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errorobject] -->
<h3 class="schema-object" id="ErrorObject">Error Object</h3>

type: `object`

| Field     | Required     | Type                                                   | Description                                                                                                                                                                                                                             |
| :-------- | ------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`    | **required** | number                                                 | <div class="nonref-property-description"><p>This is the same as the HTTP status of the response.</p></div>                                                                                                                              |
| `errors`  | **required** | Array&lt;[ErrorDetail](#ErrorDetail "ErrorDetail")&gt; | <div class="ref-property-description"><p>A list of errors which occurred. Each error contains an identifier for the type of error and a short description.</p><p>See <a href="#ErrorDetail">ErrorDetail</a> for more information.</div> |
| `message` | **required** | string                                                 | <div class="nonref-property-description"><p>A short description of the error.</p></div>                                                                                                                                                 |

<!--- [END maps_http_schema_errorobject] -->
