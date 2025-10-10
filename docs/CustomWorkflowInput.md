# CustomWorkflowInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintainerId** | **string** |  | [optional] [default to undefined]
**name** | **string** | The workflow name | [default to undefined]
**description** | **string** | The workflow description | [optional] [default to undefined]
**stages** | [**Array&lt;StageInput&gt;**](StageInput.md) | A list of the workflow stages | [optional] [default to undefined]
**templateKey** | **string** | The template key | [optional] [default to undefined]

## Example

```typescript
import { CustomWorkflowInput } from 'launchdarkly-api-typescript';

const instance: CustomWorkflowInput = {
    maintainerId,
    name,
    description,
    stages,
    templateKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
