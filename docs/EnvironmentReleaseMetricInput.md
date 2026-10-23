# EnvironmentReleaseMetricInput

A metric to monitor across every phase of a guarded release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricKey** | **string** |  | [default to undefined]
**autoRollback** | **boolean** | Whether a regression on this metric automatically reverts the release. When &#x60;false&#x60;, a detected regression pauses the release instead: it reports &#x60;waiting&#x60; with reason &#x60;waiting_regression_detected&#x60; and does not advance until the regression is dismissed or the release is stopped.  | [optional] [default to false]

## Example

```typescript
import { EnvironmentReleaseMetricInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseMetricInput = {
    metricKey,
    autoRollback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
