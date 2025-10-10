# AIConfigVariationPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Human-readable description of what this patch changes | [optional] [default to undefined]
**description** | **string** | Description for agent when AI Config is in agent mode. | [optional] [default to undefined]
**instructions** | **string** | Instructions for agent when AI Config is in agent mode. | [optional] [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) |  | [optional] [default to undefined]
**model** | **object** |  | [optional] [default to undefined]
**modelConfigKey** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**published** | **boolean** |  | [optional] [default to undefined]
**state** | **string** | One of \&#39;archived\&#39;, \&#39;published\&#39; | [optional] [default to undefined]
**tools** | [**Array&lt;VariationToolPost&gt;**](VariationToolPost.md) | List of tools to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**toolKeys** | **Array&lt;string&gt;** | List of tool keys to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariationPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigVariationPatch = {
    comment,
    description,
    instructions,
    messages,
    model,
    modelConfigKey,
    name,
    published,
    state,
    tools,
    toolKeys,
    judgeConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
