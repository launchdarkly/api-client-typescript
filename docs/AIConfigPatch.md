# AIConfigPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultVariationKey** | **string** | Key of the variation this config serves by default | [optional] [default to undefined]
**description** | **string** | A description of the AI Config | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**name** | **string** | A human-readable name for the AI Config | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [optional] [default to undefined]
**evaluationMetricKey** | **string** | Evaluation metric key for this config | [optional] [default to undefined]
**isInverted** | **boolean** | Whether the evaluation metric is inverted, meaning a lower value is better if set as true | [optional] [default to undefined]

## Example

```typescript
import { AIConfigPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigPatch = {
    defaultVariationKey,
    description,
    maintainerId,
    maintainerTeamKey,
    name,
    tags,
    evaluationMetricKey,
    isInverted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
