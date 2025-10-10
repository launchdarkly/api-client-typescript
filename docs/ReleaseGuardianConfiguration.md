# ReleaseGuardianConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitoringWindowMilliseconds** | **number** | The monitoring window in milliseconds | [default to undefined]
**rolloutWeight** | **number** | The rollout weight percentage | [default to undefined]
**rollbackOnRegression** | **boolean** | Whether or not to roll back on regression | [default to undefined]
**randomizationUnit** | **string** | The randomization unit for the measured rollout | [optional] [default to undefined]

## Example

```typescript
import { ReleaseGuardianConfiguration } from 'launchdarkly-api-typescript';

const instance: ReleaseGuardianConfiguration = {
    monitoringWindowMilliseconds,
    rolloutWeight,
    rollbackOnRegression,
    randomizationUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
