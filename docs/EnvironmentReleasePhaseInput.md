# EnvironmentReleasePhaseInput

One phase of a release. Each phase creates a flag rule unless it sets `ruleId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **string** | Existing rule to release on. The rule must already include the &#x60;kind&#x60; clause for &#x60;randomizationUnit&#x60; described in &#x60;startEnvironmentRelease&#x60;.  | [default to undefined]
**steps** | [**Array&lt;EnvironmentReleaseStepInput&gt;**](EnvironmentReleaseStepInput.md) |  | [default to undefined]
**clauses** | [**Array&lt;EnvironmentReleaseClause&gt;**](EnvironmentReleaseClause.md) | Clauses for a new rule. Must include the &#x60;kind&#x60; clause for &#x60;randomizationUnit&#x60; described in &#x60;startEnvironmentRelease&#x60;. A new rule that exactly duplicates an existing rule on the flag returns &#x60;400&#x60; with &#x60;new rule is exact duplicate of an existing rule at index &lt;n&gt;&#x60;.  | [default to undefined]
**description** | **string** | Description for a new rule. Must differ from the description of every other rule on the flag, including rules an earlier release left in place, or the request returns &#x60;400&#x60; with &#x60;duplicate rule description not allowed&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentReleasePhaseInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleasePhaseInput = {
    ruleId,
    steps,
    clauses,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
