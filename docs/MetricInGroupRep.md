# MetricInGroupRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The metric key | [default to undefined]
**_versionId** | **string** | The version ID of the metric | [optional] [default to undefined]
**name** | **string** | The metric name | [default to undefined]
**kind** | **string** | The kind of event the metric tracks | [default to undefined]
**isNumeric** | **boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] [default to undefined]
**unitAggregationType** | **string** | The type of unit aggregation to use for the metric | [optional] [default to undefined]
**eventKey** | **string** | The event key sent with the metric. Only relevant for custom metrics. | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**nameInGroup** | **string** | Name of the metric when used within the associated metric group. Can be different from the original name of the metric. Required if and only if the metric group is a &lt;code&gt;funnel&lt;/code&gt;. | [optional] [default to undefined]
**randomizationUnits** | **Array&lt;string&gt;** | The randomization units for the metric | [optional] [default to undefined]

## Example

```typescript
import { MetricInGroupRep } from 'launchdarkly-api-typescript';

const instance: MetricInGroupRep = {
    key,
    _versionId,
    name,
    kind,
    isNumeric,
    unitAggregationType,
    eventKey,
    _links,
    nameInGroup,
    randomizationUnits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
