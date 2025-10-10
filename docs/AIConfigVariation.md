# AIConfigVariation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**ParentLink**](ParentLink.md) |  | [optional] [default to undefined]
**color** | **string** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**description** | **string** | Returns the description for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**instructions** | **string** | Returns the instructions for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**key** | **string** |  | [default to undefined]
**_id** | **string** |  | [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) |  | [optional] [default to undefined]
**model** | **object** |  | [default to undefined]
**modelConfigKey** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**version** | **number** |  | [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**_archivedAt** | **number** |  | [optional] [default to undefined]
**_publishedAt** | **number** |  | [optional] [default to undefined]
**tools** | [**Array&lt;VariationTool&gt;**](VariationTool.md) |  | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]
**judgingConfigKeys** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariation } from 'launchdarkly-api-typescript';

const instance: AIConfigVariation = {
    _links,
    color,
    comment,
    description,
    instructions,
    key,
    _id,
    messages,
    model,
    modelConfigKey,
    name,
    createdAt,
    version,
    state,
    _archivedAt,
    _publishedAt,
    tools,
    judgeConfiguration,
    judgingConfigKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
