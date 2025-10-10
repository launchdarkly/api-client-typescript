# CustomWorkflowOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of the workflow | [default to undefined]
**_version** | **number** | The version of the workflow | [default to undefined]
**_conflicts** | [**Array&lt;ConflictOutput&gt;**](ConflictOutput.md) | Any conflicts that are present in the workflow stages | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_maintainerId** | **string** | The member ID of the maintainer of the workflow. Defaults to the workflow creator. | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**name** | **string** | The name of the workflow | [default to undefined]
**description** | **string** | A brief description of the workflow | [optional] [default to undefined]
**kind** | **string** | The kind of workflow | [optional] [default to undefined]
**stages** | [**Array&lt;StageOutput&gt;**](StageOutput.md) | The stages that make up the workflow. Each stage contains conditions and actions. | [optional] [default to undefined]
**_execution** | [**ExecutionOutput**](ExecutionOutput.md) |  | [default to undefined]
**meta** | [**WorkflowTemplateMetadata**](WorkflowTemplateMetadata.md) |  | [optional] [default to undefined]
**templateKey** | **string** | For workflows being created from a workflow template, this value is the template\&#39;s key | [optional] [default to undefined]

## Example

```typescript
import { CustomWorkflowOutput } from 'launchdarkly-api-typescript';

const instance: CustomWorkflowOutput = {
    _id,
    _version,
    _conflicts,
    _creationDate,
    _maintainerId,
    _links,
    name,
    description,
    kind,
    stages,
    _execution,
    meta,
    templateKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
