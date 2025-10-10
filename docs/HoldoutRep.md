# HoldoutRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**holdoutAmount** | **string** | The percentage of traffic allocated to this holdout. | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]
**baseExperiment** | [**Experiment**](Experiment.md) |  | [default to undefined]
**experiments** | [**Array&lt;RelatedExperimentRep&gt;**](RelatedExperimentRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HoldoutRep } from 'launchdarkly-api-typescript';

const instance: HoldoutRep = {
    _id,
    status,
    description,
    holdoutAmount,
    createdAt,
    updatedAt,
    baseExperiment,
    experiments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
