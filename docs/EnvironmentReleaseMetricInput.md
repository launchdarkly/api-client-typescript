# EnvironmentReleaseMetricInput

A metric to monitor across every phase of a guarded release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricKey** | **string** |  | [default to undefined]
**autoRollback** | **boolean** | Whether a regression on this metric automatically reverts the release. When &#x60;false&#x60;, a detected regression pauses the release instead: it reports &#x60;waiting&#x60; with reason &#x60;waiting_regression_detected&#x60; and does not advance until the regression is dismissed or the release is stopped.  | [optional] [default to false]
**analysisUnit** | **string** | Key of the context kind to analyze this metric on. Omit it to analyze on the randomization unit. A value must differ from the randomization unit and be one of the metric\&#39;s units. Percentile metrics, ratio metrics, and metrics in a group cannot set it. The value cannot be changed after the release starts.  | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentReleaseMetricInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseMetricInput = {
    metricKey,
    autoRollback,
    analysisUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
