# AIConfigVariationPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifiers** | [**Array&lt;Classifier&gt;**](Classifier.md) | Replaces classifier rules on a judge variation. An empty array clears them. When this array is non-empty, messages must be empty.  | [optional] [default to undefined]
**comment** | **string** | Human-readable description of what this patch changes | [optional] [default to undefined]
**description** | **string** | Description for agent when the config is in agent mode. | [optional] [default to undefined]
**instructions** | **string** | Instructions for agent when the config is in agent mode. | [optional] [default to undefined]
**messages** | [**Array&lt;Message&gt;**](Message.md) | The prompt messages for this variation | [optional] [default to undefined]
**model** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**modelConfigKey** | **string** | The key that GET /api/v2/projects/{projectKey}/ai-configs/model-configs returns for the model config. Do not use a custom model config\&#39;s ID, which is the provider model ID.  | [optional] [default to undefined]
**modelConfigVersion** | **number** | The exact model config version to set this variation to. Requires modelConfigKey to be set (either in this patch or already on the variation), and the version must exist for that model config. When omitted, the variation keeps the version it is currently set to, unless the patch changes modelConfigKey, in which case the variation records the new model config\&#39;s current (latest) version.  | [optional] [default to undefined]
**name** | **string** | A human-readable name for the variation | [optional] [default to undefined]
**outputFormat** | **{ [key: string]: any; }** | JSON Schema defining the structured output format for the variation. | [optional] [default to undefined]
**published** | **boolean** | Whether to publish this version of the variation | [optional] [default to undefined]
**state** | **string** | The state to move the variation to. Omit this field to keep the current state. - &#x60;archived&#x60;: Archive a published variation. You cannot archive a variation that is already archived. You also cannot archive the only variation of an AI Config. An AI Config itself cannot be archived. - &#x60;published&#x60;: Restore an archived variation. You cannot publish a variation that is already published.  | [optional] [default to undefined]
**tools** | [**Array&lt;VariationToolPost&gt;**](VariationToolPost.md) | List of tools to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**toolKeys** | **Array&lt;string&gt;** | List of tool keys to use for this variation. The latest version of the tool will be used. | [optional] [default to undefined]
**skills** | [**Array&lt;VariationSkillPost&gt;**](VariationSkillPost.md) | List of agent skills to attach to this variation. Replaces the current attachments. | [optional] [default to undefined]
**judgeConfiguration** | [**JudgeConfiguration**](JudgeConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVariationPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigVariationPatch = {
    classifiers,
    comment,
    description,
    instructions,
    messages,
    model,
    modelConfigKey,
    modelConfigVersion,
    name,
    outputFormat,
    published,
    state,
    tools,
    toolKeys,
    skills,
    judgeConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
