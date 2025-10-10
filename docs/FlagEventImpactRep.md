# FlagEventImpactRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **string** | The size of the flag event impact. Sizes are defined as: none (0%), small (0-20%), medium (20-80%), large (&gt;80%) | [optional] [default to undefined]
**percentage** | **number** | The percentage of the flag event impact | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**evaluationsSummary** | [**EvaluationsSummary**](EvaluationsSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagEventImpactRep } from 'launchdarkly-api-typescript';

const instance: FlagEventImpactRep = {
    size,
    percentage,
    reason,
    evaluationsSummary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
