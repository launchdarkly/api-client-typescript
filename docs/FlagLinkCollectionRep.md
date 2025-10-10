# FlagLinkCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;FlagLinkRep&gt;**](FlagLinkRep.md) | An array of flag links | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { FlagLinkCollectionRep } from 'launchdarkly-api-typescript';

const instance: FlagLinkCollectionRep = {
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
