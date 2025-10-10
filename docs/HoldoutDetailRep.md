# HoldoutDetailRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**holdoutAmount** | **string** | The percentage of traffic allocated to this holdout. | [default to undefined]
**isDirty** | **boolean** | Indicates if the holdout experiment is running and if any related experiments are running. | [optional] [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]
**baseExperiment** | [**Experiment**](Experiment.md) |  | [default to undefined]
**relatedExperiments** | [**Array&lt;Experiment&gt;**](Experiment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HoldoutDetailRep } from 'launchdarkly-api-typescript';

const instance: HoldoutDetailRep = {
    _id,
    status,
    description,
    holdoutAmount,
    isDirty,
    createdAt,
    updatedAt,
    baseExperiment,
    relatedExperiments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
