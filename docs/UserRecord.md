# UserRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastPing** | **string** | Timestamp of the last time this user was seen | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**ownerId** | **string** |  | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**sortValue** | **any** | If this record is returned as part of a list, the value used to sort the list. This is only included when the &lt;code&gt;sort&lt;/code&gt; query parameter is specified. It is a time, in Unix milliseconds, if the sort is by &lt;code&gt;lastSeen&lt;/code&gt;. It is a user key if the sort is by &lt;code&gt;userKey&lt;/code&gt;. | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserRecord } from 'launchdarkly-api-typescript';

const instance: UserRecord = {
    lastPing,
    environmentId,
    ownerId,
    user,
    sortValue,
    _links,
    _access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
