# AgentGraphPost

Request body for creating an agent graph

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for the agent graph | [default to undefined]
**name** | **string** | A human-readable name for the agent graph | [default to undefined]
**description** | **string** | A description of the agent graph | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this agent graph | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this agent graph | [optional] [default to undefined]
**rootConfigKey** | **string** | The AI Config key of the root node. A missing root implies a newly created graph with metadata only. | [optional] [default to undefined]
**edges** | [**Array&lt;AgentGraphEdgePost&gt;**](AgentGraphEdgePost.md) | The edges in the graph. If edges or rootConfigKey is present, both must be present. | [optional] [default to undefined]

## Example

```typescript
import { AgentGraphPost } from 'launchdarkly-api-typescript';

const instance: AgentGraphPost = {
    key,
    name,
    description,
    maintainerId,
    maintainerTeamKey,
    rootConfigKey,
    edges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
