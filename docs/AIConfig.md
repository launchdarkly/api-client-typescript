# AIConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**description** | **string** |  | [default to undefined]
**key** | **string** |  | [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**mode** | **string** |  | [optional] [default to ModeEnum_Completion]
**name** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**version** | **number** |  | [default to undefined]
**variations** | [**Array&lt;AIConfigVariation&gt;**](AIConfigVariation.md) |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]
**evaluationMetricKey** | **string** | Evaluation metric key for this AI Config | [optional] [default to undefined]
**evaluationMetricKeys** | **Array&lt;string&gt;** | List of evaluation metric keys for this AI Config | [optional] [default to undefined]
**isInverted** | **boolean** | Whether the evaluation metric is inverted, meaning a lower value is better if set as true | [optional] [default to undefined]

## Example

```typescript
import { AIConfig } from 'launchdarkly-api-typescript';

const instance: AIConfig = {
    _access,
    _links,
    description,
    key,
    _maintainer,
    mode,
    name,
    tags,
    version,
    variations,
    createdAt,
    updatedAt,
    evaluationMetricKey,
    evaluationMetricKeys,
    isInverted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
