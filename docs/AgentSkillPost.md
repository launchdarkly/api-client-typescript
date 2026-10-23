# AgentSkillPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for the agent skill. The key must match &#x60;^[a-z0-9][a-z0-9-]*$&#x60;: it can only contain lowercase letters, numbers, or \&#39;-\&#39;, and must start with a lowercase letter or number. The key can be at most 64 characters, and Windows reserved file names (&#x60;con&#x60;, &#x60;prn&#x60;, &#x60;aux&#x60;, &#x60;nul&#x60;, &#x60;com0&#x60;-&#x60;com9&#x60;, and &#x60;lpt0&#x60;-&#x60;lpt9&#x60;) aren\&#39;t allowed. | [default to undefined]
**name** | **string** | Human-readable name of the agent skill. | [default to undefined]
**description** | **string** | Human-readable description of what the agent skill does. | [optional] [default to undefined]
**markdown** | **string** | The verbatim SKILL.md content of the agent skill | [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the agent skill. Tags can be used in custom role policies. | [optional] [default to undefined]

## Example

```typescript
import { AgentSkillPost } from 'launchdarkly-api-typescript';

const instance: AgentSkillPost = {
    key,
    name,
    description,
    markdown,
    maintainerId,
    maintainerTeamKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
