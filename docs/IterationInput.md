# IterationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hypothesis** | **string** | The expected outcome of this experiment | [default to undefined]
**canReshuffleTraffic** | **boolean** | Whether to allow the experiment to reassign traffic to different variations when you increase or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its initial variation (false). Defaults to true. | [optional] [default to undefined]
**metrics** | [**Array&lt;MetricInput&gt;**](MetricInput.md) |  | [default to undefined]
**primarySingleMetricKey** | **string** | The key of the primary metric for this experiment. Either &lt;code&gt;primarySingleMetricKey&lt;/code&gt; or &lt;code&gt;primaryFunnelKey&lt;/code&gt; must be present. | [optional] [default to undefined]
**primaryFunnelKey** | **string** | The key of the primary funnel group for this experiment. Either &lt;code&gt;primarySingleMetricKey&lt;/code&gt; or &lt;code&gt;primaryFunnelKey&lt;/code&gt; must be present. | [optional] [default to undefined]
**treatments** | [**Array&lt;TreatmentInput&gt;**](TreatmentInput.md) |  | [default to undefined]
**flags** | [**{ [key: string]: FlagInput; }**](FlagInput.md) |  | [default to undefined]
**randomizationUnit** | **string** | The unit of randomization for this iteration. Defaults to user. | [optional] [default to undefined]
**covarianceId** | **string** | The ID of the covariance CSV | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | The attributes that this iteration\&#39;s results can be sliced by | [optional] [default to undefined]

## Example

```typescript
import { IterationInput } from 'launchdarkly-api-typescript';

const instance: IterationInput = {
    hypothesis,
    canReshuffleTraffic,
    metrics,
    primarySingleMetricKey,
    primaryFunnelKey,
    treatments,
    flags,
    randomizationUnit,
    covarianceId,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
