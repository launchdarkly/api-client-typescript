# LeadTimeStagesRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codingDurationMs** | **number** | The coding duration in milliseconds | [default to undefined]
**reviewDurationMs** | **number** | The review duration in milliseconds | [optional] [default to undefined]
**waitDurationMs** | **number** | The wait duration between merge time and deploy start time in milliseconds | [optional] [default to undefined]
**deployDurationMs** | **number** | The deploy duration in milliseconds | [optional] [default to undefined]
**totalLeadTimeMs** | **number** | The total lead time in milliseconds | [optional] [default to undefined]

## Example

```typescript
import { LeadTimeStagesRep } from 'launchdarkly-api-typescript';

const instance: LeadTimeStagesRep = {
    codingDurationMs,
    reviewDurationMs,
    waitDurationMs,
    deployDurationMs,
    totalLeadTimeMs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
