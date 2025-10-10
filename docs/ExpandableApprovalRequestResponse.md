# ExpandableApprovalRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this approval request | [default to undefined]
**_version** | **number** | Version of the approval request | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**serviceKind** | **string** |  | [default to undefined]
**requestorId** | **string** | The ID of the member who requested the approval | [optional] [default to undefined]
**description** | **string** | A human-friendly name for the approval request | [optional] [default to undefined]
**reviewStatus** | **string** | Current status of the review of this approval request | [default to undefined]
**allReviews** | [**Array&lt;ReviewResponse&gt;**](ReviewResponse.md) | An array of individual reviews of this approval request | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [default to undefined]
**appliedDate** | **number** |  | [optional] [default to undefined]
**appliedByMemberId** | **string** | The member ID of the member who applied the approval request | [optional] [default to undefined]
**appliedByServiceTokenId** | **string** | The service token ID of the service token which applied the approval request | [optional] [default to undefined]
**status** | **string** | Current status of the approval request | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**conflicts** | [**Array&lt;Conflict&gt;**](Conflict.md) | Details on any conflicting approval requests | [default to undefined]
**_links** | **{ [key: string]: any; }** | The location and content type of related resources | [default to undefined]
**executionDate** | **number** |  | [optional] [default to undefined]
**operatingOnId** | **string** | ID of scheduled change to edit or delete | [optional] [default to undefined]
**integrationMetadata** | [**IntegrationMetadata**](IntegrationMetadata.md) |  | [optional] [default to undefined]
**source** | [**CopiedFromEnv**](CopiedFromEnv.md) |  | [optional] [default to undefined]
**customWorkflowMetadata** | [**CustomWorkflowMeta**](CustomWorkflowMeta.md) |  | [optional] [default to undefined]
**resourceId** | **string** | String representation of a resource | [optional] [default to undefined]
**approvalSettings** | [**ApprovalSettings**](ApprovalSettings.md) |  | [optional] [default to undefined]
**project** | [**Project**](Project.md) |  | [optional] [default to undefined]
**environments** | [**Array&lt;Environment&gt;**](Environment.md) | List of environments the approval impacts | [optional] [default to undefined]
**flag** | [**ExpandedFlagRep**](ExpandedFlagRep.md) |  | [optional] [default to undefined]
**resource** | [**ExpandedResourceRep**](ExpandedResourceRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandableApprovalRequestResponse } from 'launchdarkly-api-typescript';

const instance: ExpandableApprovalRequestResponse = {
    _id,
    _version,
    creationDate,
    serviceKind,
    requestorId,
    description,
    reviewStatus,
    allReviews,
    notifyMemberIds,
    appliedDate,
    appliedByMemberId,
    appliedByServiceTokenId,
    status,
    instructions,
    conflicts,
    _links,
    executionDate,
    operatingOnId,
    integrationMetadata,
    source,
    customWorkflowMetadata,
    resourceId,
    approvalSettings,
    project,
    environments,
    flag,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
