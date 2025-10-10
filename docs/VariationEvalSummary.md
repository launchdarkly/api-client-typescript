# VariationEvalSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **any** | The variation value | [optional] [default to undefined]
**before** | **number** | The number of evaluations in the ten minutes before the flag event | [optional] [default to undefined]
**after** | **number** | The number of evaluations in the ten minutes after the flag event | [optional] [default to undefined]

## Example

```typescript
import { VariationEvalSummary } from 'launchdarkly-api-typescript';

const instance: VariationEvalSummary = {
    value,
    before,
    after,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
