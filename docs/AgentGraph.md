# AgentGraph

An agent graph representing a directed graph of AI Configs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for the agent graph | [default to undefined]
**name** | **string** | A human-readable name for the agent graph | [default to undefined]
**description** | **string** | A description of the agent graph | [optional] [default to undefined]
**rootConfigKey** | **string** | The AI Config key of the root node | [optional] [default to undefined]
**edges** | [**Array&lt;AgentGraphEdge&gt;**](AgentGraphEdge.md) | The edges in the graph | [optional] [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AgentGraph } from 'launchdarkly-api-typescript';

const instance: AgentGraph = {
    key,
    name,
    description,
    rootConfigKey,
    edges,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
