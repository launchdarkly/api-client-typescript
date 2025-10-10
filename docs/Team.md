# Team


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A description of the team | [optional] [default to undefined]
**key** | **string** | The team key | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the team | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_creationDate** | **number** |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_lastModified** | **number** |  | [optional] [default to undefined]
**_version** | **number** | The team version | [optional] [default to undefined]
**_idpSynced** | **boolean** | Whether the team has been synced with an external identity provider (IdP). Team sync is available to customers on an Enterprise plan. | [optional] [default to undefined]
**roleAttributes** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]
**roles** | [**TeamCustomRoles**](TeamCustomRoles.md) |  | [optional] [default to undefined]
**members** | [**TeamMembers**](TeamMembers.md) |  | [optional] [default to undefined]
**projects** | [**TeamProjects**](TeamProjects.md) |  | [optional] [default to undefined]
**maintainers** | [**TeamMaintainers**](TeamMaintainers.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Team } from 'launchdarkly-api-typescript';

const instance: Team = {
    description,
    key,
    name,
    _access,
    _creationDate,
    _links,
    _lastModified,
    _version,
    _idpSynced,
    roleAttributes,
    roles,
    members,
    projects,
    maintainers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
