# BranchCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**items** | [**Array&lt;BranchRep&gt;**](BranchRep.md) | An array of branches | [default to undefined]

## Example

```typescript
import { BranchCollectionRep } from 'launchdarkly-api-typescript';

const instance: BranchCollectionRep = {
    _links,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
