# DependentMetricOrMetricGroupRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key to reference the metric or metric group | [default to undefined]
**_versionId** | **string** | The version ID of the metric or metric group | [default to undefined]
**name** | **string** | A human-friendly name for the metric or metric group | [default to undefined]
**kind** | **string** | If this is a metric, then it represents the kind of event the metric tracks. If this is a metric group, then it represents the group type | [default to undefined]
**isNumeric** | **boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] [default to undefined]
**eventKey** | **string** | The event key sent with the metric. Only relevant for custom metrics. | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**isGroup** | **boolean** | Whether this is a metric group or a metric | [default to undefined]
**metrics** | [**Array&lt;MetricInGroupRep&gt;**](MetricInGroupRep.md) | An ordered list of the metrics in this metric group | [optional] [default to undefined]

## Example

```typescript
import { DependentMetricOrMetricGroupRep } from 'launchdarkly-api-typescript';

const instance: DependentMetricOrMetricGroupRep = {
    key,
    _versionId,
    name,
    kind,
    isNumeric,
    eventKey,
    _links,
    isGroup,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
