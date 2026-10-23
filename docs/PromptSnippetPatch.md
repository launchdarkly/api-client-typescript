# PromptSnippetPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-readable name for the prompt snippet | [optional] [default to undefined]
**description** | **string** | A description of the prompt snippet | [optional] [default to undefined]
**text** | **string** | The text content of the prompt snippet | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [optional] [default to undefined]

## Example

```typescript
import { PromptSnippetPatch } from 'launchdarkly-api-typescript';

const instance: PromptSnippetPatch = {
    name,
    description,
    text,
    maintainerId,
    maintainerTeamKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
