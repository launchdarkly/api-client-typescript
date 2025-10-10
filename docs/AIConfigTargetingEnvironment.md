# AIConfigTargetingEnvironment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextTargets** | [**Array&lt;AIConfigTargetingEnvironmentTarget&gt;**](AIConfigTargetingEnvironmentTarget.md) |  | [default to undefined]
**enabled** | **boolean** |  | [default to undefined]
**fallthrough** | [**AIConfigTargetingEnvironmentFallthrough**](AIConfigTargetingEnvironmentFallthrough.md) |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]
**offVariation** | **number** |  | [optional] [default to undefined]
**rules** | [**Array&lt;AIConfigTargetingEnvironmentRule&gt;**](AIConfigTargetingEnvironmentRule.md) |  | [default to undefined]
**targets** | [**Array&lt;AIConfigTargetingEnvironmentTarget&gt;**](AIConfigTargetingEnvironmentTarget.md) |  | [default to undefined]
**trackEvents** | **boolean** |  | [default to undefined]
**trackEventsFallthrough** | **boolean** |  | [default to undefined]
**_environmentName** | **string** |  | [default to undefined]
**_version** | **number** |  | [default to undefined]

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
