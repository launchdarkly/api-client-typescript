# PutReleasePolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**ReleasePolicyScope**](ReleasePolicyScope.md) |  | [optional] [default to undefined]
**releaseMethod** | [**ReleaseMethod**](ReleaseMethod.md) |  | [default to undefined]
**guardedReleaseConfig** | [**GuardedReleaseConfig**](GuardedReleaseConfig.md) |  | [optional] [default to undefined]
**progressiveReleaseConfig** | [**ProgressiveReleaseConfig**](ProgressiveReleaseConfig.md) |  | [optional] [default to undefined]
**name** | **string** | The name of the release policy | [default to undefined]

## Example

```typescript
import { PutReleasePolicyRequest } from 'launchdarkly-api-typescript';

const instance: PutReleasePolicyRequest = {
    scope,
    releaseMethod,
    guardedReleaseConfig,
    progressiveReleaseConfig,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
