# EvaluationReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | Describes the general reason that LaunchDarkly selected this variation. | [default to undefined]
**ruleIndex** | **number** | The positional index of the matching rule if the kind is \&#39;RULE_MATCH\&#39;. The index is 0-based. | [optional] [default to undefined]
**ruleID** | **string** | The unique identifier of the matching rule if the kind is \&#39;RULE_MATCH\&#39;. | [optional] [default to undefined]
**prerequisiteKey** | **string** | The key of the flag that failed if the kind is \&#39;PREREQUISITE_FAILED\&#39;. | [optional] [default to undefined]
**inExperiment** | **boolean** | Indicates whether the evaluation occurred as part of an experiment. | [optional] [default to undefined]
**errorKind** | **string** | The specific error type if the kind is \&#39;ERROR\&#39;. | [optional] [default to undefined]

## Example

```typescript
import { EvaluationReason } from 'launchdarkly-api-typescript';

const instance: EvaluationReason = {
    kind,
    ruleIndex,
    ruleID,
    prerequisiteKey,
    inExperiment,
    errorKind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
