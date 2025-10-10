# CreateCopyFlagConfigApprovalRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the approval request | [optional] [default to undefined]
**description** | **string** | A brief description of your changes | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] [default to undefined]
**source** | [**SourceFlag**](SourceFlag.md) |  | [default to undefined]
**includedActions** | **Array&lt;string&gt;** | Optional list of the flag changes to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If neither are included, then all flag changes will be copied. | [optional] [default to undefined]
**excludedActions** | **Array&lt;string&gt;** | Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If neither are included, then all flag changes will be copied. | [optional] [default to undefined]

## Example

```typescript
import { CreateCopyFlagConfigApprovalRequestRequest } from 'launchdarkly-api-typescript';

const instance: CreateCopyFlagConfigApprovalRequestRequest = {
    comment,
    description,
    notifyMemberIds,
    notifyTeamKeys,
    source,
    includedActions,
    excludedActions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
