# ToolReference

A usage of an AI tool in a specific AgentControl config variation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiConfigKey** | **string** | The key of the AgentControl config with a variation that references this tool. | [default to undefined]
**aiConfigName** | **string** | The name of the AgentControl config with a variation that references this tool. | [default to undefined]
**variationId** | **string** | The ID of the variation that references this tool. | [default to undefined]
**variationKey** | **string** | The key of the AgentControl config variation that references this tool. | [default to undefined]
**variationName** | **string** | The name of the variation that references this tool. | [default to undefined]
**toolVersion** | **number** | The version of the tool being referenced. | [default to undefined]

## Example

```typescript
import { ToolReference } from 'launchdarkly-api-typescript';

const instance: ToolReference = {
    aiConfigKey,
    aiConfigName,
    variationId,
    variationKey,
    variationName,
    toolVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
