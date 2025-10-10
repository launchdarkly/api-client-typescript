# InsightsChartMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indicator** | **string** | Metric indicator tier | [default to undefined]
**value** | **number** | Metric value | [default to undefined]
**unit** | **string** | Metric unit | [default to undefined]
**modifier** | **string** | Metric modifier | [default to undefined]
**tiers** | [**Array&lt;InsightsMetricTierDefinition&gt;**](InsightsMetricTierDefinition.md) | Metric indicator tiers | [default to undefined]

## Example

```typescript
import { InsightsChartMetric } from 'launchdarkly-api-typescript';

const instance: InsightsChartMetric = {
    indicator,
    value,
    unit,
    modifier,
    tiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
