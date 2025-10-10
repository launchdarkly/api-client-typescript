# InsightsMetricScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **number** | The score for the metric | [default to undefined]
**aggregateOf** | **Array&lt;string&gt;** | The keys of the metrics that were aggregated to calculate this score | [optional] [default to undefined]
**diffVsLastPeriod** | **number** |  | [optional] [default to undefined]
**indicator** | **string** |  | [default to undefined]
**indicatorRange** | [**InsightsMetricIndicatorRange**](InsightsMetricIndicatorRange.md) |  | [default to undefined]
**lastPeriod** | [**InsightsMetricScore**](InsightsMetricScore.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InsightsMetricScore } from 'launchdarkly-api-typescript';

const instance: InsightsMetricScore = {
    score,
    aggregateOf,
    diffVsLastPeriod,
    indicator,
    indicatorRange,
    lastPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
