# ParameterDefault


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **any** | The default value for the given parameter | [optional] [default to undefined]
**booleanVariationValue** | **boolean** | Variation value for boolean flags. Not applicable for non-boolean flags. | [optional] [default to undefined]
**ruleClause** | [**RuleClause**](RuleClause.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ParameterDefault } from 'launchdarkly-api-typescript';

const instance: ParameterDefault = {
    value,
    booleanVariationValue,
    ruleClause,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
