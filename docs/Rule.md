# Rule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The flag rule ID | [optional] [default to undefined]
**disabled** | **boolean** | Whether the rule is disabled | [optional] [default to undefined]
**variation** | **number** | The index of the variation, from the array of variations for this flag | [optional] [default to undefined]
**rollout** | [**Rollout**](Rollout.md) |  | [optional] [default to undefined]
**clauses** | [**Array&lt;Clause&gt;**](Clause.md) | An array of clauses used for individual targeting based on attributes | [default to undefined]
**trackEvents** | **boolean** | Whether LaunchDarkly tracks events for this rule | [default to undefined]
**description** | **string** | The rule description | [optional] [default to undefined]
**ref** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Rule } from 'launchdarkly-api-typescript';

const instance: Rule = {
    _id,
    disabled,
    variation,
    rollout,
    clauses,
    trackEvents,
    description,
    ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
