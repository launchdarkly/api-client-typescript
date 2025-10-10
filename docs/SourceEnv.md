# SourceEnv


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The key of the source environment to clone from | [optional] [default to undefined]
**version** | **number** | (Optional) The version number of the source environment to clone from. Used for optimistic locking | [optional] [default to undefined]

## Example

```typescript
import { SourceEnv } from 'launchdarkly-api-typescript';

const instance: SourceEnv = {
    key,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
