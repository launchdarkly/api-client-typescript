# LayerCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;LayerRep&gt;**](LayerRep.md) | The layers in the project | [default to undefined]
**totalCount** | **number** | The total number of layers in the project | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { LayerCollectionRep } from 'launchdarkly-api-typescript';

const instance: LayerCollectionRep = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
