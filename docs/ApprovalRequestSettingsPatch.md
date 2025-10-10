# ApprovalRequestSettingsPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoApplyApprovedChanges** | **boolean** | Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval services other than LaunchDarkly.  | [optional] [default to undefined]
**bypassApprovalsForPendingChanges** | **boolean** | Whether to skip approvals for pending changes | [optional] [default to undefined]
**canApplyDeclinedChanges** | **boolean** | Allow applying the change as long as at least one person has approved | [optional] [default to undefined]
**canReviewOwnRequest** | **boolean** | Allow someone who makes an approval request to apply their own change | [optional] [default to undefined]
**environmentKey** | **string** |  | [default to undefined]
**minNumApprovals** | **number** | Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five.  | [optional] [default to undefined]
**required** | **boolean** | If approvals are required for this environment | [optional] [default to undefined]
**requiredApprovalTags** | **Array&lt;string&gt;** | Require approval only on flags with the provided tags. Otherwise all flags will require approval.  | [optional] [default to undefined]
**resourceKind** | **string** |  | [default to undefined]
**serviceConfig** | **{ [key: string]: any; }** | Arbitrary service-specific configuration | [optional] [default to undefined]
**serviceKind** | **string** | Which service to use for managing approvals | [optional] [default to undefined]
**serviceKindConfigurationId** | **string** | Optional integration configuration ID of a custom approval integration. This is an Enterprise-only feature.  | [optional] [default to undefined]

## Example

```typescript
import { ApprovalRequestSettingsPatch } from 'launchdarkly-api-typescript';

const instance: ApprovalRequestSettingsPatch = {
    autoApplyApprovedChanges,
    bypassApprovalsForPendingChanges,
    canApplyDeclinedChanges,
    canReviewOwnRequest,
    environmentKey,
    minNumApprovals,
    required,
    requiredApprovalTags,
    resourceKind,
    serviceConfig,
    serviceKind,
    serviceKindConfigurationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
