# Token


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**ownerId** | **string** |  | [default to undefined]
**memberId** | **string** |  | [default to undefined]
**_member** | [**MemberSummary**](MemberSummary.md) |  | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the access token | [optional] [default to undefined]
**description** | **string** | A description for the access token | [optional] [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]
**customRoleIds** | **Array&lt;string&gt;** | A list of custom role IDs to use as access limits for the access token | [optional] [default to undefined]
**inlineRole** | [**Array&lt;Statement&gt;**](Statement.md) | An array of policy statements, with three attributes: effect, resources, actions. May be used in place of a role. | [optional] [default to undefined]
**role** | **string** | Base role for the token | [optional] [default to undefined]
**token** | **string** | The token value. When creating or resetting, contains the entire token value. Otherwise, contains the last four characters. | [optional] [default to undefined]
**serviceToken** | **boolean** | Whether this is a service token or a personal token | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**defaultApiVersion** | **number** | The default API version for this token | [optional] [default to undefined]
**lastUsed** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Token } from 'launchdarkly-api-typescript';

const instance: Token = {
    _id,
    ownerId,
    memberId,
    _member,
    name,
    description,
    creationDate,
    lastModified,
    customRoleIds,
    inlineRole,
    role,
    token,
    serviceToken,
    _links,
    defaultApiVersion,
    lastUsed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
