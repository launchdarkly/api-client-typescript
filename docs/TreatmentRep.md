# TreatmentRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The treatment ID. This is the variation ID from the flag. | [optional] [default to undefined]
**name** | **string** | The treatment name. This is the variation name from the flag. | [default to undefined]
**allocationPercent** | **string** | The percentage of traffic allocated to this treatment during the iteration | [default to undefined]
**baseline** | **boolean** | Whether this treatment is the baseline to compare other treatments against | [optional] [default to undefined]
**parameters** | [**Array&lt;ParameterRep&gt;**](ParameterRep.md) | Details on the flag and variation used for this treatment | [optional] [default to undefined]

## Example

```typescript
import { TreatmentRep } from 'launchdarkly-api-typescript';

const instance: TreatmentRep = {
    _id,
    name,
    allocationPercent,
    baseline,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
