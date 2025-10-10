# TeamCustomRoles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The number of custom roles assigned to this team | [optional] [default to undefined]
**items** | [**Array&lt;TeamCustomRole&gt;**](TeamCustomRole.md) | An array of the custom roles that have been assigned to this team | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { TeamCustomRoles } from 'launchdarkly-api-typescript';

const instance: TeamCustomRoles = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
