# AgentGraphEdge

An edge in an agent graph connecting two configs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key for this edge within the graph | [default to undefined]
**sourceConfig** | **string** | The config key that is the source of this edge | [default to undefined]
**targetConfig** | **string** | The config key that is the target of this edge | [default to undefined]
**handoff** | **object** | The handoff options from the source config to the target config | [optional] [default to undefined]

## Example

```typescript
import { AgentGraphEdge } from 'launchdarkly-api-typescript';

const instance: AgentGraphEdge = {
    key,
    sourceConfig,
    targetConfig,
    handoff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
