# ApplicationCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**items** | [**Array&lt;ApplicationRep&gt;**](ApplicationRep.md) | A list of applications | [optional] [default to undefined]
**totalCount** | **number** | The number of applications | [optional] [default to undefined]

## Example

```typescript
import { ApplicationCollectionRep } from 'launchdarkly-api-typescript';

const instance: ApplicationCollectionRep = {
    _links,
    items,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
