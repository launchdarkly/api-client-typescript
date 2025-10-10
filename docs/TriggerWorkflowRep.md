# TriggerWorkflowRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**_version** | **number** | The flag trigger version | [optional] [default to undefined]
**_creationDate** | **number** |  | [optional] [default to undefined]
**_maintainerId** | **string** | The ID of the flag trigger maintainer | [optional] [default to undefined]
**_maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Whether the flag trigger is currently enabled | [optional] [default to undefined]
**_integrationKey** | **string** | The unique identifier of the integration for your trigger | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**_lastTriggeredAt** | **number** |  | [optional] [default to undefined]
**_recentTriggerBodies** | [**Array&lt;RecentTriggerBody&gt;**](RecentTriggerBody.md) | Details on recent flag trigger requests. | [optional] [default to undefined]
**_triggerCount** | **number** | Number of times the trigger has been executed | [optional] [default to undefined]
**triggerURL** | **string** | The unguessable URL for this flag trigger | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { TriggerWorkflowRep } from 'launchdarkly-api-typescript';

const instance: TriggerWorkflowRep = {
    _id,
    _version,
    _creationDate,
    _maintainerId,
    _maintainer,
    enabled,
    _integrationKey,
    instructions,
    _lastTriggeredAt,
    _recentTriggerBodies,
    _triggerCount,
    triggerURL,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
