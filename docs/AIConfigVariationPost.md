# AIConfigVariationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Human-readable description of this variation | [optional] [default to undefined]
**description** | **string** | Returns the description for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**instructions** | **string** | Returns the instructions for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**key** | **string** |  | [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) |  | [default to undefined]
**model** | **object** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**modelConfigKey** | **string** |  | [optional] [default to undefined]
**tools** | [**Array&lt;VariationToolPost&gt;**](VariationToolPost.md) | List of tools to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**toolKeys** | **Array&lt;string&gt;** | List of tool keys to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariationPost } from 'launchdarkly-api-typescript';

const instance: AIConfigVariationPost = {
    comment,
    description,
    instructions,
    key,
    messages,
    model,
    name,
    modelConfigKey,
    tools,
    toolKeys,
    judgeConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
