# ApplicationRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | [**ApplicationFlagCollectionRep**](ApplicationFlagCollectionRep.md) |  | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_version** | **number** | Version of the application | [optional] [default to undefined]
**autoAdded** | **boolean** | Whether the application was automatically created because it was included in a context when a LaunchDarkly SDK evaluated a feature flag, or was created through the LaunchDarkly UI or REST API. | [default to undefined]
**creationDate** | **number** |  | [optional] [default to undefined]
**description** | **string** | The application description | [optional] [default to undefined]
**key** | **string** | The unique identifier of this application | [default to undefined]
**kind** | **string** | To distinguish the kind of application | [default to undefined]
**_maintainer** | [**MaintainerRep**](MaintainerRep.md) |  | [optional] [default to undefined]
**name** | **string** | The name of the application | [default to undefined]

## Example

```typescript
import { ApplicationRep } from 'launchdarkly-api-typescript';

const instance: ApplicationRep = {
    flags,
    _access,
    _links,
    _version,
    autoAdded,
    creationDate,
    description,
    key,
    kind,
    _maintainer,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
