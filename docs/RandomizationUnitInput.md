# RandomizationUnitInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**randomizationUnit** | **string** | The unit of randomization. Must match the key of an existing context kind in this project. | [default to undefined]
**_default** | **boolean** | If true, any experiment iterations created within this project will default to using this randomization unit. A project can only have one default randomization unit. | [optional] [default to undefined]
**standardRandomizationUnit** | **string** | (deprecated) This field is deprecated and will be removed. Use randomizationUnit instead. | [optional] [default to undefined]

## Example

```typescript
import { RandomizationUnitInput } from 'launchdarkly-api-typescript';

const instance: RandomizationUnitInput = {
    randomizationUnit,
    _default,
    standardRandomizationUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
