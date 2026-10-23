# ProgressiveReleaseConfig

Configuration for progressive releases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rolloutContextKindKey** | **string** | Context kind key to use as the randomization unit for the rollout | [optional] [default to undefined]
**stages** | [**Array&lt;ReleasePolicyStage&gt;**](ReleasePolicyStage.md) | List of stages. At most 10 stages by default; the server enforces the per-account limit, which is never more than 20. | [optional] [default to undefined]

## Example

```typescript
import { ProgressiveReleaseConfig } from 'launchdarkly-api-typescript';

const instance: ProgressiveReleaseConfig = {
    rolloutContextKindKey,
    stages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
