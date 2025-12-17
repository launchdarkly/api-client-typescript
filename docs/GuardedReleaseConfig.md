# GuardedReleaseConfig

Configuration for guarded releases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rolloutContextKindKey** | **string** | Context kind key to use as the randomization unit for the rollout | [optional] [default to undefined]
**minSampleSize** | **number** | The minimum number of samples required to make a decision | [optional] [default to undefined]
**rollbackOnRegression** | **boolean** | Whether to roll back on regression | [optional] [default to undefined]
**metricKeys** | **Array&lt;string&gt;** | List of metric keys | [optional] [default to undefined]
**metricGroupKeys** | **Array&lt;string&gt;** | List of metric group keys | [optional] [default to undefined]
**stages** | [**Array&lt;ReleasePolicyStage&gt;**](ReleasePolicyStage.md) | List of stages | [optional] [default to undefined]

## Example

```typescript
import { GuardedReleaseConfig } from 'launchdarkly-api-typescript';

const instance: GuardedReleaseConfig = {
    rolloutContextKindKey,
    minSampleSize,
    rollbackOnRegression,
    metricKeys,
    metricGroupKeys,
    stages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
