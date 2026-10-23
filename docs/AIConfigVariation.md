# AIConfigVariation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**ParentLink**](ParentLink.md) |  | [optional] [default to undefined]
**color** | **string** | The color used for this variation in the UI | [optional] [default to undefined]
**classifiers** | [**Array&lt;Classifier&gt;**](Classifier.md) | Classifier rules for a judge variation. When this array is non-empty, messages must be empty.  | [optional] [default to undefined]
**comment** | **string** | A comment describing this version of the variation | [optional] [default to undefined]
**description** | **string** | Returns the description for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**instructions** | **string** | Returns the instructions for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**key** | **string** | The variation key | [default to undefined]
**_id** | **string** | The variation ID | [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) | The prompt messages for this variation | [optional] [default to undefined]
**model** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [default to undefined]
**modelConfigKey** | **string** | The key of the model config that this variation uses, not the provider model ID. Absent when the variation does not use a model config.  | [optional] [default to undefined]
**modelConfigVersion** | **number** | The version of the model config that this variation is pinned to, when it references a custom model config. Absent when the variation does not reference a model config, when the variation is not pinned to a specific version, or when custom model config versioning is not enabled for the project.  | [optional] [default to undefined]
**name** | **string** | The variation name | [default to undefined]
**outputFormat** | **{ [key: string]: any; }** | JSON Schema defining the structured output format for the variation. | [optional] [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**version** | **number** | The version number of this resource | [default to undefined]
**state** | **string** | The state of the variation. - &#x60;archived&#x60;: The variation is archived. To restore it, update the variation with &#x60;state&#x60; set to &#x60;published&#x60;. - &#x60;published&#x60;: The variation is active.  | [optional] [default to undefined]
**_archivedAt** | **number** |  | [optional] [default to undefined]
**_publishedAt** | **number** |  | [optional] [default to undefined]
**tools** | [**Array&lt;VariationTool&gt;**](VariationTool.md) | The tools this variation can use | [optional] [default to undefined]
**skills** | [**Array&lt;VariationSkill&gt;**](VariationSkill.md) | The agent skills this variation can use | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]
**judgingConfigKeys** | **Array&lt;string&gt;** | Keys of the judge AI Configs attached to this variation | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariation } from 'launchdarkly-api-typescript';

const instance: AIConfigVariation = {
    _links,
    color,
    classifiers,
    comment,
    description,
    instructions,
    key,
    _id,
    messages,
    model,
    modelConfigKey,
    modelConfigVersion,
    name,
    outputFormat,
    createdAt,
    version,
    state,
    _archivedAt,
    _publishedAt,
    tools,
    skills,
    judgeConfiguration,
    judgingConfigKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
