# Member


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The member\&#39;s ID | [default to undefined]
**firstName** | **string** | The member\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | The member\&#39;s last name | [optional] [default to undefined]
**role** | **string** | The member\&#39;s base role. If the member has no additional roles, this role will be in effect. | [default to undefined]
**email** | **string** | The member\&#39;s email address | [default to undefined]
**_pendingInvite** | **boolean** | Whether the member has a pending invitation | [default to undefined]
**_verified** | **boolean** | Whether the member\&#39;s email address has been verified | [default to undefined]
**_pendingEmail** | **string** | The member\&#39;s email address before it has been verified, for accounts where email verification is required | [optional] [default to undefined]
**customRoles** | **Array&lt;string&gt;** | The set of additional roles, besides the base role, assigned to the member | [default to undefined]
**mfa** | **string** | Whether multi-factor authentication is enabled for this member | [default to undefined]
**excludedDashboards** | **Array&lt;string&gt;** | Default dashboards that the member has chosen to ignore | [optional] [default to undefined]
**_lastSeen** | **number** |  | [default to undefined]
**_lastSeenMetadata** | [**LastSeenMetadata**](LastSeenMetadata.md) |  | [optional] [default to undefined]
**_integrationMetadata** | [**IntegrationMetadata**](IntegrationMetadata.md) |  | [optional] [default to undefined]
**teams** | [**Array&lt;MemberTeamSummaryRep&gt;**](MemberTeamSummaryRep.md) | Details on the teams this member is assigned to | [optional] [default to undefined]
**permissionGrants** | [**Array&lt;MemberPermissionGrantSummaryRep&gt;**](MemberPermissionGrantSummaryRep.md) | A list of permission grants. Permission grants allow a member to have access to a specific action, without having to create or update a custom role. | [optional] [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**oauthProviders** | **Array&lt;string&gt;** | A list of OAuth providers | [optional] [default to undefined]
**version** | **number** | Version of the current configuration | [optional] [default to undefined]
**roleAttributes** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]

## Example

```typescript
import { Member } from 'launchdarkly-api-typescript';

const instance: Member = {
    _links,
    _id,
    firstName,
    lastName,
    role,
    email,
    _pendingInvite,
    _verified,
    _pendingEmail,
    customRoles,
    mfa,
    excludedDashboards,
    _lastSeen,
    _lastSeenMetadata,
    _integrationMetadata,
    teams,
    permissionGrants,
    creationDate,
    oauthProviders,
    version,
    roleAttributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
