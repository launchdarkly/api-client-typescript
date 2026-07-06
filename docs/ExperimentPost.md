# ExperimentPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The experiment name | [default to undefined]
**description** | **string** | The experiment description | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this experiment | [optional] [default to undefined]
**key** | **string** | The experiment key | [default to undefined]
**iteration** | [**IterationInput**](IterationInput.md) |  | [default to undefined]
**holdoutId** | **string** | The ID of the holdout | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the experiment | [optional] [default to undefined]
**methodology** | **string** | The results analysis approach. | [optional] [default to undefined]
**analysisConfig** | [**AnalysisConfigInput**](AnalysisConfigInput.md) |  | [optional] [default to undefined]
**dataSource** | **string** | The source of metric data in order to analyze results. Defaults to \&quot;launchdarkly\&quot; when not provided. | [optional] [default to undefined]
**type** | **string** | The type of experiment. | [optional] [default to undefined]

## Example

```typescript
import { ExperimentPost } from 'launchdarkly-api-typescript';

const instance: ExperimentPost = {
    name,
    description,
    maintainerId,
    key,
    iteration,
    holdoutId,
    tags,
    methodology,
    analysisConfig,
    dataSource,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
