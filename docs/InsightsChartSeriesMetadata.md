# InsightsChartSeriesMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the series | [default to undefined]
**count** | **number** | Aggregate count of the series values | [optional] [default to undefined]
**bounds** | [**Array&lt;InsightsChartBounds&gt;**](InsightsChartBounds.md) | Bounds for the series data | [optional] [default to undefined]

## Example

```typescript
import { InsightsChartSeriesMetadata } from 'launchdarkly-api-typescript';

const instance: InsightsChartSeriesMetadata = {
    name,
    count,
    bounds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
