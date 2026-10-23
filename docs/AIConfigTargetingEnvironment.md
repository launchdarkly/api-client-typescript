# AIConfigTargetingEnvironment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextTargets** | [**Array&lt;AIConfigTargetingEnvironmentTarget&gt;**](AIConfigTargetingEnvironmentTarget.md) | Individual context targets for non-user context kinds | [default to undefined]
**enabled** | **boolean** | Whether targeting is on in this environment | [default to undefined]
**fallthrough** | [**AIConfigTargetingEnvironmentFallthrough**](AIConfigTargetingEnvironmentFallthrough.md) |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]
**offVariation** | **number** | Index of the variation served when targeting is off | [optional] [default to undefined]
**rules** | [**Array&lt;AIConfigTargetingEnvironmentRule&gt;**](AIConfigTargetingEnvironmentRule.md) | The targeting rules | [default to undefined]
**targets** | [**Array&lt;AIConfigTargetingEnvironmentTarget&gt;**](AIConfigTargetingEnvironmentTarget.md) | Individual user targets | [default to undefined]
**trackEvents** | **boolean** | Whether to send detailed events for all evaluations | [default to undefined]
**trackEventsFallthrough** | **boolean** | Whether to send detailed events for evaluations that fall through to the default rule | [default to undefined]
**_environmentName** | **string** | The environment name | [default to undefined]
**_version** | **number** | The version of the targeting in this environment | [default to undefined]

## Example

```typescript
import { AIConfigTargetingEnvironment } from 'launchdarkly-api-typescript';

const instance: AIConfigTargetingEnvironment = {
    contextTargets,
    enabled,
    fallthrough,
    lastModified,
    offVariation,
    rules,
    targets,
    trackEvents,
    trackEventsFallthrough,
    _environmentName,
    _version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
