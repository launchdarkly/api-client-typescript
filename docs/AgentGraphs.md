# AgentGraphs

A collection of agent graphs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**PaginatedLinks**](PaginatedLinks.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;AgentGraph&gt;**](AgentGraph.md) | The items on this page | [default to undefined]
**totalCount** | **number** | The total number of items | [default to undefined]

## Example

```typescript
import { AgentGraphs } from 'launchdarkly-api-typescript';

const instance: AgentGraphs = {
    _links,
    items,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
