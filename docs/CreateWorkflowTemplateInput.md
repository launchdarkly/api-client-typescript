# CreateWorkflowTemplateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**workflowId** | **string** |  | [optional] [default to undefined]
**stages** | [**Array&lt;StageInput&gt;**](StageInput.md) |  | [optional] [default to undefined]
**projectKey** | **string** |  | [optional] [default to undefined]
**environmentKey** | **string** |  | [optional] [default to undefined]
**flagKey** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateWorkflowTemplateInput } from 'launchdarkly-api-typescript';

const instance: CreateWorkflowTemplateInput = {
    key,
    name,
    description,
    workflowId,
    stages,
    projectKey,
    environmentKey,
    flagKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
