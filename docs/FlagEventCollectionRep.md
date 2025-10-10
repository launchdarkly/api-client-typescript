# FlagEventCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The total number of flag events | [default to undefined]
**items** | [**Array&lt;FlagEventRep&gt;**](FlagEventRep.md) | A list of flag events | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { FlagEventCollectionRep } from 'launchdarkly-api-typescript';

const instance: FlagEventCollectionRep = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
