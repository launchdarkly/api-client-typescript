# PromptSnippetPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for the prompt snippet | [default to undefined]
**name** | **string** | A human-readable name for the prompt snippet | [default to undefined]
**description** | **string** | A description of the prompt snippet | [optional] [default to undefined]
**text** | **string** | The text content of the prompt snippet | [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [optional] [default to undefined]

## Example

```typescript
import { PromptSnippetPost } from 'launchdarkly-api-typescript';

const instance: PromptSnippetPost = {
    key,
    name,
    description,
    text,
    maintainerId,
    maintainerTeamKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
