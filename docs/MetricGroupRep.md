# MetricGroupRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this metric group | [default to undefined]
**key** | **string** | A unique key to reference the metric group | [default to undefined]
**name** | **string** | A human-friendly name for the metric group | [default to undefined]
**kind** | **string** | The type of the metric group | [default to undefined]
**description** | **string** | Description of the metric group | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the metric group | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_lastModified** | **number** |  | [default to undefined]
**maintainer** | [**MaintainerRep**](MaintainerRep.md) |  | [default to undefined]
**metrics** | [**Array&lt;MetricInGroupRep&gt;**](MetricInGroupRep.md) | An ordered list of the metrics in this metric group | [default to undefined]
**_version** | **number** | The version of this metric group | [default to undefined]
**experiments** | [**Array&lt;DependentExperimentRep&gt;**](DependentExperimentRep.md) |  | [optional] [default to undefined]
**experimentCount** | **number** | The number of experiments using this metric group | [optional] [default to undefined]
**activeExperimentCount** | **number** | The number of active experiments using this metric group | [optional] [default to undefined]
**activeGuardedRolloutCount** | **number** | The number of active guarded rollouts using this metric group | [optional] [default to undefined]
**totalConnectionsCount** | **number** | The total number of connections using this metric group | [optional] [default to undefined]
**totalActiveConnectionsCount** | **number** | The total number of active connections using this metric group | [optional] [default to undefined]

## Example

```typescript
import { MetricGroupRep } from 'launchdarkly-api-typescript';

const instance: MetricGroupRep = {
    _id,
    key,
    name,
    kind,
    description,
    _links,
    _access,
    tags,
    _creationDate,
    _lastModified,
    maintainer,
    metrics,
    _version,
    experiments,
    experimentCount,
    activeExperimentCount,
    activeGuardedRolloutCount,
    totalConnectionsCount,
    totalActiveConnectionsCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
