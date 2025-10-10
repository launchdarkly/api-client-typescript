# AudienceConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseStrategy** | **string** |  | [default to undefined]
**requireApproval** | **boolean** | Whether or not the audience requires approval | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] [default to undefined]
**releaseGuardianConfiguration** | [**ReleaseGuardianConfiguration**](ReleaseGuardianConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AudienceConfiguration } from 'launchdarkly-api-typescript';

const instance: AudienceConfiguration = {
    releaseStrategy,
    requireApproval,
    notifyMemberIds,
    notifyTeamKeys,
    releaseGuardianConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
