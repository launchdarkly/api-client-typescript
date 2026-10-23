# RestrictedModelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successes** | **Array&lt;string&gt;** | Model config keys that were added to the restricted list | [default to undefined]
**errors** | [**Array&lt;RestrictedModelError&gt;**](RestrictedModelError.md) | Model config keys that were not added, with the reason for each key | [default to undefined]

## Example

```typescript
import { RestrictedModelsResponse } from 'launchdarkly-api-typescript';

const instance: RestrictedModelsResponse = {
    successes,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
