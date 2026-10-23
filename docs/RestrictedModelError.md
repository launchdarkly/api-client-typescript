# RestrictedModelError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The model config key that was not added | [default to undefined]
**message** | **string** | Why the key was not added. A key that a config variation uses cannot be restricted. Move those variations to a different model first. | [default to undefined]
**code** | **number** | HTTP status code for this key. &#x60;400&#x60; means a config variation uses the key. &#x60;404&#x60; means the key does not exist in the project. | [default to undefined]

## Example

```typescript
import { RestrictedModelError } from 'launchdarkly-api-typescript';

const instance: RestrictedModelError = {
    key,
    message,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
