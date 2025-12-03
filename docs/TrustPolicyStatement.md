# TrustPolicyStatement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effect** | **string** | The effect of trust policy statement | [optional] [default to undefined]
**Action** | **Array&lt;string&gt;** | The action of trust policy statement | [optional] [default to undefined]
**Principal** | **any** | The principal of trust policy statement | [optional] [default to undefined]
**Condition** | **any** | The condition of trust policy statement | [optional] [default to undefined]

## Example

```typescript
import { TrustPolicyStatement } from 'launchdarkly-api-typescript';

const instance: TrustPolicyStatement = {
    Effect,
    Action,
    Principal,
    Condition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
