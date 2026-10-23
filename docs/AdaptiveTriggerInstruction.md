# AdaptiveTriggerInstruction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to undefined]
**variationId** | **string** |  | [default to undefined]
**ruleId** | **string** | The targeting rule this adaptive trigger acts on. Required for updateRuleVariationOrRollout instructions. | [optional] [default to undefined]

## Example

```typescript
import { AdaptiveTriggerInstruction } from 'launchdarkly-api-typescript';

const instance: AdaptiveTriggerInstruction = {
    kind,
    variationId,
    ruleId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
