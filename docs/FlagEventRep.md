# FlagEventRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The flag event ID | [default to undefined]
**projectId** | **string** | The project ID | [default to undefined]
**projectKey** | **string** | The project key | [default to undefined]
**environmentId** | **string** | The environment ID | [optional] [default to undefined]
**environmentKey** | **string** | The environment key | [optional] [default to undefined]
**flagKey** | **string** | The flag key | [default to undefined]
**eventType** | **string** |  | [default to undefined]
**eventTime** | **number** |  | [default to undefined]
**description** | **string** | The event description | [default to undefined]
**auditLogEntryId** | **string** | The audit log entry ID | [optional] [default to undefined]
**member** | [**FlagEventMemberRep**](FlagEventMemberRep.md) |  | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** | The resource actions | [optional] [default to undefined]
**impact** | [**FlagEventImpactRep**](FlagEventImpactRep.md) |  | [default to undefined]
**experiments** | [**FlagEventExperimentCollection**](FlagEventExperimentCollection.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagEventRep } from 'launchdarkly-api-typescript';

const instance: FlagEventRep = {
    id,
    projectId,
    projectKey,
    environmentId,
    environmentKey,
    flagKey,
    eventType,
    eventTime,
    description,
    auditLogEntryId,
    member,
    actions,
    impact,
    experiments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
