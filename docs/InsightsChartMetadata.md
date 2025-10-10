# InsightsChartMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **{ [key: string]: any; }** |  | [default to undefined]
**name** | **string** | Name of the chart | [optional] [default to undefined]
**metrics** | [**{ [key: string]: InsightsChartMetric; }**](InsightsChartMetric.md) |  | [optional] [default to undefined]
**xAxis** | [**InsightsChartSeriesMetadataAxis**](InsightsChartSeriesMetadataAxis.md) |  | [default to undefined]
**yAxis** | [**InsightsChartSeriesMetadataAxis**](InsightsChartSeriesMetadataAxis.md) |  | [default to undefined]

## Example

```typescript
import { InsightsChartMetadata } from 'launchdarkly-api-typescript';

const instance: InsightsChartMetadata = {
    summary,
    name,
    metrics,
    xAxis,
    yAxis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
