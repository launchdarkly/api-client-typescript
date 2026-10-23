# AIConfigTargetingEnvironmentRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clauses** | [**Array&lt;AIConfigTargetingEnvironmentRuleClause&gt;**](AIConfigTargetingEnvironmentRuleClause.md) | The clauses a context must match | [default to undefined]
**trackEvents** | **boolean** | Whether to send detailed events for evaluations that match this rule | [default to undefined]

## Example

```typescript
import { AIConfigTargetingEnvironmentRule } from 'launchdarkly-api-typescript';

const instance: AIConfigTargetingEnvironmentRule = {
    clauses,
    trackEvents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
