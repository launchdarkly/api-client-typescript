# AgentGraphEdgePost

An edge in an agent graph connecting two AI Configs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for this edge within the graph | [default to undefined]
**sourceConfig** | **string** | The AI Config key that is the source of this edge | [default to undefined]
**targetConfig** | **string** | The AI Config key that is the target of this edge | [default to undefined]
**handoff** | **object** | The handoff options from the source AI Config to the target AI Config | [optional] [default to undefined]

## Example

```typescript
import { AgentGraphEdgePost } from 'launchdarkly-api-typescript';

const instance: AgentGraphEdgePost = {
    key,
    sourceConfig,
    targetConfig,
    handoff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
