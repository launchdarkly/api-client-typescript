# ViewLinkedResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [default to undefined]
**resourceKey** | **string** | Key of the resource (flag, segment, AI config or metric) | [default to undefined]
**environmentId** | **string** | Environment ID of the resource (only present for segments) | [optional] [default to undefined]
**environmentKey** | **string** | Environment Key of the resource (only present for segments) | [optional] [default to undefined]
**resourceType** | **string** |  | [default to undefined]
**linkedAt** | **number** |  | [default to undefined]
**resourceDetails** | [**ViewLinkedResourceDetails**](ViewLinkedResourceDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ViewLinkedResource } from 'launchdarkly-api-typescript';

const instance: ViewLinkedResource = {
    _links,
    resourceKey,
    environmentId,
    environmentKey,
    resourceType,
    linkedAt,
    resourceDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
