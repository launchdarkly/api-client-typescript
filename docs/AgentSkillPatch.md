# AgentSkillPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human-readable name of the agent skill. | [optional] [default to undefined]
**description** | **string** | Human-readable description of what the agent skill does. | [optional] [default to undefined]
**markdown** | **string** | The verbatim SKILL.md content of the agent skill | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Replaces the tags on the agent skill. Tags can be used in custom role policies. Changing only the tags does not create a new version. | [optional] [default to undefined]

## Example

```typescript
import { AgentSkillPatch } from 'launchdarkly-api-typescript';

const instance: AgentSkillPatch = {
    name,
    description,
    markdown,
    maintainerId,
    maintainerTeamKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
