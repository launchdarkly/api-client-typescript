# NewMemberForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The member\&#39;s email | [default to undefined]
**password** | **string** | The member\&#39;s password | [optional] [default to undefined]
**firstName** | **string** | The member\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | The member\&#39;s last name | [optional] [default to undefined]
**role** | **string** | The member\&#39;s initial role, if you are using a base role for the initial role | [optional] [default to undefined]
**customRoles** | **Array&lt;string&gt;** | An array of the member\&#39;s initial roles, if you are using custom roles or preset roles provided by LaunchDarkly | [optional] [default to undefined]
**teamKeys** | **Array&lt;string&gt;** | An array of the member\&#39;s teams | [optional] [default to undefined]
**roleAttributes** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]

## Example

```typescript
import { NewMemberForm } from 'launchdarkly-api-typescript';

const instance: NewMemberForm = {
    email,
    password,
    firstName,
    lastName,
    role,
    customRoles,
    teamKeys,
    roleAttributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
