# ReleaserAudienceConfigInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audienceId** | **string** | UUID of the audience. | [optional] [default to undefined]
**releaseGuardianConfiguration** | [**ReleaseGuardianConfigurationInput**](ReleaseGuardianConfigurationInput.md) |  | [optional] [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | An array of member IDs. These members are notified to review the approval request. | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] [default to undefined]

## Example

```typescript
import { ReleaserAudienceConfigInput } from 'launchdarkly-api-typescript';

const instance: ReleaserAudienceConfigInput = {
    audienceId,
    releaseGuardianConfiguration,
    notifyMemberIds,
    notifyTeamKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
