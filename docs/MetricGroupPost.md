# MetricGroupPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key to reference the metric group | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the metric group | [default to undefined]
**kind** | **string** | The type of the metric group | [default to undefined]
**description** | **string** | Description of the metric group | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this metric group | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the metric group | [default to undefined]
**metrics** | [**Array&lt;MetricInMetricGroupInput&gt;**](MetricInMetricGroupInput.md) | An ordered list of the metrics in this metric group | [default to undefined]

## Example

```typescript
import { MetricGroupPost } from 'launchdarkly-api-typescript';

const instance: MetricGroupPost = {
    key,
    name,
    kind,
    description,
    maintainerId,
    tags,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
