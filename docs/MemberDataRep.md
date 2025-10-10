# MemberDataRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**_id** | **string** | The member ID | [optional] [default to undefined]
**email** | **string** | The member email | [optional] [default to undefined]
**firstName** | **string** | The member first name | [optional] [default to undefined]
**lastName** | **string** | The member last name | [optional] [default to undefined]

## Example

```typescript
import { MemberDataRep } from 'launchdarkly-api-typescript';

const instance: MemberDataRep = {
    _links,
    _id,
    email,
    firstName,
    lastName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
