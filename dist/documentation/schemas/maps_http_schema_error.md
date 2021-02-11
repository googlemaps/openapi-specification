<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_error] -->
<h3 class="schema-object" id="Error">Error</h3>

type: `object`

| Field     | Required     | Type                                                   | Description                                                                                                                                                                           |
| :-------- | ------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`    | **required** | number                                                 | This is the same as the HTTP status of the response.                                                                                                                                  |
| `errors`  | **required** | Array&lt;[ErrorDetail](#ErrorDetail "ErrorDetail")&gt; | A list of errors which occurred. Each error contains an identifier for the type of error and a short description. See [ErrorDetail](#ErrorDetail "ErrorDetail") for more information. |
| `message` | **required** | string                                                 | A short description of the error.                                                                                                                                                     |

<!--- [END maps_http_schema_error] -->