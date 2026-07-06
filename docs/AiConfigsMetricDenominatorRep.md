# AiConfigsMetricDenominatorRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventName** | **string** | The warehouse event column for the denominator | [optional] [default to undefined]
**isNumeric** | **boolean** | Whether the denominator aggregates a numeric value | [optional] [default to undefined]
**unitAggregationType** | **string** | How individual unit values are aggregated for the denominator | [optional] [default to undefined]
**unitAggregationField** | **string** | The column to count distinct values of; required when unitAggregationType is count_distinct | [optional] [default to undefined]
**dataSource** | [**AiConfigsMetricDataSourceRefRep**](AiConfigsMetricDataSourceRefRep.md) |  | [optional] [default to undefined]
**filters** | [**AiConfigsFilter**](AiConfigsFilter.md) |  | [optional] [default to undefined]
**windowStartOffset** | **number** | Start of the measurement window in milliseconds | [optional] [default to undefined]
**windowEndOffset** | **number** | End of the measurement window in milliseconds | [optional] [default to undefined]
**winsorLowerPercentile** | **number** | Lower winsorization percentile in the open interval (0, 100) | [optional] [default to undefined]
**winsorUpperPercentile** | **number** | Upper winsorization percentile in the open interval (0, 100) | [optional] [default to undefined]
**winsorExcludeImputed** | **boolean** | Deprecated and ignored. Use winsorIncludeImputed instead. | [optional] [default to undefined]
**winsorIncludeImputed** | **boolean** | When true, the percentile bound calculation includes imputed zeros | [optional] [default to undefined]

## Example

```typescript
import { AiConfigsMetricDenominatorRep } from 'launchdarkly-api-typescript';

const instance: AiConfigsMetricDenominatorRep = {
    eventName,
    isNumeric,
    unitAggregationType,
    unitAggregationField,
    dataSource,
    filters,
    windowStartOffset,
    windowEndOffset,
    winsorLowerPercentile,
    winsorUpperPercentile,
    winsorExcludeImputed,
    winsorIncludeImputed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
