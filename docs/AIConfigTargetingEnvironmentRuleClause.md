# AIConfigTargetingEnvironmentRuleClause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **string** | The context attribute to match | [default to undefined]
**id** | **string** | The clause ID | [default to undefined]
**negate** | **boolean** | Whether to negate the match | [default to undefined]
**op** | **string** | The operator to use | [default to undefined]
**values** | **Array&lt;any&gt;** | The values to match against | [default to undefined]

## Example

```typescript
import { AIConfigTargetingEnvironmentRuleClause } from 'launchdarkly-api-typescript';

const instance: AIConfigTargetingEnvironmentRuleClause = {
    attribute,
    id,
    negate,
    op,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
