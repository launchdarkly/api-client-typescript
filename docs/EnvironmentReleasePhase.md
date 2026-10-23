# EnvironmentReleasePhase

One ordered phase of an environment release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**phaseIndex** | **number** | Zero-based index of this phase. | [readonly] [default to undefined]
**ruleId** | **string** | ID of the flag rule for this phase. New public-API releases always have a rule ID. &#x60;null&#x60; is retained only when reading a historical release that ran on the default rule.  | [default to undefined]
**description** | **string** | The description of the flag rule when this release was created. Omitted for default-rule phases.  | [optional] [readonly] [default to undefined]
**status** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**statusReason** | [**ReleaseStatusReason**](ReleaseStatusReason.md) |  | [optional] [default to undefined]
**steps** | [**Array&lt;ReleaseStep&gt;**](ReleaseStep.md) |  | [default to undefined]
**currentStepIndex** | **number** | Zero-based index of the step the phase is on. Omitted until the first step starts. Once the phase completes or reverts, it stays at the last step that started, unlike &#x60;currentPhaseIndex&#x60;, which becomes &#x60;null&#x60; when the release reaches a terminal status.  | [optional] [readonly] [default to undefined]
**startedAt** | **number** | Start of the phase in Unix milliseconds. | [optional] [readonly] [default to undefined]
**endedAt** | **number** | End of the phase in Unix milliseconds. | [optional] [readonly] [default to undefined]
**metricStatuses** | [**{ [key: string]: ReleaseMetricStatus; }**](ReleaseMetricStatus.md) | Per-phase metric status keyed by metric key. Empty for progressive releases. Metric definitions and monitoring preferences live once in the parent release\&#39;s &#x60;metrics&#x60; array.  | [readonly] [default to undefined]

## Example

```typescript
import { EnvironmentReleasePhase } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleasePhase = {
    id,
    phaseIndex,
    ruleId,
    description,
    status,
    statusReason,
    steps,
    currentStepIndex,
    startedAt,
    endedAt,
    metricStatuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
