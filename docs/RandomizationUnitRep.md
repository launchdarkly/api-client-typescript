# RandomizationUnitRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**randomizationUnit** | **string** | The unit of randomization. Defaults to user. | [optional] [default to undefined]
**_default** | **boolean** | Whether this randomization unit is the default for experiments | [optional] [default to undefined]
**_hidden** | **boolean** |  | [optional] [default to undefined]
**_displayName** | **string** | The display name for the randomization unit, displayed in the LaunchDarkly user interface. | [optional] [default to undefined]

## Example

```typescript
import { RandomizationUnitRep } from 'launchdarkly-api-typescript';

const instance: RandomizationUnitRep = {
    randomizationUnit,
    _default,
    _hidden,
    _displayName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
