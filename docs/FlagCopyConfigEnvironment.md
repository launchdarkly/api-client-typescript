# FlagCopyConfigEnvironment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The environment key | [default to undefined]
**currentVersion** | **number** | Optional flag version. If you include this, the operation only succeeds if the current flag version in the environment matches this version. | [optional] [default to undefined]

## Example

```typescript
import { FlagCopyConfigEnvironment } from 'launchdarkly-api-typescript';

const instance: FlagCopyConfigEnvironment = {
    key,
    currentVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
