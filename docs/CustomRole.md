# CustomRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of the custom role | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**description** | **string** | The description of the custom role | [optional] [default to undefined]
**key** | **string** | The key of the custom role | [default to undefined]
**name** | **string** | The name of the custom role | [default to undefined]
**policy** | [**Array&lt;Statement&gt;**](Statement.md) | An array of the policies that comprise this custom role | [default to undefined]
**basePermissions** | **string** |  | [optional] [default to undefined]
**resourceCategory** | **string** |  | [optional] [default to undefined]
**assignedTo** | [**AssignedToRep**](AssignedToRep.md) |  | [optional] [default to undefined]
**_presetBundleVersion** | **number** | If created from a preset, the preset bundle version | [optional] [default to undefined]
**_presetStatements** | [**Array&lt;Statement&gt;**](Statement.md) | If created from a preset, the read-only statements copied from the preset | [optional] [default to undefined]

## Example

```typescript
import { CustomRole } from 'launchdarkly-api-typescript';

const instance: CustomRole = {
    _id,
    _links,
    _access,
    description,
    key,
    name,
    policy,
    basePermissions,
    resourceCategory,
    assignedTo,
    _presetBundleVersion,
    _presetStatements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
