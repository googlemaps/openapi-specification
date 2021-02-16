<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errorresponse] -->
<h3 class="schema-object" id="ErrorResponse">Error Response</h3>

In the case of an error, a standard format error response body will be returned and the HTTP status code will be set to an error status. The response contains an object with a single error object.

type: `object`

| Field   | Required     | Type                                      | Description                                                                                        |
| :------ | ------------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `error` | **required** | [ErrorObject](#ErrorObject "ErrorObject") | An error return by the server. See [ErrorObject](#ErrorObject "ErrorObject") for more information. |

<h4 class="schema-object-example" id="ErrorResponse-example">Example</h4>

<pre class="notranslate lang-json prettyprint">{
  "error": {
    "code": 400,
    "message": "API key not valid. Please pass a valid API key.",
    "errors": [
      {
        "message": "API key not valid. Please pass a valid API key.",
        "domain": "global",
        "reason": "badRequest"
      }
    ],
    "status": "INVALID_ARGUMENT"
  }
}</pre>

<!--- [END maps_http_schema_errorresponse] -->