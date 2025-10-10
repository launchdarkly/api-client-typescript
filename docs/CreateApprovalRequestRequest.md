# CreateApprovalRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceId** | **string** | String representation of the resource specifier | [default to undefined]
**comment** | **string** | Optional comment describing the approval request | [optional] [default to undefined]
**description** | **string** | A brief description of the changes you\&#39;re requesting | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] [default to undefined]
**integrationConfig** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateApprovalRequestRequest } from 'launchdarkly-api-typescript';

const instance: CreateApprovalRequestRequest = {
    resourceId,
    comment,
    description,
    instructions,
    notifyMemberIds,
    notifyTeamKeys,
    integrationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
