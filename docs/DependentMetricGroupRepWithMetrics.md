# DependentMetricGroupRepWithMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key to reference the metric group | [default to undefined]
**name** | **string** | A human-friendly name for the metric group | [default to undefined]
**kind** | **string** | The type of the metric group | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**metrics** | [**Array&lt;MetricInGroupRep&gt;**](MetricInGroupRep.md) | The metrics in the metric group | [optional] [default to undefined]

## Example

```typescript
import { DependentMetricGroupRepWithMetrics } from 'launchdarkly-api-typescript';

const instance: DependentMetricGroupRepWithMetrics = {
    key,
    name,
    kind,
    _links,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
