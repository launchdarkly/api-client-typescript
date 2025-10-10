# Rollout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variations** | [**Array&lt;WeightedVariation&gt;**](WeightedVariation.md) |  | [default to undefined]
**experimentAllocation** | [**ExperimentAllocationRep**](ExperimentAllocationRep.md) |  | [optional] [default to undefined]
**seed** | **number** |  | [optional] [default to undefined]
**bucketBy** | **string** |  | [optional] [default to undefined]
**contextKind** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Rollout } from 'launchdarkly-api-typescript';

const instance: Rollout = {
    variations,
    experimentAllocation,
    seed,
    bucketBy,
    contextKind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
