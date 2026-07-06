# Experiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The experiment ID | [optional] [default to undefined]
**key** | **string** | The experiment key | [default to undefined]
**name** | **string** | The experiment name | [default to undefined]
**description** | **string** | The experiment description | [optional] [default to undefined]
**_maintainerId** | **string** | The ID of the member who maintains this experiment. | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**environmentKey** | **string** |  | [default to undefined]
**methodology** | **string** | The results analysis approach. | [optional] [default to undefined]
**dataSource** | **string** | The source of metric data in order to analyze results. Defaults to \&quot;launchdarkly\&quot; when not provided. | [optional] [default to undefined]
**archivedDate** | **number** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the experiment | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**holdoutId** | **string** | The holdout ID | [optional] [default to undefined]
**currentIteration** | [**IterationRep**](IterationRep.md) |  | [optional] [default to undefined]
**type** | **string** | The experiment type | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**draftIteration** | [**IterationRep**](IterationRep.md) |  | [optional] [default to undefined]
**previousIterations** | [**Array&lt;IterationRep&gt;**](IterationRep.md) | Details on the previous iterations for this experiment. | [optional] [default to undefined]
**analysisConfig** | [**AnalysisConfigRep**](AnalysisConfigRep.md) |  | [optional] [default to undefined]
**mutableFieldsByStatus** | [**MutableFieldsByStatusRep**](MutableFieldsByStatusRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Experiment } from 'launchdarkly-api-typescript';

const instance: Experiment = {
    _id,
    key,
    name,
    description,
    _maintainerId,
    _creationDate,
    environmentKey,
    methodology,
    dataSource,
    archivedDate,
    tags,
    _links,
    holdoutId,
    currentIteration,
    type,
    _access,
    draftIteration,
    previousIterations,
    analysisConfig,
    mutableFieldsByStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
