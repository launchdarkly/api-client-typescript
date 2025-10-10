# TeamPostInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customRoleKeys** | **Array&lt;string&gt;** | List of custom role keys the team will access | [optional] [default to undefined]
**description** | **string** | A description of the team | [optional] [default to undefined]
**key** | **string** | The team key | [default to undefined]
**memberIDs** | **Array&lt;string&gt;** | A list of member IDs who belong to the team | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the team | [default to undefined]
**permissionGrants** | [**Array&lt;PermissionGrantInput&gt;**](PermissionGrantInput.md) | A list of permission grants. Permission grants allow access to a specific action, without having to create or update a custom role. | [optional] [default to undefined]
**roleAttributes** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]

## Example

```typescript
import { TeamPostInput } from 'launchdarkly-api-typescript';

const instance: TeamPostInput = {
    customRoleKeys,
    description,
    key,
    memberIDs,
    name,
    permissionGrants,
    roleAttributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
