# WorkflowTemplateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**path** | **string** | The path of the property to parameterize, relative to its parent condition or instruction | [optional] [default to undefined]
**_default** | [**ParameterDefault**](ParameterDefault.md) |  | [optional] [default to undefined]
**valid** | **boolean** | Whether the default value is valid for the target flag and environment | [optional] [default to undefined]

## Example

```typescript
import { WorkflowTemplateParameter } from 'launchdarkly-api-typescript';

const instance: WorkflowTemplateParameter = {
    _id,
    path,
    _default,
    valid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
