# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The ID of this project | [default to undefined]
**key** | **string** | The key of this project | [default to undefined]
**includeInSnippetByDefault** | **boolean** | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default | [default to undefined]
**defaultClientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the project | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags for the project | [default to undefined]
**defaultReleasePipelineKey** | **string** | The key of the default release pipeline for this project | [optional] [default to undefined]
**environments** | [**Environments**](Environments.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Project } from 'launchdarkly-api-typescript';

const instance: Project = {
    _links,
    _id,
    key,
    includeInSnippetByDefault,
    defaultClientSideAvailability,
    name,
    _access,
    tags,
    defaultReleasePipelineKey,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
