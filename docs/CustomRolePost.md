# CustomRolePost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the custom role | [default to undefined]
**key** | **string** | The custom role key | [default to undefined]
**description** | **string** | Description of custom role | [optional] [default to undefined]
**policy** | [**Array&lt;StatementPost&gt;**](StatementPost.md) |  | [default to undefined]
**basePermissions** | **string** |  | [optional] [default to undefined]
**resourceCategory** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomRolePost } from 'launchdarkly-api-typescript';

const instance: CustomRolePost = {
    name,
    key,
    description,
    policy,
    basePermissions,
    resourceCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
