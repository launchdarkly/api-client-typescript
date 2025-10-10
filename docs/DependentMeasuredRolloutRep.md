# DependentMeasuredRolloutRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The guarded rollout measured rollout Id | [default to undefined]
**flagKey** | **string** | The guarded rollout flag key  | [default to undefined]
**flagName** | **string** | The guarded rollout flag name  | [default to undefined]
**environmentKey** | **string** | The guarded rollout environment key | [default to undefined]
**environmentName** | **string** | The guarded rollout environment name | [default to undefined]
**status** | **string** | The guarded rollout status | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { DependentMeasuredRolloutRep } from 'launchdarkly-api-typescript';

const instance: DependentMeasuredRolloutRep = {
    _id,
    flagKey,
    flagName,
    environmentKey,
    environmentName,
    status,
    creationDate,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
