# RelayAutoConfigRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**_creator** | [**MemberSummary**](MemberSummary.md) |  | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the Relay Proxy configuration | [default to undefined]
**policy** | [**Array&lt;Statement&gt;**](Statement.md) | A description of what environments and projects the Relay Proxy should include or exclude | [default to undefined]
**fullKey** | **string** | The Relay Proxy configuration key | [optional] [default to undefined]
**displayKey** | **string** | The last few characters of the Relay Proxy configuration key, displayed in the LaunchDarkly UI | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]

## Example

```typescript
import { RelayAutoConfigRep } from 'launchdarkly-api-typescript';

const instance: RelayAutoConfigRep = {
    _id,
    _creator,
    _access,
    name,
    policy,
    fullKey,
    displayKey,
    creationDate,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
