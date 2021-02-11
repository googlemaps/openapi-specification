<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_errordetail] -->
<h3 class="schema-object" id="ErrorDetail">Error Message</h3>

type: `object`

| Field     | Required     | Type   | Description                                                                                                                                                            |
| :-------- | ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message` | **required** | string | A short description of the error.                                                                                                                                      |
| `reason`  | **required** | string | A reason for the error. The allowed values include: `badRequest`, `dailyLimitExceeded`, `invalid`, `keyInvalid`, `notFound`, `parseError`, and `userRateLimitExceeded` |
| `domain`  | optional     | string | The domain in which the error occurred. The allowed values include: `global`, `geolocation`, and `usageLimits`                                                         |

<h4 class="schema-object-example" id="ErrorDetail-example">Example</h4>

```js
{
  "message": "API key not valid. Please pass a valid API key.",
  "domain": "global",
  "reason": "badRequest"
}
```

<!--- [END maps_http_schema_errordetail] -->