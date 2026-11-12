# WebhookPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-readable name for your webhook | [optional] [default to undefined]
**url** | **string** | The URL of the remote webhook | [default to undefined]
**secret** | **string** | If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a secret for you. | [optional] [default to undefined]
**bearerToken** | **string** | An optional token. If set, LaunchDarkly sends it in an Authorization: Bearer header with each request. It is write-only and is never returned. | [optional] [default to undefined]
**statements** | [**Array&lt;StatementPost&gt;**](StatementPost.md) |  | [optional] [default to undefined]
**sign** | **boolean** | If sign is false, the webhook does not include a signature header, and the secret can be omitted. | [default to undefined]
**on** | **boolean** | Whether or not this webhook is enabled. | [default to undefined]
**tags** | **Array&lt;string&gt;** | List of tags for this webhook | [optional] [default to undefined]

## Example

```typescript
import { WebhookPost } from 'launchdarkly-api-typescript';

const instance: WebhookPost = {
    name,
    url,
    secret,
    bearerToken,
    statements,
    sign,
    on,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
