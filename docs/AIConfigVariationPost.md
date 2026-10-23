# AIConfigVariationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifiers** | [**Array&lt;Classifier&gt;**](Classifier.md) | Classifier rules for a judge variation. When this array is non-empty, messages must be empty.  | [optional] [default to undefined]
**comment** | **string** | Human-readable description of this variation | [optional] [default to undefined]
**description** | **string** | Returns the description for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**instructions** | **string** | Returns the instructions for the agent. This is only returned for agent variations. | [optional] [default to undefined]
**key** | **string** | A unique key for the variation | [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) | The prompt messages for this variation | [optional] [default to undefined]
**model** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**name** | **string** | A human-readable name for the variation | [default to undefined]
**modelConfigKey** | **string** | The key that GET /api/v2/projects/{projectKey}/ai-configs/model-configs returns for the model config. Do not use a custom model config\&#39;s ID, which is the provider model ID.  | [optional] [default to undefined]
**modelConfigVersion** | **number** | The exact model config version to set this variation to. Requires modelConfigKey to be set, and the version must exist for that model config. When omitted, the variation records the model config\&#39;s current (latest) version.  | [optional] [default to undefined]
**outputFormat** | **{ [key: string]: any; }** | JSON Schema defining the structured output format for the variation. | [optional] [default to undefined]
**tools** | [**Array&lt;VariationToolPost&gt;**](VariationToolPost.md) | List of tools to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**toolKeys** | **Array&lt;string&gt;** | List of tool keys to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**skills** | [**Array&lt;VariationSkillPost&gt;**](VariationSkillPost.md) | List of agent skills to attach to this variation. | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariationPost } from 'launchdarkly-api-typescript';

const instance: AIConfigVariationPost = {
    classifiers,
    comment,
    description,
    instructions,
    key,
    messages,
    model,
    name,
    modelConfigKey,
    modelConfigVersion,
    outputFormat,
    tools,
    toolKeys,
    skills,
    judgeConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
