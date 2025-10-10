# AIConfigTargeting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **number** | Unix timestamp in milliseconds | [default to undefined]
**defaults** | [**AIConfigTargetingDefaults**](AIConfigTargetingDefaults.md) |  | [optional] [default to undefined]
**environments** | [**{ [key: string]: AIConfigTargetingEnvironment; }**](AIConfigTargetingEnvironment.md) |  | [default to undefined]
**experiments** | [**AiConfigsExperimentInfoRep**](AiConfigsExperimentInfoRep.md) |  | [default to undefined]
**key** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**variations** | [**Array&lt;AIConfigTargetingVariation&gt;**](AIConfigTargetingVariation.md) |  | [default to undefined]
**_version** | **number** |  | [default to undefined]

## Example

```typescript
import { AIConfigTargeting } from 'launchdarkly-api-typescript';

const instance: AIConfigTargeting = {
    createdAt,
    defaults,
    environments,
    experiments,
    key,
    name,
    tags,
    variations,
    _version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
