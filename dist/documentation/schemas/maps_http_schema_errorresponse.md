<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errorresponse] -->
<h3 class="schema-object" id="ErrorResponse">Error Response</h3>

type: `object`

| Field   | Required     | Type                    | Description                                                                      |
| :------ | ------------ | ----------------------- | -------------------------------------------------------------------------------- |
| `error` | **required** | [Error](#Error "Error") | An error return by the server. See [Error](#Error "Error") for more information. |

<h4 class="schema-object-example" id="ErrorResponse-example">Example</h4>

```js
{
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
}
```

<!--- [END maps_http_schema_errorresponse] -->