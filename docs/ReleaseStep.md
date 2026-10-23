# ReleaseStep

One step in a phase\'s rollout schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepIndex** | **number** | Zero-based index of this step. | [readonly] [default to undefined]
**allocation** | **number** | Thousandths of a percent. &#x60;100000&#x60; is 100%, and &#x60;10000&#x60; is 10%. Guarded releases cannot exceed &#x60;50000&#x60;, preserving a control group.  | [default to undefined]
**durationMillis** | **number** |  | [default to undefined]
**startedAt** | **number** | Start of the step in Unix milliseconds. | [optional] [readonly] [default to undefined]
**endedAt** | **number** | End of the step in Unix milliseconds. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ReleaseStep } from 'launchdarkly-api-typescript';

const instance: ReleaseStep = {
    stepIndex,
    allocation,
    durationMillis,
    startedAt,
    endedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
