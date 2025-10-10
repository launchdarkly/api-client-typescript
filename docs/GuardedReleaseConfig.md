# GuardedReleaseConfig

Configuration for guarded releases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minSampleSize** | **number** | The minimum number of samples required to make a decision | [optional] [default to undefined]
**rollbackOnRegression** | **boolean** | Whether to roll back on regression | [default to undefined]

## Example

```typescript
import { GuardedReleaseConfig } from 'launchdarkly-api-typescript';

const instance: GuardedReleaseConfig = {
    minSampleSize,
    rollbackOnRegression,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
