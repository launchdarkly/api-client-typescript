# ApplicationVersionsCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**items** | [**Array&lt;ApplicationVersionRep&gt;**](ApplicationVersionRep.md) | A list of the versions for this application | [optional] [default to undefined]
**totalCount** | **number** | The number of versions for this application | [optional] [default to undefined]

## Example

```typescript
import { ApplicationVersionsCollectionRep } from 'launchdarkly-api-typescript';

const instance: ApplicationVersionsCollectionRep = {
    _links,
    items,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
