# ApprovalSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **boolean** | If approvals are required for this environment | [default to undefined]
**bypassApprovalsForPendingChanges** | **boolean** | Whether to skip approvals for pending changes | [default to undefined]
**minNumApprovals** | **number** | Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five. | [default to undefined]
**canReviewOwnRequest** | **boolean** | Allow someone who makes an approval request to apply their own change | [default to undefined]
**canApplyDeclinedChanges** | **boolean** | Allow applying the change as long as at least one person has approved | [default to undefined]
**autoApplyApprovedChanges** | **boolean** | Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval services other than LaunchDarkly. | [optional] [default to undefined]
**serviceKind** | **string** | Which service to use for managing approvals | [default to undefined]
**serviceConfig** | **{ [key: string]: any; }** |  | [default to undefined]
**requiredApprovalTags** | **Array&lt;string&gt;** | Require approval only on flags with the provided tags. Otherwise all flags will require approval. | [default to undefined]
**serviceKindConfigurationId** | **string** | Optional field for integration configuration ID of a custom approval integration. This is an Enterprise-only feature. | [optional] [default to undefined]
**resourceKind** | **string** | The kind of resource for which the approval settings apply, for example, flag or segment | [optional] [default to undefined]

## Example

```typescript
import { ApprovalSettings } from 'launchdarkly-api-typescript';

const instance: ApprovalSettings = {
    required,
    bypassApprovalsForPendingChanges,
    minNumApprovals,
    canReviewOwnRequest,
    canApplyDeclinedChanges,
    autoApplyApprovedChanges,
    serviceKind,
    serviceConfig,
    requiredApprovalTags,
    serviceKindConfigurationId,
    resourceKind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
