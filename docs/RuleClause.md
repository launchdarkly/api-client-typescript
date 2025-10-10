# RuleClause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **string** | The attribute the rule applies to, for example, last name or email address | [optional] [default to undefined]
**op** | **string** | The operator to apply to the given attribute | [optional] [default to undefined]
**negate** | **boolean** | Whether the operator should be negated | [optional] [default to undefined]

## Example

```typescript
import { RuleClause } from 'launchdarkly-api-typescript';

const instance: RuleClause = {
    attribute,
    op,
    negate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
