# IterationRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The iteration ID | [optional] [default to undefined]
**hypothesis** | **string** | The expected outcome of this experiment | [default to undefined]
**status** | **string** | The status of the iteration: &lt;code&gt;not_started&lt;/code&gt;, &lt;code&gt;running&lt;/code&gt;, &lt;code&gt;stopped&lt;/code&gt; | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**startedAt** | **number** |  | [optional] [default to undefined]
**endedAt** | **number** |  | [optional] [default to undefined]
**winningTreatmentId** | **string** | The ID of the treatment chosen when the experiment stopped | [optional] [default to undefined]
**winningReason** | **string** | The reason you stopped the experiment | [optional] [default to undefined]
**canReshuffleTraffic** | **boolean** | Whether the experiment may reassign traffic to different variations when the experiment audience changes (true) or must keep all traffic assigned to its initial variation (false). | [optional] [default to undefined]
**flags** | [**{ [key: string]: FlagRep; }**](FlagRep.md) | Details on the flag used in this experiment | [optional] [default to undefined]
**reallocationFrequencyMillis** | **number** | The cadence (in milliseconds) to update the allocation. Only present for multi-armed bandits. | [optional] [default to undefined]
**version** | **number** | The current version that the iteration is on | [optional] [default to undefined]
**primaryMetric** | [**DependentMetricOrMetricGroupRep**](DependentMetricOrMetricGroupRep.md) |  | [optional] [default to undefined]
**primarySingleMetric** | [**MetricV2Rep**](MetricV2Rep.md) |  | [optional] [default to undefined]
**primaryFunnel** | [**DependentMetricGroupRepWithMetrics**](DependentMetricGroupRepWithMetrics.md) |  | [optional] [default to undefined]
**randomizationUnit** | **string** | The unit of randomization for this iteration | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | The available attribute filters for this iteration | [optional] [default to undefined]
**treatments** | [**Array&lt;TreatmentRep&gt;**](TreatmentRep.md) | Details on the variations you are testing in the experiment | [optional] [default to undefined]
**secondaryMetrics** | [**Array&lt;MetricV2Rep&gt;**](MetricV2Rep.md) | Deprecated, use &lt;code&gt;metrics&lt;/code&gt; instead. Details on the secondary metrics for this experiment. | [optional] [default to undefined]
**metrics** | [**Array&lt;DependentMetricOrMetricGroupRep&gt;**](DependentMetricOrMetricGroupRep.md) | Details on the metrics for this experiment | [optional] [default to undefined]
**layerSnapshot** | [**LayerSnapshotRep**](LayerSnapshotRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IterationRep } from 'launchdarkly-api-typescript';

const instance: IterationRep = {
    _id,
    hypothesis,
    status,
    createdAt,
    startedAt,
    endedAt,
    winningTreatmentId,
    winningReason,
    canReshuffleTraffic,
    flags,
    reallocationFrequencyMillis,
    version,
    primaryMetric,
    primarySingleMetric,
    primaryFunnel,
    randomizationUnit,
    attributes,
    treatments,
    secondaryMetrics,
    metrics,
    layerSnapshot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
