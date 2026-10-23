# AIConfigTargetingEnvironmentFallthroughRollout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucketBy** | **string** | The context attribute used to bucket contexts | [optional] [default to undefined]
**contextKind** | **string** | The context kind used to bucket contexts | [default to undefined]
**experimentAllocation** | [**AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation**](AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation.md) |  | [optional] [default to undefined]
**seed** | **number** | The seed used for bucketing | [optional] [default to undefined]
**variations** | [**Array&lt;AIConfigTargetingEnvironmentFallthroughRolloutVariation&gt;**](AIConfigTargetingEnvironmentFallthroughRolloutVariation.md) | The variations and their weights | [default to undefined]

## Example

```typescript
import { AIConfigTargetingEnvironmentFallthroughRollout } from 'launchdarkly-api-typescript';

const instance: AIConfigTargetingEnvironmentFallthroughRollout = {
    bucketBy,
    contextKind,
    experimentAllocation,
    seed,
    variations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
