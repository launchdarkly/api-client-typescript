# CreateFlagConfigApprovalRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the approval request | [optional] [default to undefined]
**description** | **string** | A brief description of the changes you\&#39;re requesting | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] [default to undefined]
**executionDate** | **number** |  | [optional] [default to undefined]
**operatingOnId** | **string** | The ID of a scheduled change. Include this if your &lt;code&gt;instructions&lt;/code&gt; include editing or deleting a scheduled change. | [optional] [default to undefined]
**integrationConfig** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateFlagConfigApprovalRequestRequest } from 'launchdarkly-api-typescript';

const instance: CreateFlagConfigApprovalRequestRequest = {
    comment,
    description,
    instructions,
    notifyMemberIds,
    notifyTeamKeys,
    executionDate,
    operatingOnId,
    integrationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
