# WorkflowTemplateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**_key** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_ownerId** | **string** |  | [default to undefined]
**_maintainerId** | **string** |  | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**stages** | [**Array&lt;StageOutput&gt;**](StageOutput.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowTemplateOutput } from 'launchdarkly-api-typescript';

const instance: WorkflowTemplateOutput = {
    _id,
    _key,
    name,
    _creationDate,
    _ownerId,
    _maintainerId,
    _links,
    description,
    stages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
