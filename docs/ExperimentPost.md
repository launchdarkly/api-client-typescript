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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
