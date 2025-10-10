# ReleaseGuardianConfigurationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitoringWindowMilliseconds** | **number** | The monitoring window in milliseconds | [optional] [default to undefined]
**rolloutWeight** | **number** | The rollout weight | [optional] [default to undefined]
**rollbackOnRegression** | **boolean** | Whether or not to rollback on regression | [optional] [default to undefined]
**randomizationUnit** | **string** | The randomization unit for the measured rollout | [optional] [default to undefined]

## Example

```typescript
import { ReleaseGuardianConfigurationInput } from 'launchdarkly-api-typescript';

const instance: ReleaseGuardianConfigurationInput = {
    monitoringWindowMilliseconds,
    rolloutWeight,
    rollbackOnRegression,
    randomizationUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
