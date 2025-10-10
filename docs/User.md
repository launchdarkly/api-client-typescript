# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The user key. This is the only mandatory user attribute. | [optional] [default to undefined]
**secondary** | **string** | If provided, used with the user key to generate a variation in percentage rollouts | [optional] [default to undefined]
**ip** | **string** | The user\&#39;s IP address | [optional] [default to undefined]
**country** | **string** | The user\&#39;s country | [optional] [default to undefined]
**email** | **string** | The user\&#39;s email | [optional] [default to undefined]
**firstName** | **string** | The user\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | The user\&#39;s last name | [optional] [default to undefined]
**avatar** | **string** | An absolute URL to an avatar image. | [optional] [default to undefined]
**name** | **string** | The user\&#39;s full name | [optional] [default to undefined]
**anonymous** | **boolean** | Whether the user is anonymous. If true, this user does not appear on the Contexts list in the LaunchDarkly user interface. | [optional] [default to undefined]
**custom** | **{ [key: string]: any; }** | Any other custom attributes for this user. Custom attributes contain any other user data that you would like to use to conditionally target your users. | [optional] [default to undefined]
**privateAttrs** | **Array&lt;string&gt;** | A list of attribute names that are marked as private. You can use these attributes in targeting rules and segments. If you are using a server-side SDK, the SDK will not send the private attribute back to LaunchDarkly. If you are using a client-side SDK, the SDK will send the private attribute back to LaunchDarkly for evaluation. However, the SDK won\&#39;t send the attribute to LaunchDarkly in events data, LaunchDarkly won\&#39;t store the private attribute, and the private attribute will not appear on the Contexts list. | [optional] [default to undefined]

## Example

```typescript
import { User } from 'launchdarkly-api-typescript';

const instance: User = {
    key,
    secondary,
    ip,
    country,
    email,
    firstName,
    lastName,
    avatar,
    name,
    anonymous,
    custom,
    privateAttrs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
