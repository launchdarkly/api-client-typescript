# AIConfigPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** |  | [optional] [default to undefined]
**maintainerId** | **string** |  | [optional] [default to undefined]
**maintainerTeamKey** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**evaluationMetricKey** | **string** | Evaluation metric key for this AI Config | [optional] [default to undefined]
**isInverted** | **boolean** | Whether the evaluation metric is inverted, meaning a lower value is better if set as true | [optional] [default to undefined]

## Example

```typescript
import { AIConfigPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigPatch = {
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
