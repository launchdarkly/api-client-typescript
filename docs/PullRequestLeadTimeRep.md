# PullRequestLeadTimeRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codingDurationMs** | **number** | The coding duration in milliseconds | [default to undefined]
**reviewDurationMs** | **number** | The review duration in milliseconds | [optional] [default to undefined]
**maxWaitDurationMs** | **number** | The max wait duration between merge time and deploy start time in milliseconds | [optional] [default to undefined]
**avgWaitDurationMs** | **number** | The average wait duration between merge time and deploy start time in milliseconds | [optional] [default to undefined]
**maxDeployDurationMs** | **number** | The max deploy duration in milliseconds | [optional] [default to undefined]
**avgDeployDurationMs** | **number** | The average deploy duration in milliseconds | [optional] [default to undefined]
**maxTotalLeadTimeMs** | **number** | The max total lead time in milliseconds | [optional] [default to undefined]
**avgTotalLeadTimeMs** | **number** | The average total lead time in milliseconds | [optional] [default to undefined]

## Example

```typescript
import { PullRequestLeadTimeRep } from 'launchdarkly-api-typescript';

const instance: PullRequestLeadTimeRep = {
    codingDurationMs,
    reviewDurationMs,
    maxWaitDurationMs,
    avgWaitDurationMs,
    maxDeployDurationMs,
    avgDeployDurationMs,
    maxTotalLeadTimeMs,
    avgTotalLeadTimeMs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
