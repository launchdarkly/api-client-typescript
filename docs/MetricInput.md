# MetricInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The metric key | [default to undefined]
**isGroup** | **boolean** | Whether this is a metric group (true) or a metric (false). Defaults to false | [optional] [default to undefined]
**primary** | **boolean** | Deprecated, use &lt;code&gt;primarySingleMetricKey&lt;/code&gt; and &lt;code&gt;primaryFunnelKey&lt;/code&gt;. Whether this is a primary metric (true) or a secondary metric (false) | [optional] [default to undefined]

## Example

```typescript
import { MetricInput } from 'launchdarkly-api-typescript';

const instance: MetricInput = {
    key,
    isGroup,
    primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
