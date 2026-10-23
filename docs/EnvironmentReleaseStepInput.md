# EnvironmentReleaseStepInput

One step of a phase\'s rollout schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation** | **number** | Thousandths of a percent. &#x60;100000&#x60; is 100%, and &#x60;10000&#x60; is 10%. Guarded releases cannot exceed &#x60;50000&#x60;, preserving a control group. Each step\&#39;s allocation must be greater than the previous step\&#39;s.  In a progressive release, an allocation of N% serves the target variation to N% of the phase\&#39;s contexts and the original variation to the rest. In a guarded release, it serves the target variation to N%, the original variation to another N% as the measured control group, and the original variation to the rest without measuring them.  | [default to undefined]
**durationMillis** | **number** |  | [default to undefined]

## Example

```typescript
import { EnvironmentReleaseStepInput } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseStepInput = {
    allocation,
    durationMillis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
