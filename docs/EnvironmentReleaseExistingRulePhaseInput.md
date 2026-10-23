# EnvironmentReleaseExistingRulePhaseInput

A phase that releases on an existing rule. Allowed only on a single-phase release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **string** | Existing rule to release on. The rule must already include the &#x60;kind&#x60; clause for &#x60;randomizationUnit&#x60; described in &#x60;startEnvironmentRelease&#x60;.  | [default to undefined]
**steps** | [**Array&lt;EnvironmentReleaseStepInput&gt;**](EnvironmentReleaseStepInput.md) |  | [default to undefined]

## Example

```typescript
import { EnvironmentReleaseExistingRulePhaseInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseExistingRulePhaseInput = {
    ruleId,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
