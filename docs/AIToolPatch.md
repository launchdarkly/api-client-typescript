# AIToolPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**description** | **string** | A description of the tool | [optional] [default to undefined]
**schema** | **object** | JSON Schema defining the tool\&#39;s parameters for LLM consumption | [optional] [default to undefined]
**customParameters** | **object** | Custom metadata and configuration for application-level use (not sent to LLM) | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Replaces the tags on the tool. Tags can be used in custom role policies. | [optional] [default to undefined]

## Example

```typescript
import { AIToolPatch } from 'launchdarkly-api-typescript';

const instance: AIToolPatch = {
    maintainerId,
    maintainerTeamKey,
    description,
    schema,
    customParameters,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
