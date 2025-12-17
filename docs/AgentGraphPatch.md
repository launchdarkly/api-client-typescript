# AgentGraphPatch

Request body for updating an agent graph. If rootConfigKey or edges are present, both must be present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-readable name for the agent graph | [optional] [default to undefined]
**description** | **string** | A description of the agent graph | [optional] [default to undefined]
**rootConfigKey** | **string** | The AI Config key of the root node. If present, edges must also be present. | [optional] [default to undefined]
**edges** | [**Array&lt;AgentGraphEdge&gt;**](AgentGraphEdge.md) | The edges in the graph. If present, rootConfigKey must also be present. Replaces all existing edges. | [optional] [default to undefined]

## Example

```typescript
import { AgentGraphPatch } from 'launchdarkly-api-typescript';

const instance: AgentGraphPatch = {
    name,
    description,
    rootConfigKey,
    edges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
