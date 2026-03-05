# AIToolPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**maintainerId** | **string** |  | [optional] [default to undefined]
**maintainerTeamKey** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**schema** | **object** | JSON Schema defining the tool\&#39;s parameters for LLM consumption | [default to undefined]
**customParameters** | **object** | Custom metadata and configuration for application-level use (not sent to LLM) | [optional] [default to undefined]

## Example

```typescript
import { AIToolPost } from 'launchdarkly-api-typescript';

const instance: AIToolPost = {
    key,
    maintainerId,
    maintainerTeamKey,
    description,
    schema,
    customParameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
