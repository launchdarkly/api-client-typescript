# AgentSkillReference

A usage of an agent skill in a specific config variation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiConfigKey** | **string** | The key of the config with a variation that references this skill. | [default to undefined]
**aiConfigName** | **string** | The name of the config with a variation that references this skill. | [default to undefined]
**variationId** | **string** | The ID of the variation that references this skill. | [default to undefined]
**variationKey** | **string** | The key of the config variation that references this skill. | [default to undefined]
**variationName** | **string** | The name of the variation that references this skill. | [default to undefined]
**resourceVersion** | **number** | The version of the skill being referenced. | [default to undefined]

## Example

```typescript
import { AgentSkillReference } from 'launchdarkly-api-typescript';

const instance: AgentSkillReference = {
    aiConfigKey,
    aiConfigName,
    variationId,
    variationKey,
    variationName,
    resourceVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
