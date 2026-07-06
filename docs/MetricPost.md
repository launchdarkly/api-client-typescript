# MetricPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key to reference the metric | [default to undefined]
**name** | **string** | A human-friendly name for the metric | [optional] [default to undefined]
**description** | **string** | Description of the metric | [optional] [default to undefined]
**kind** | **string** | The kind of event your metric will track | [default to undefined]
**selector** | **string** | One or more CSS selectors. Required for click metrics only. | [optional] [default to undefined]
**urls** | [**Array&lt;UrlPost&gt;**](UrlPost.md) | One or more target URLs. Required for click and pageview metrics only. | [optional] [default to undefined]
**isNumeric** | **boolean** | Whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). Required for custom and trace metrics only. | [optional] [default to undefined]
**unit** | **string** | The unit of measure. Applicable for numeric custom and trace metrics only. | [optional] [default to undefined]
**eventKey** | **string** | The event key to use in your code. Required for custom conversion/binary and custom numeric metrics only. | [optional] [default to undefined]
**successCriteria** | **string** | Success criteria. Required for custom and trace numeric metrics, optional for custom and trace conversion metrics. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the metric | [optional] [default to undefined]
**randomizationUnits** | **Array&lt;string&gt;** | Deprecated, use &lt;code&gt;analysisUnits&lt;/code&gt; instead. | [optional] [default to undefined]
**analysisUnits** | **Array&lt;string&gt;** | An array of analysis units allowed for this metric. | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this metric | [optional] [default to undefined]
**unitAggregationType** | **string** | The method by which multiple unit event values are aggregated | [optional] [default to undefined]
**analysisType** | **string** | The method for analyzing metric events | [optional] [default to undefined]
**percentileValue** | **number** | The percentile for the analysis method. An integer denoting the target percentile between 0 and 100. Required when &lt;code&gt;analysisType&lt;/code&gt; is &lt;code&gt;percentile&lt;/code&gt;. | [optional] [default to undefined]
**eventDefault** | [**MetricEventDefaultRep**](MetricEventDefaultRep.md) |  | [optional] [default to undefined]
**dataSource** | [**MetricDataSourceRefRep**](MetricDataSourceRefRep.md) |  | [optional] [default to undefined]
**filters** | [**EventFilter**](EventFilter.md) |  | [optional] [default to undefined]
**windowStartOffset** | **number** | Not yet implemented - The start of the measurement window, in milliseconds relative to the unit\&#39;s first exposure to a flag variation | [optional] [default to undefined]
**windowEndOffset** | **number** | Not yet implemented - The end of the measurement window, in milliseconds relative to the unit\&#39;s first exposure to a flag variation | [optional] [default to undefined]
**winsorLowerPercentile** | **number** | Lower winsorization percentile, expressed as a percent in the open interval (0, 100). When both bounds are set, defines a two-sided clamp range. Otherwise lower-only winsorization. | [optional] [default to undefined]
**winsorUpperPercentile** | **number** | Upper winsorization percentile, expressed as a percent in the open interval (0, 100). When both bounds are set, must be greater than winsorLowerPercentile. | [optional] [default to undefined]
**winsorExcludeImputed** | **boolean** | Deprecated and ignored. Use winsorIncludeImputed instead. | [optional] [default to undefined]
**winsorIncludeImputed** | **boolean** | When true, the percentile bound calculation includes imputed zeros. Only meaningful when at least one bound is set and the metric includes units that didn\&#39;t send events. | [optional] [default to undefined]
**traceQuery** | **string** | The trace query to use for the metric. Required for trace metrics. | [optional] [default to undefined]
**traceValueLocation** | **string** | The location in the trace to use for numeric values. Required for numeric trace metrics. | [optional] [default to undefined]
**unitAggregationField** | **string** | The warehouse column to use for counting distinct values. Required when the unitAggregationType is count_distinct. | [optional] [default to undefined]
**denominator** | [**DenominatorPost**](DenominatorPost.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MetricPost } from 'launchdarkly-api-typescript';

const instance: MetricPost = {
    key,
    name,
    description,
    kind,
    selector,
    urls,
    isNumeric,
    unit,
    eventKey,
    successCriteria,
    tags,
    randomizationUnits,
    analysisUnits,
    maintainerId,
    unitAggregationType,
    analysisType,
    percentileValue,
    eventDefault,
    dataSource,
    filters,
    windowStartOffset,
    windowEndOffset,
    winsorLowerPercentile,
    winsorUpperPercentile,
    winsorExcludeImputed,
    winsorIncludeImputed,
    traceQuery,
    traceValueLocation,
    unitAggregationField,
    denominator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
