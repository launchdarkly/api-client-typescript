# TreatmentInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The treatment name | [default to undefined]
**baseline** | **boolean** | Whether this treatment is the baseline to compare other treatments against | [default to undefined]
**allocationPercent** | **string** | The percentage of traffic allocated to this treatment during the iteration | [default to undefined]
**parameters** | [**Array&lt;TreatmentParameterInput&gt;**](TreatmentParameterInput.md) | Details on the flag and variation to use for this treatment | [default to undefined]

## Example

```typescript
import { TreatmentInput } from 'launchdarkly-api-typescript';

const instance: TreatmentInput = {
    name,
    baseline,
    allocationPercent,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
