# BooleanFlagDefaults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trueDisplayName** | **string** | The display name for the true variation, displayed in the LaunchDarkly user interface | [default to undefined]
**falseDisplayName** | **string** | The display name for the false variation, displayed in the LaunchDarkly user interface | [default to undefined]
**trueDescription** | **string** | The description for the true variation | [default to undefined]
**falseDescription** | **string** | The description for the false variation | [default to undefined]
**onVariation** | **number** | The variation index of the flag variation to use for the default targeting behavior when a flag\&#39;s targeting is on and the target did not match any rules | [default to undefined]
**offVariation** | **number** | The variation index of the flag variation to use for the default targeting behavior when a flag\&#39;s targeting is off | [default to undefined]

## Example

```typescript
import { BooleanFlagDefaults } from 'launchdarkly-api-typescript';

const instance: BooleanFlagDefaults = {
    trueDisplayName,
    falseDisplayName,
    trueDescription,
    falseDescription,
    onVariation,
    offVariation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
