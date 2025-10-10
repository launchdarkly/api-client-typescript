# ReleasePolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**ReleasePoliciesAccessRep**](ReleasePoliciesAccessRep.md) |  | [optional] [default to undefined]
**_id** | **string** | The unique identifier of the release policy | [default to undefined]
**scope** | [**ReleasePolicyScope**](ReleasePolicyScope.md) |  | [optional] [default to undefined]
**rank** | **number** | The rank/priority of the release policy | [default to undefined]
**releaseMethod** | [**ReleaseMethod**](ReleaseMethod.md) |  | [default to undefined]
**guardedReleaseConfig** | [**GuardedReleaseConfig**](GuardedReleaseConfig.md) |  | [optional] [default to undefined]
**progressiveReleaseConfig** | **object** | Configuration for progressive releases | [optional] [default to undefined]
**name** | **string** | The name of the release policy | [default to undefined]
**key** | **string** | The human-readable key of the release policy | [default to undefined]

## Example

```typescript
import { ReleasePolicy } from 'launchdarkly-api-typescript';

const instance: ReleasePolicy = {
    _access,
    _id,
    scope,
    rank,
    releaseMethod,
    guardedReleaseConfig,
    progressiveReleaseConfig,
    name,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
