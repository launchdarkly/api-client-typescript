# EnvironmentReleaseNewRulePhaseInput

A phase that creates a new rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clauses** | [**Array&lt;EnvironmentReleaseClause&gt;**](EnvironmentReleaseClause.md) | Clauses for a new rule. Must include the &#x60;kind&#x60; clause for &#x60;randomizationUnit&#x60; described in &#x60;startEnvironmentRelease&#x60;. A new rule that exactly duplicates an existing rule on the flag returns &#x60;400&#x60; with &#x60;new rule is exact duplicate of an existing rule at index &lt;n&gt;&#x60;.  | [default to undefined]
**description** | **string** | Description for a new rule. Must differ from the description of every other rule on the flag, including rules an earlier release left in place, or the request returns &#x60;400&#x60; with &#x60;duplicate rule description not allowed&#x60;.  | [optional] [default to undefined]
**steps** | [**Array&lt;EnvironmentReleaseStepInput&gt;**](EnvironmentReleaseStepInput.md) |  | [default to undefined]

## Example

```typescript
import { EnvironmentReleaseNewRulePhaseInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseNewRulePhaseInput = {
    clauses,
    description,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
