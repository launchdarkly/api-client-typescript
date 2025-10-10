# FollowFlagMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The member\&#39;s ID | [default to undefined]
**firstName** | **string** | The member\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | The member\&#39;s last name | [optional] [default to undefined]
**role** | **string** | The member\&#39;s base role. If the member has no additional roles, this role will be in effect. | [default to undefined]
**email** | **string** | The member\&#39;s email address | [default to undefined]

## Example

```typescript
import { FollowFlagMember } from 'launchdarkly-api-typescript';

const instance: FollowFlagMember = {
    _links,
    _id,
    firstName,
    lastName,
    role,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
