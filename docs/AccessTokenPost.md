# AccessTokenPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the access token | [optional] [default to undefined]
**description** | **string** | A description for the access token | [optional] [default to undefined]
**role** | **string** | Base role for the token | [optional] [default to undefined]
**customRoleIds** | **Array&lt;string&gt;** | A list of custom role IDs to use as access limits for the access token | [optional] [default to undefined]
**inlineRole** | [**Array&lt;StatementPost&gt;**](StatementPost.md) | A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a role. | [optional] [default to undefined]
**serviceToken** | **boolean** | Whether the token is a service token | [optional] [default to undefined]
**defaultApiVersion** | **number** | The default API version for this token | [optional] [default to undefined]

## Example

```typescript
import { AccessTokenPost } from 'launchdarkly-api-typescript';

const instance: AccessTokenPost = {
    name,
    description,
    role,
    customRoleIds,
    inlineRole,
    serviceToken,
    defaultApiVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
