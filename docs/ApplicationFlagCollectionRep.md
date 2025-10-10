# ApplicationFlagCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;FlagListingRep&gt;**](FlagListingRep.md) | A list of the flags that have been evaluated by the application | [optional] [default to undefined]
**totalCount** | **number** | The number of flags that have been evaluated by the application | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { ApplicationFlagCollectionRep } from 'launchdarkly-api-typescript';

const instance: ApplicationFlagCollectionRep = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
